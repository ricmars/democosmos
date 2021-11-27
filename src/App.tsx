import { Suspense, lazy, useEffect, useState, useContext, FormEvent } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import {
  Icon,
  Modal,
  ModalManagerContext,
  AppShell,
  AppShellList,
  Avatar,
  Progress,
  Button
} from '@pega/cosmos-react-core';
import Login from './pages/Login';
import { fetchData, sendData, getDataUrl } from './services';
import { getOperatorName, getOperatorUrl } from './utils/env';
import { getCookie, setCookie } from './utils/cookie';
import { renderView } from './utils/renderer';
import ErrorBoundary from './components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Search = lazy(() => import('./pages/Search'));
const CaseView = lazy(() => import('./pages/CaseView'));

function App() {
  const history = useHistory();

  if (window.history.state && window.history.state.token) {
    (window as any).token = window.history.state.token;
    (window as any).portal = window.history.state.portal;
    (window as any).config = window.history.state.config;
  } else if (
    window.history.state &&
    window.history.state.state &&
    window.history.state &&
    window.history.state.state.token
  ) {
    (window as any).token = window.history.state.state.token;
    (window as any).portal = window.history.state.state.portal;
    (window as any).config = window.history.state.state.config;
  } else {
    const tmptoken = getCookie('token');
    if (tmptoken && tmptoken !== '') (window as any).token = tmptoken;
    const tmpconfig = sessionStorage.getItem('config');
    if (tmpconfig && tmpconfig !== '') (window as any).config = JSON.parse(tmpconfig);
  }

  const { create: createModal } = useContext(ModalManagerContext);
  const [portal, setPortal] = useState<any>();
  const [isPortalLoaded, setPortalLoaded] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const [activeNavItem, setactiveNavItem] = useState(0);
  const [numNewNotifications, setNumNewNotifications] = useState(0);
  const [notificationViewItems] = useState([]);
  const [recentViewItems] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const CreateCaseModal = ({ className, caseType }: { className: string; caseType: string }) => {
    const [form, setForm] = useState(
      <Progress
        style={{
          justifyContent: 'center',
          width: '100%',
          margin: '2rem 0'
        }}
        placement='inline'
      />
    );

    const { ModalContext } = useContext(ModalManagerContext);
    const { dismiss } = useContext(ModalContext);

    useEffect(() => {
      let isMounted = true;
      sendData(
        'caseview',
        '',
        JSON.stringify({
          caseTypeID: className,
          content: {},
          processID: 'pyStartCase'
        })
      ).then(response => {
        if (isMounted) {
          if (response.uiResources) {
            const name = response.uiResources.root.config.name;
            setForm(
              <ErrorBoundary>
                {renderView(response.uiResources.resources.views[name], false, '', response)}
              </ErrorBoundary>
            );
          }
        }
      });
      return () => {
        isMounted = false;
      };
    }, []);

    return (
      <Modal
        as='form'
        heading={`New ${caseType}`}
        actions={
          <>
            <Button onClick={dismiss}>Cancel</Button>
            <Button
              variant='primary'
              type='submit'
              onClick={(e: FormEvent) => {
                e.preventDefault();
                dismiss();
              }}
            >
              Create
            </Button>
          </>
        }
      >
        {form}
      </Modal>
    );
  };

  useEffect(() => {
    if ((window as any).token && !isPortalLoaded) {
      fetchData('portal')
        .then(response => {
          setPortal(response);
          setPortalLoaded(true);
          response.data.pyPortal.pyPrimaryNavPages.forEach((element: any) => {
            element.path = element.pyLabel.toLowerCase().replace(/\s+/g, '');
          });
          (window as any).portal = response;
          window.history.replaceState(
            {
              token: (window as any).token,
              portal: response,
              config: (window as any).config
            },
            '',
            window.location.pathname
          );
        })
        .catch(function (error) {
          setErrorMsg('Error accessing the remote server');
        });
    }
  });

  const logOffAction = () => {
    window.history.replaceState({}, '', window.location.origin);
    setCookie('token', '', 0);
    sessionStorage.removeItem('config');
    delete (window as any).token;
    delete (window as any).config;
    delete (window as any).portal;
    window.location.reload();
  };

  const getCaseTypesToCreate = () => {
    if (!portal || !portal.data) return [];
    return portal.data.pyPortal.pyCaseTypesAvailableToCreate.map((item: any, i: number) => {
      return {
        id: `casecreate-${i}`,
        name: item.pyLabel,
        onClick: () => {
          createModal(CreateCaseModal, { className: item.pyClassName, caseType: item.pyLabel });
        }
      };
    });
  };

  const getMainNavPages = () => {
    if (!portal || !portal.data) return [];
    return portal.data.pyPortal.pyPrimaryNavPages.map((item: any, i: number) => {
      return {
        id: `nav-${i}`,
        name: item.pyLabel,
        icon: item.pxPageViewIcon.replace('pi pi-', ''),
        active: i === activeNavItem,
        onClick: () => {
          setactiveNavItem(i);
          history.push(i === 0 ? '/' : '/' + item.path, {
            token: (window as any).token,
            portal: (window as any).portal,
            config: (window as any).config
          });
        }
      };
    });
  };

  const getUtils = () => {
    if (!portal || !portal.data) return [];
    return [
      {
        name: 'Notifications',
        visual: <Icon name='bell-solid' />,
        count: numNewNotifications,
        drawerView: <AppShellList listView={notificationViewItems} />,
        onDrawerOpen: () => setNumNewNotifications(0)
      },
      {
        name: 'Recents',
        visual: <Icon name='clock-solid' />,
        drawerView: <AppShellList listView={recentViewItems} />
      }
    ];
  };

  const defaultMainContent = (
    <Suspense fallback={<Progress placement='global' />}>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
        <Route path='/case/:casetypeid/:caseid'>
          <CaseView />
        </Route>
      </Switch>
    </Suspense>
  );

  const showSearchResults = (searchString: string) => {
    (window as any).searchString = searchString;
    history.push('/search', {
      token: (window as any).token,
      portal: (window as any).portal,
      config: (window as any).config
    });
  };

  const getOperatorData = () => {
    return {
      avatar: (
        <Avatar name={getOperatorName()} imageSrc={getDataUrl('operatorimage', getOperatorUrl())} />
      ),
      actions: [{ text: 'Log out', id: 'logout', onClick: logOffAction }],
      name: getOperatorName()
    };
  };
  if (!(window as any).token) {
    history.replace('/login');
    return <Login />;
  }
  if (errorMsg !== '') {
    return <div className='error-msg'>{errorMsg}</div>;
  }
  if (!isPortalLoaded) {
    return <Progress placement='global' />;
  }

  return (
    <AppShell
      appInfo={{
        href: 'https://www.pega.com/',
        imageSrc: 'https://pbs.twimg.com/profile_images/1410341211978752004/pLYjGIa8_bigger.jpg',
        appName: 'Cosmos AppShell',
        portalName: 'Demo'
      }}
      searchInput={{
        onSearchChange: value => {
          setSearchVal(value);
        },
        onSearchSubmit: value => {
          showSearchResults(value.trim());
          setSearchVal('');
        },
        value: searchVal
      }}
      caseTypes={getCaseTypesToCreate()}
      links={getMainNavPages()}
      main={defaultMainContent}
      operator={getOperatorData()}
      utils={getUtils()}
      appHeader={true}
    />
  );
}
export default App;
