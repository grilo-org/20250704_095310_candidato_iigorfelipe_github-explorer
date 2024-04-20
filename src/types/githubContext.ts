import { GitHubRepositoryType, GitHubUserType } from "./api";

export type UserInfos = {
  user: Partial<GitHubUserType>;
  repos: GitHubRepositoryType[];
  stars: GitHubRepositoryType[];
};

export type OptionType = {
  option: string;
  check: boolean;
  title: string;
};

export type FilterFeedbackType = {
  show: boolean;
  repo: string;
  results: number;
  type: string;
  language: string;
  sort: string;
};

export type GithubContextType = {
  userInfos: UserInfos;
  setUserInfos: React.Dispatch<React.SetStateAction<UserInfos>>;
  reposFiltered: GitHubRepositoryType[];
  setReposFiltered: React.Dispatch<React.SetStateAction<GitHubRepositoryType[]>>;
  handleSearchInput: (value: string) => void;
  searchRepo: string;
  setSearchRepo: React.Dispatch<React.SetStateAction<string>>;
  types: OptionType[];
  setTypes: React.Dispatch<React.SetStateAction<OptionType[]>>;
  sorts: OptionType[];
  setSorts: React.Dispatch<React.SetStateAction<OptionType[]>>;
  languages: OptionType[];
  setLanguages: React.Dispatch<React.SetStateAction<OptionType[]>>;
  filterFeedback: FilterFeedbackType
  setFilterFeedback: React.Dispatch<React.SetStateAction<FilterFeedbackType>>;
  handleClearFilter: () => void
};
