import { Suspense, lazy, useEffect, useState, useCallback, FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import {
  Avatar,
  Progress,
  Icon,
  EmptyState,
  MetaList,
  Text,
  Button,
  Form
} from '@pega/cosmos-react-core';
import { CaseView as CaseViewComp, Tasks, Stages } from '@pega/cosmos-react-work';
import { fetchData, sendData } from '../services';
import { getField, renderDisplayFieldLabel, renderDisplayFieldValue } from '../utils/field';
import { getDataUrl } from '../services';
import { renderView } from '../utils/renderer';
import ErrorBoundary from '../components/ErrorBoundary';
import { getFormData } from '../utils/form';

export default function CaseViewPage() {
  const { caseid } = useParams() as any;
  const [isLoaded, setCaseIsLoaded] = useState(false);
  const [caseObj, setCaseObj] = useState<any>();
  const [isLimited, setIsLimited] = useState(true);
  const [assignmentID, setAssignmentID] = useState('');
  const [stepName, setStepName] = useState('');
  const [currentTabId, setCurrentTabId] = useState('tab-0');
  const [utilities, setUtilities] = useState([]);
  const [utilitiesSummaries, setUtilitiesSummaries] = useState([]);
  const [UtilitySummaryCtx, setUtilitySummaryCtx] = useState<any>({});
  const [formField, setformField] = useState<any>();

  useEffect(() => {
    let isMounted = true;
    if (assignmentID !== '') {
      fetchData('assignments', assignmentID).then(response => {
        if (isMounted) {
          if (response.uiResources) {
            const name = response.uiResources.root.config.name;
            setStepName(response.data.caseInfo.content.pyViewName);
            setformField(
              <ErrorBoundary>
                {renderView(response.uiResources.resources.views[name], false, '', response)}
              </ErrorBoundary>
            );
          }
        }
      });
    }
    return () => {
      isMounted = false;
    };
  }, [assignmentID]);

  const RenderAssignment = ({
    onSubmit,
    onCancel
  }: {
    onSubmit: (e: FormEvent) => void;
    onCancel: () => void;
  }) => {
    return (
      <Form
        actions={
          <>
            <Button onClick={onCancel}>Cancel</Button>
            <Button variant='primary' onClick={onSubmit}>
              Submit
            </Button>
          </>
        }
      >
        {formField}
      </Form>
    );
  };

  const getCaseViewRegion = useCallback(
    (name: string) => {
      if (!caseObj || !caseObj.uiResources.resources.views.pyDetails) return [];
      for (const item of caseObj.uiResources.resources.views.pyDetails[0].children) {
        if (item.name === name) return item;
      }
      return [];
    },
    [caseObj]
  );

  useEffect(() => {
    if (!caseObj) return;
    const utilities = getCaseViewRegion('Utilities');
    setUtilities(
      utilities.children.map((item: any, i: number) => {
        try {
          const Utility = lazy(() =>
            import(`../components/${item.type}`).catch((err: string) => {
              console.error('An error has occured', err);
            })
          );
          return (
            <Suspense key={`utility-${i}`} fallback={<Progress placement='local' />}>
              <Utility caseid={caseid} utilityCtx={setUtilitySummaryDetails} />
            </Suspense>
          );
        } catch (e) {
          return <div key={`utility-${i}`}>Utility {item.type} not found</div>;
        }
      })
    );
  }, [caseObj, caseid, getCaseViewRegion]);

  useEffect(() => {
    fetchData('caseview', caseid).then(response => {
      setCaseObj(response);
      setCaseIsLoaded(true);
    });
  }, [caseid]);

  const setUtilitySummaryDetails = (widget: any, value: any) => {
    setUtilitySummaryCtx((prevState: any) => {
      if (prevState[widget] && prevState[widget].count === value.count) return prevState;
      return { ...prevState, [widget]: value };
    });
  };

  useEffect(() => {
    if (!caseObj) return;
    const utilities = getCaseViewRegion('Utilities');
    setUtilitiesSummaries(
      utilities.children.reduce((result: any, child: any) => {
        const label: string = child.type;
        if (label && UtilitySummaryCtx[label]) {
          result.push(UtilitySummaryCtx[label]);
        }
        return result;
      }, [])
    );
  }, [UtilitySummaryCtx, caseObj, getCaseViewRegion]);

  const renderTasklist = () => {
    return caseObj.data.caseInfo.assignments
      .filter((item: any, i: number) => {
        return !isLimited || i < 3;
      })
      .map((item: any, i: number) => {
        return {
          avatar: (
            <Avatar
              name={item.assigneeInfo.name}
              imageSrc={getDataUrl('operatorimage', item.assigneeInfo.image)}
            />
          ),
          name: item.name,
          meta: (
            <MetaList
              items={[
                <Text variant='secondary'>Task in {caseid}</Text>,
                <Text variant='secondary'>Urgency {item.urgency}</Text>
              ]}
            />
          ),
          actions: (
            <Button
              variant='primary'
              onClick={() => {
                setAssignmentID(item.links.open.href);
              }}
            >
              Go
            </Button>
          ),
          content:
            assignmentID !== '' ? (
              <RenderAssignment
                onSubmit={(e: FormEvent) => {
                  const content = {};
                  const pageInstructions: any = [];
                  getFormData(
                    (e.target as Element).closest('form'),
                    content,
                    pageInstructions,
                    caseObj.data.caseInfo.content
                  );
                  sendData(
                    'assignments',
                    assignmentID.substring(1) + '/actions/' + stepName,
                    JSON.stringify({
                      content,
                      pageInstructions
                    })
                  ).then(response => {
                    if (response.uiResources) {
                      const name = response.uiResources.root.config.name;
                      setformField(
                        <ErrorBoundary>
                          {renderView(
                            response.uiResources.resources.views[name],
                            false,
                            '',
                            response
                          )}
                        </ErrorBoundary>
                      );
                      setCaseObj((prevState: any) => {
                        return { ...prevState, data: response.data };
                      });
                    }
                  });
                  setAssignmentID('');
                }}
                onCancel={() => {
                  setAssignmentID('');
                }}
              />
            ) : null
        };
      });
  };

  const getAssignments = () => {
    if (!caseObj.data.caseInfo.assignments) return null;
    return (
      <Tasks
        name='Tasks'
        count={caseObj.data.caseInfo.assignments.length}
        items={renderTasklist()}
        emptyPlaceholder={<EmptyState />}
        onExpandToggle={() => {
          setIsLimited(cur => !cur);
        }}
      />
    );
  };

  const getStages = () => {
    const stagelist = caseObj.data.caseInfo.stages;
    return stagelist.map((item: any) => {
      return {
        name: item.name,
        id: `stage-${item.name}`,
        complete: item.visited_status === 'completed'
      };
    });
  };

  const renderStages = () => {
    return (
      <Stages
        stages={getStages()}
        current={`stage-${caseObj.data.caseInfo.stageLabel}`}
        caseTitle='Stages'
      />
    );
  };

  const getActions = () => {
    const actionlist = caseObj.data.caseInfo.availableActions;
    return actionlist.map((item: any, i: number) => {
      return {
        text: item.name,
        id: `action-${i}`,
        onClick: () => {}
      };
    });
  };

  const getTabItems = () => {
    const tabs = getCaseViewRegion('Tabs');
    return tabs.children.map((item: any, i: number) => {
      let tabname = item.config.label;
      if (!tabname && item.config.inheritedProps && item.config.inheritedProps.length > 0) {
        tabname = item.config.inheritedProps[0];
      }
      tabname = typeof tabname === 'string' ? tabname.replace('@L ', '') : '';
      return {
        name: tabname,
        id: `tab-${i}`
      };
    });
  };

  const getCaseTabs = () => {
    return {
      items: getTabItems(),
      currentTabId: currentTabId,
      onClick: (id: string) => setCurrentTabId(id)
    };
  };

  const getSummaryFields = (index: number) => {
    return caseObj.uiResources.resources.views.pyCaseSummary[0].children[index].children.map(
      (item: any, i: number) => {
        getField(caseObj, item);
        return {
          id: `p-${i}`,
          name: renderDisplayFieldLabel(item),
          value: renderDisplayFieldValue(item)
        };
      }
    );
  };

  if (!isLoaded) {
    return <Progress placement='global' />;
  }

  return (
    <CaseViewComp
      caseId={caseid}
      heading={caseObj ? caseObj.data.caseInfo.content.pyLabel : ''}
      icon={<Icon name='polaris-solid' />}
      followed={false}
      onFollowedChange={() => {}}
      onEdit={() => {}}
      summaryFields={{
        primary: getSummaryFields(0),
        secondary: getSummaryFields(1)
      }}
      tabs={getCaseTabs()}
      tasks={getAssignments()}
      stages={renderStages()}
      actions={getActions()}
      utilities={utilities}
      utilitiesSummaryItems={utilitiesSummaries}
    />
  );
}
