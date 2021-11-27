import { useState } from 'react';
import { authenticate, fetchData, sendData } from '../services';
import { setCookie } from '../utils/cookie';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const sendCredentials = (e: React.FormEvent<HTMLFormElement>) => {
    setErrorMsg('');
    authenticate(username, password)
      .then(response => {
        if (response.access_token) {
          (window as any).token = response.access_token;
          sendData('setc11ncookie', '', `token=${(window as any).token}`);
          fetchData('dataviews', 'D_pxBootstrapConfig').then(response => {
            (window as any).config = JSON.parse(response.pyConfigJSON);
            setCookie('token', (window as any).token, 3);
            sessionStorage.setItem('config', JSON.stringify((window as any).config));
            window.history.replaceState(
              { token: (window as any).token, config: (window as any).config },
              '',
              window.location.origin
            );
            window.location.reload();
          });
        }
      })
      .catch(error => {
        setErrorMsg('The information you entered was not recognized');
      });
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <main>
      <h1 className='sr-only'>Login page</h1>
      <form id='credentialsForm' onSubmit={sendCredentials}>
        <div className='login-logo'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 311 68'>
            <title>Pega with flying horse logo</title>
            <path
              fill='#fff'
              d='M78.42 9.8a45 45 0 0 0-.7 18.31c-1.6-.32-3.24-.63-4.92-.9C37.73 21.5 27.15 38.79 31.24 52.8A235 235 0 0 0 0 67.05C13.77 34 43.68 5 68.93 1.16 77.18.07 79.49 5.42 78.42 9.8zm73.81 26.48S150.7 39 150 40s-2.84 1.66-4.71.77c-.85-.41-8.82-5.06-11.87-4.79-15.44 1.35-19.65-5-20.14-5.59s-1.43-.31-.76.82c3.38 5.81 13.41 8.51 13.41 8.51a38 38 0 0 1 2.93 10.74 45.26 45.26 0 0 0-8.37-5.15A116.37 116.37 0 0 0 83 29.27C84 15.69 90.83-3.95 122.88.7c0 0 6.43 1.05 10.71 4 0 0-1 1.08-2.38 2.44a1.29 1.29 0 0 0 .14 2.21l6.77 5.32c.08 2.82.2 3.6 2.32 6.15S150.79 32 151.87 33.15a2.94 2.94 0 0 1 .36 3.13zM136.15 17l-.15-.1a3.55 3.55 0 0 0-3.93.8l-.22.24 3.51 1.72z'
            />
            <path
              fill='#009C9D'
              d='M81.31 40.15C66 41.61 47.89 46.55 31.24 52.81c-4.09-14 6.49-31.31 41.56-25.6 1.68.27 3.32.58 4.92.9a55.47 55.47 0 0 0 3.59 12.04zm2-.17c13.66-1.08 26.56.29 37.22 5.36A116.37 116.37 0 0 0 83 29.27 54.81 54.81 0 0 0 83.28 40z'
            />
            <path
              fill='#fff'
              d='M210.12 35.49h15.51v-7h-15.51v-7.56h19.29v-7h-27.16v36h27.41v-7h-19.54zm29.43-17.58a18.66 18.66 0 0 0-5.69 13.88 18.5 18.5 0 0 0 5.59 13.77A19.09 19.09 0 0 0 253.29 51c6.49 0 11.56-2 15.08-5.84l.18-.2V28.45H252.9v6.68h8.16v6.75a15.14 15.14 0 0 1-7.85 1.9 11.4 11.4 0 0 1-11.61-12 11.57 11.57 0 0 1 3.49-8.74 12.12 12.12 0 0 1 8.66-3.33 15.44 15.44 0 0 1 4.75.66 11.86 11.86 0 0 1 3.8 2.2l4.38-5.53c-2.31-2-6.47-4.71-13.39-4.71a19 19 0 0 0-13.74 5.58zm-56.88-4H168v36h7.92V39.09h6c8.08 0 14.56-4.32 14.56-12.65v-.11c-.02-7.33-5.21-12.44-13.81-12.44zm5.76 12.7c0 3.09-2.31 5.45-6.27 5.45h-6.27V21H182c4 0 6.42 1.9 6.42 5.45zm115.48-11.16h.38a.78.78 0 0 1 .49.12.44.44 0 0 1 .16.39.5.5 0 0 1-.17.38.71.71 0 0 1-.47.14h-.39zm.47-1.56a2.7 2.7 0 1 0 2.7 2.7 2.7 2.7 0 0 0-2.7-2.7zm2.33 2.7a2.33 2.33 0 1 1-2.33-2.33 2.33 2.33 0 0 1 2.33 2.33zm-2.8 1.55v-1.21h.49l.71 1.21h.6l-.82-1.36a.85.85 0 0 0 .43-.33.91.91 0 0 0 .16-.51.88.88 0 0 0-.28-.71 1.34 1.34 0 0 0-.88-.24h-.94v3.15zm-16.27-4.25l-15.32 36h8l3.26-8h15.12l3.27 8h8.22l-15.32-36zm-1.22 21l4.74-11.59 4.75 11.59z'
            />
          </svg>
        </div>
        <div id='credentialsCard'>
          {errorMsg !== '' ? <div className='login-error'>{errorMsg}</div> : null}
          <div className='login-field login-field-user'>
            <label htmlFor='txtUserID'>
              <svg
                aria-hidden='true'
                className='svg-icon'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 25 25'
                focusable='false'
                preserveAspectRatio='xMinYMin'
              >
                <title>User name</title>
                <path d='M15.16 12.92a8.51 8.51 0 0 1 4.54 3.19 9.09 9.09 0 0 1 1.81 5.4v1.49a.48.48 0 0 1-.54.54c-.32 0-.49-.18-.49-.54v-1.49a8 8 0 0 0-8-8 7.72 7.72 0 0 0-5.67 2.34 7.75 7.75 0 0 0-2.34 5.67v1.48c0 .36-.17.54-.49.54s-.49-.18-.49-.54v-1.49a9 9 0 0 1 6.35-8.64 6 6 0 0 1-2.44-2.18 5.75 5.75 0 0 1-.93-3.19 5.78 5.78 0 0 1 1.76-4.25 5.8 5.8 0 0 1 4.25-1.76 5.78 5.78 0 0 1 4.24 1.76 5.74 5.74 0 0 1 1.76 4.25 5.75 5.75 0 0 1-.93 3.19 5.9 5.9 0 0 1-2.44 2.18zm-6.16-1.92a4.8 4.8 0 0 0 3.52 1.47 4.84 4.84 0 0 0 3.48-1.47 4.78 4.78 0 0 0 1.5-3.5 4.85 4.85 0 0 0-1.5-3.57 4.83 4.83 0 0 0-3.56-1.46 4.79 4.79 0 0 0-3.44 1.46 4.85 4.85 0 0 0-1.5 3.57 4.78 4.78 0 0 0 1.5 3.5z'></path>
              </svg>
              <span className='sr-only'>User name</span>
            </label>
            <input
              id='txtUserID'
              autoCorrect='off'
              autoCapitalize='none'
              type='text'
              size={20}
              name='UserIdentifier'
              placeholder='User name'
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className='login-field login-field-password'>
            <label htmlFor='txtPassword'>
              <svg
                role='img'
                className='svg-icon'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 25 25'
                focusable='false'
                aria-hidden='true'
                preserveAspectRatio='xMinYMin'
              >
                <title>Password</title>
                <path d='M20.58 10.45a1.4 1.4 0 0 1 .44 1v12a1.5 1.5 0 0 1-1.51 1.55h-14a1.5 1.5 0 0 1-1.51-1.51v-12a1.4 1.4 0 0 1 .44-1 1.46 1.46 0 0 1 1.05-.49h1.51v-4.48a5.4 5.4 0 0 1 1.59-3.91 5.28 5.28 0 0 1 3.89-1.61 5.33 5.33 0 0 1 3.9 1.61 5.31 5.31 0 0 1 1.62 3.91v4.48h1.52a1.46 1.46 0 0 1 1.06.45zm-.58 1a.43.43 0 0 0-.49-.48h-14a.43.43 0 0 0-.49.48v12a.43.43 0 0 0 .49.48h14a.43.43 0 0 0 .49-.48zm-12-1.45h9v-4.48a4.35 4.35 0 0 0-1.35-3.2 4.33 4.33 0 0 0-3.17-1.32 4.28 4.28 0 0 0-3.18 1.32 4.4 4.4 0 0 0-1.3 3.2zM12.5 20.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5z'></path>
              </svg>
              <span className='sr-only'>Password</span>
            </label>
            <input
              id='txtPassword'
              className='inputBox'
              type='password'
              name='Password'
              size={20}
              placeholder='Password'
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button className='login-button' type='submit'>
            Log in
          </button>
        </div>
      </form>
    </main>
  );
}
