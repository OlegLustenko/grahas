import { GET_USER } from '../../querries/get-user';

export const setUserTime = (
  _root: any,
  { time }: { time: string },
  { cache }: any,
) => {
  const query = cache.readQuery({ query: GET_USER });
  const data = {
    user: {
      ...query.user,
      time,
    },
  };

  cache.writeQuery({ query: GET_USER, data });

  return data;
};
