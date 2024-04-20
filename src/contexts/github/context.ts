import { createContext } from "react";
import { initialFeedback, initialLanguages, initialSorts, initialTypes } from "../../helpers/initialValues";
import { GithubContextType } from "../../types/githubContext";

export const defaultValues: GithubContextType = {
  userInfos: {
    user: {},
    repos: [],
    stars: [],
  },
  setUserInfos: () => {},
  reposFiltered: [],
  setReposFiltered: () => {},
  handleSearchInput: () => {},
  searchRepo: '',
  setSearchRepo: () => {},
  types: initialTypes,
  setTypes: () => {},
  sorts: initialSorts,
  setSorts: () => {},
  languages: initialLanguages,
  setLanguages: () => {},
  filterFeedback: initialFeedback,
  setFilterFeedback: () => {},
  selectedOption: { title:  '', value: '' },
  setSelectedOption: () => {},
  handleClearFilter: () => {}
};

export const GithubContext = createContext<GithubContextType>(defaultValues);
