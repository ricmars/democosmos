import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Configuration, PopoverManager, ModalManager, Toaster } from '@pega/cosmos-react-core';

ReactDOM.render(
  <Router>
    <Configuration>
      <PopoverManager>
        <Toaster dismissAfter={5000}>
          <ModalManager>
            <App />
          </ModalManager>
        </Toaster>
      </PopoverManager>
    </Configuration>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
