import React from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import App from './app';
import GlobalStyle from './styles/global-style';
import theme from './styles/theme';
import { rootReducer } from './store';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

ReactDom.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>,
  window.document.getElementById('root'),
);
