import { gql } from 'apollo-boost';

export const GET_NATAL_CHART = gql`
  query NatalChart($user: UserInfoInput!) {
    chart(user: $user)
    chartUrl @client
  }
`;
