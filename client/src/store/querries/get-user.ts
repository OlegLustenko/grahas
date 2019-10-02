import { gql } from 'apollo-boost';

export const GET_USER = gql`
  query UserInfo {
    user @client {
      __typename
      gmt
      date
      time
      city
      coordinates {
        latitude
        longitude
      }
    }
  }
`;
