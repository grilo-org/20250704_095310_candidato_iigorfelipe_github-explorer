import { createContext, useEffect } from 'react';
import { ReactNode, useState } from 'react';
import { GithubContextType, UserInfos } from '../types/githubContext';

export const githubDefaultValues = {
  userInfos: {
    user: {},
    repos: [],
    stars: [],
  },
  setUserInfos: () => {},

  reposFiltered: [],
  setReposFiltered: () => {},
};

export const GithubContext =
  createContext<GithubContextType>(githubDefaultValues);

type Props = {
  children: ReactNode;
};

const GithubProvider = ({ children }: Props) => {
  const [userInfos, setUserInfos] = useState<UserInfos>(
    githubDefaultValues.userInfos
  );
  const [reposFiltered, setReposFiltered] = useState<any[]>([]);

    useEffect(() => {
      const repositories = userInfos?.repos || [];
      setReposFiltered(repositories);
    }, [userInfos?.repos]);

  const values = {
    userInfos,
    setUserInfos,
    reposFiltered,
    setReposFiltered
  };

  return (
    <GithubContext.Provider value={values}>{children}</GithubContext.Provider>
  );
};

export default GithubProvider;
