import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { theme } from './components/theme';
import * as serviceWorker from './serviceWorker';
import { ApolloClientProvider } from './store/apollo-provider';

ReactDOM.render(
  <ApolloClientProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloClientProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
