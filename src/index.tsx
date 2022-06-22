import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { GlobalStyle } from 'styles/globalStyle';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';

const element = (
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(element);

reportWebVitals();