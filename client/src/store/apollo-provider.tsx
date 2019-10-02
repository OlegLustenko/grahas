import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import { apolloClient } from './apollo-client';

export const ApolloClientProvider: React.FunctionComponent = ({ children }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
