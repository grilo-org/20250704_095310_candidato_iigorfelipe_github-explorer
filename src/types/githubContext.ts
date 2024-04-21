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

export type Types = 'Todos' | 'Forks' | 'Arquivados' | 'Modelos';
export type Sorts = 'Última atualização' | 'Nome' | 'Estrelas';

export type KeyOption = 'type' | 'language' | 'sort';
export type TypeKeyFilter = 'all' | 'fork' | 'archived' | 'is_template';
export type LanguageKeyFilter = string;
export type SortKeyFilter = 'name' | 'updated_at' | 'stargazers_count';

export type Filters = {
  show: boolean;
  repo: string;
  type: [KeyOption, string, TypeKeyFilter];
  language: [KeyOption, string, LanguageKeyFilter];
  sort: [KeyOption, string, SortKeyFilter];
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
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  handleClearFilter: () => void;
};
