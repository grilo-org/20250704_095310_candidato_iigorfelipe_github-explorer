import { GitHubRepositoryType, GitHubUserType } from "./api";

export type UserInfos = {
  user: Partial<GitHubUserType>;
  repos: GitHubRepositoryType[];
  stars: GitHubRepositoryType[];
};

export type GithubContextType = {
  userInfos: UserInfos;
  setUserInfos: React.Dispatch<React.SetStateAction<UserInfos>>;
  reposFiltered: GitHubRepositoryType[];
  setReposFiltered: React.Dispatch<React.SetStateAction<GitHubRepositoryType[]>>;
};