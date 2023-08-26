import { setCookie } from './utils/cookie';

const { url, portalName, clientid, clientsecret, application, c11nurl } = JSON.parse(
  window.localStorage.getItem('config') ||
    '{"url":"","portalName":"","clientid":"","clientsecret":"", "application":"", "c11nurl":""}'
);

export const getDataUrl = (type: string, content: string) => {
  if (!content || content === '') return '';
  /*
  switch (type) {
    case 'operatorimage':
      fetchData('operatorimage', content).then(response => {
        return response;
      });
      break;
    default:
      break;
  }
*/
  return '';
};

export const getApplicationPath = () => {
  return `${url}/app/${application}`;
};

/**
 * fetch the data using the DX API
 *
 */
export const fetchData = (type: string, content?: any) => {
  let authToken = '';
  if ((window as any).token && (window as any).token !== '') {
    authToken = `Bearer ${(window as any).token}`;
  } else {
    return Promise.reject('no token');
  }
  let headers: any = {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: authToken
  };
  if (type === 'operatorimage') {
    headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: authToken
    };
  }
  const reqHeaders: any = {
    method: 'GET',
    headers,
    mode: 'cors'
  };
  let apiurl = `${url}/app/${application}/api/application/v2/`;
  switch (type) {
    case 'portal':
      apiurl += `portals/${portalName}`;
      break;
    case 'feed':
      apiurl += `feeds/pyDashboardFeed?${content}`;
      break;
    case 'caseview':
      apiurl += `cases/${content}?viewType=page`;
      break;
    case 'cases':
      apiurl += `cases/${content}`;
      break;
    case 'assignments':
      apiurl += `${content}`;
      break;
    case 'dataviews':
      apiurl += `data_views/${content}`;
      break;
    case 'operatorimage':
      apiurl = `${c11nurl}/app/${application}/image/${content}`;
      reqHeaders.credentials = 'include';
      break;
    default:
      break;
  }
  return fetch(apiurl, reqHeaders).then(res => {
    if (type === 'assignments') {
      (window as any).etag = res.headers.get('etag');
    }
    if (res.status === 401) {
      window.history.replaceState({}, '', window.location.pathname);
      setCookie('token', '', 3);
      sessionStorage.removeItem('config');
      delete (window as any).token;
      delete (window as any).config;
      window.location.reload();
    }
    if (res.status === 200) {
      return res.json();
    }
    if (res.ok) {
      return Promise.resolve('ok');
    }
    return Promise.reject(res);
  });
};

export const authenticate = (username: string, password: string) => {
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8'
  };
  const reqHeaders: any = {
    method: 'POST',
    headers,
    mode: 'cors'
  };
  let apiurl = `${url}/api/application/v2/`;
  reqHeaders.body =
    `grant_type=password&client_id=${clientid}&client_secret=${clientsecret}` +
    `&username=${username}&password=${password}`;
  reqHeaders.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  apiurl = `${url}/PRRestService/oauth2/v1/token`;
  return fetch(apiurl, reqHeaders).then(res => {
    if (res.status === 200) {
      return res.json();
    }
    if (res.ok) {
      return Promise.resolve('ok');
    }
    return Promise.reject(res);
  });
};

export const sendData = (type: string, id: string, content: any, method?: string) => {
  let authToken = '';
  if ((window as any).token && (window as any).token !== '') {
    authToken = `Bearer ${(window as any).token}`;
  } else {
    return Promise.reject('no token');
  }
  let headers: any = {
    'Content-Type': 'application/json;charset=UTF-8',
    Authorization: authToken
  };
  const reqHeaders: any = {
    method: method ? method : 'POST',
    headers,
    mode: 'cors'
  };
  let apiurl = `${url}/app/${application}/api/application/v2/`;
  switch (type) {
    case 'dataviews':
      apiurl += `data_views/${id}`;
      reqHeaders.body = content;
      break;
    case 'caseview':
      apiurl += 'cases' + (id !== '' ? '/' + id : '') + `?viewType=page`;
      reqHeaders.body = content;
      break;
    case 'cases':
      apiurl += `cases/${id}`;
      reqHeaders.body = content;
      break;
    case 'assignments':
      apiurl += id + '?viewType=form';
      reqHeaders.body = content;
      reqHeaders.method = 'PATCH';
      reqHeaders.headers['If-Match'] = (window as any).etag;
      break;
    default:
      break;
  }
  return fetch(apiurl, reqHeaders).then(res => {
    if (res.status === 401) {
      window.history.replaceState({}, '', window.location.pathname);
      setCookie('token', '', 3);
      sessionStorage.removeItem('config');
      delete (window as any).token;
      delete (window as any).config;
      window.location.reload();
    }
    if (res.statusText === 'OK') {
      return Promise.resolve('ok');
    }
    if (res.status === 200 || res.status === 201) {
      return res.json();
    }
    if (res.ok) {
      return Promise.resolve('ok');
    }
    return Promise.reject(res);
  });
};
