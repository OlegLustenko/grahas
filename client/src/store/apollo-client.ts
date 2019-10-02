import ApolloClient, { gql, InMemoryCache } from 'apollo-boost';
import { GET_NATAL_CHART } from './querries/get-natal-chart';
import { setUserTime } from './resolvers/mutation/set-user-time';

const cache = new InMemoryCache();
const typeDefs = gql`
  type Mutation {
    setUserTime(time: String!): String!
  }

  type Query {
    user: UserInfoInput
  }
`;

export const apolloClient = new ApolloClient({
  cache,
  uri: '/graphql',
  clientState: {
    defaults: {
      user: {
        __typename: 'User',
        gmt: '3',
        date: '15.07.1989',
        time: '08:10',
        city: 'Kharkov',
        coordinates: {
          __typename: 'Coordinates',
          latitude: '49.992167',
          longitude: '36.231202',
        },
      },
      networkStatus: {
        __typename: 'NetworkStatus',
        isConnected: false,
      },
    },
    resolvers: {
      Mutation: {
        setUserTime,
      },
      Query: {
        chartUrl: (_root, _variables, { cache }) => {
          const query = cache.readFragment({
            fragment: gql`
              fragment chart on NatalChart {
                chart
              }
            `,
          });
          console.log(query);
          return 'privet';
        },
      },
    },
    typeDefs,
  },
});
