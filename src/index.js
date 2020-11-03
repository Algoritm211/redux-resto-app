import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './index.css';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import ErrorBoundry from './components/error-boundry'
import reportWebVitals from './reportWebVitals';
import RestoServiceContext from './components/resto-service-context/index';
import RestoService from './services/resto-service';
import store from './store';


const restoService = new RestoService()


ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <RestoServiceContext.Provider value={restoService} >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RestoServiceContext.Provider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
