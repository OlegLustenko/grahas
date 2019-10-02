import { gql } from 'apollo-boost';

export const SET_USER_TIME = gql`
  mutation SetUserTime($time: String!) {
    setUserTime(time: $time) @client {
      user {
        time
      }
    }
  }
`;
