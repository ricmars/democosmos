import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tasks } from '@pega/cosmos-react-work';
import { Avatar, EmptyState, Text, MetaList, Link } from '@pega/cosmos-react-core';
import { getOperatorName, getOperatorUrl } from '../utils/env';
import { getDataUrl } from '../services';
import { genStatus } from '../utils/status';

export default function Worklist() {
  const history = useNavigate();
  const [isLimited, setIsLimited] = useState(true);

  const page = (
    window as any
  ).portal.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults.replace(
    '.pxResults',
    ''
  );
  let tasklist: any[] = [];
  if ((window as any).portal.data[page].pxResults) {
    tasklist = (window as any).portal.data[page].pxResults;
  }

  const openCaseType = (path: string, e: React.FormEvent<HTMLFormElement>) => {
    history(path, {
      state: {
        token: (window as any).token,
        portal: (window as any).portal,
        config: (window as any).config
      }
    });
    e.preventDefault();
    e.stopPropagation();
  };

  const openAssignment = () => {};

  const renderTasklist = () => {
    return tasklist
      .filter((item, i) => {
        return !isLimited || i < 3;
      })
      .map((item, i) => {
        const keys = item.pxRefObjectKey.split(' ');
        const pyID = keys[keys.length - 1];
        const path = encodeURI(`/case/${keys[keys.length - 2]} ${keys[keys.length - 1]}`);
        return {
          id: item.pxRefObjectKey,
          name: item.pxTaskLabel,
          meta: (
            <MetaList
              items={[
                <Text variant='secondary'>
                  Task in{' '}
                  <Link
                    href={path}
                    onClick={(e: React.FormEvent<HTMLFormElement>) => {
                      openCaseType(path, e);
                    }}
                  >
                    {pyID}
                  </Link>
                </Text>,
                genStatus(item.pyAssignmentStatus),
                <Text variant='secondary'>Urgency {item.pxUrgencyAssign}</Text>
              ]}
            />
          ),
          onOpen: () => {
            openAssignment();
          },
          content: null
        };
      });
  };

  return (
    <Tasks
      name='My Worklist'
      count={tasklist.length}
      items={renderTasklist()}
      headerVisual={
        <Avatar
          size='l'
          name={getOperatorName()}
          imageSrc={getDataUrl('operatorimage', getOperatorUrl())}
        />
      }
      emptyPlaceholder={<EmptyState />}
      onExpandToggle={() => {
        setIsLimited(cur => !cur);
      }}
    />
  );
}
