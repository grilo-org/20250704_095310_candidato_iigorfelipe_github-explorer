import { createContext, useEffect } from 'react';
import { ReactNode, useState } from 'react';
import { GithubContextType, OptionType, UserInfos } from '../types/githubContext';
import { initialLanguages, initialSorts, initialTypes } from '../helpers/initialValues';
import { GitHubRepositoryType } from '../types/api';
import { useSearchParams } from 'react-router-dom';

const feedbackMock = {
  show: false,
  repo: '',
  results: 0,
  type: '',
  language: '',
  sort: ''
}

type FilterFeedbackType = {
  show: boolean;
  repo: string;
  results: number;
  type: string;
  language: string;
  sort: string;
}

export const githubDefaultValues = {
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

  filterFeedback: feedbackMock,
  setFilterFeedback: () => {},

  handleClearFilter: () => {}
};

export const GithubContext =
  createContext<GithubContextType>(githubDefaultValues);

type Props = {
  children: ReactNode;
};

const GithubProvider = ({ children }: Props) => {
  const [_searchParams, setSearchParams] = useSearchParams();
  const [userInfos, setUserInfos] = useState<UserInfos>(
    githubDefaultValues.userInfos
  );
  const [reposFiltered, setReposFiltered] = useState<GitHubRepositoryType[]>([]);
  const [searchRepo, setSearchRepo] = useState('');
  const [types, setTypes] = useState<OptionType[]>(initialTypes);
  const [sorts, setSorts] = useState<OptionType[]>(initialSorts);
  const [languages, setLanguages] = useState<OptionType[]>(initialLanguages);
  const [filterFeedback, setFilterFeedback] = useState<FilterFeedbackType>(feedbackMock);

  const handleClearFilter = () => {

    setSearchRepo('');
    setTypes(initialTypes);
    setSorts(initialSorts);
    setLanguages(initialLanguages);
    setReposFiltered(userInfos.repos);
    setFilterFeedback(feedbackMock);

    setSearchParams((prevState) => {
      const newState = new URLSearchParams(prevState);

      newState.delete('q');
      newState.delete('type');
      newState.delete('language');
      newState.delete('sort');

      return newState;
    });
  };

  const handleSearchInput = (value: string) => {
    const hasValue = value.trim().length > 0;

    setSearchRepo(hasValue ? value : '');

    setFilterFeedback({
      ...filterFeedback,
      repo: hasValue ? value.toLowerCase() : '',
      show: hasValue
    });

    setSearchParams((prevState) => {
      const newState = new URLSearchParams(prevState);

      if (hasValue) {
        newState.set('q', value);
      } else {
        newState.delete('q');
      };

      return newState;
    });

    const originalRepos = userInfos.repos;

    if (hasValue) {
      setReposFiltered(originalRepos.filter((item) => item.name.includes(value)));
    } else {
      setReposFiltered(originalRepos);
    };
  };

  const updateFilterFeedback = () => {
    const feedback = {...filterFeedback};

    const selectedType = types.find((type) => type.check && type.option !== 'Todos');
    const selectedLanguage = languages.find((language) => language.check && language.option !== 'Todos os idiomas');
    const selectedSort = sorts.find((sort) => sort.check);
    
    const valueInRepo = searchRepo.trim().length > 0;
    const valueInType = selectedType !== undefined;
    const valueInLanguage = selectedLanguage !== undefined;

    feedback.results = reposFiltered.length;
    feedback.type = selectedType ? selectedType.option.toLowerCase() : '';
    feedback.language = selectedLanguage ? selectedLanguage.option.toLowerCase() : '';
    feedback.sort = selectedSort ? selectedSort.option.toLowerCase() : '';  
    feedback.show = valueInRepo || valueInType || valueInLanguage;
 
    setFilterFeedback(feedback);

    setSearchParams((prevState) => {
      const newState = new URLSearchParams(prevState);
      
      if (valueInType) {
        newState.set('type', feedback.type);
      } else {
        newState.delete('type');
      };

      if (valueInLanguage) {
        newState.set('language', feedback.language);
      } else {
        newState.delete('language');
      };

      if (feedback.show) {
        newState.set('sort', feedback.sort);
      } else {
        newState.delete('sort');
      };
  
      return newState;
    });
  };
  
  useEffect(() => {
    updateFilterFeedback();
  }, [searchRepo, types, languages, sorts]);

  useEffect(() => {
    const repositories = userInfos?.repos || [];
    setReposFiltered(repositories);
  }, [userInfos?.user?.login]);

  const values = {
    userInfos, setUserInfos,
    reposFiltered, setReposFiltered,
    searchRepo, setSearchRepo,
    types, setTypes,
    sorts, setSorts,
    languages, setLanguages,
    filterFeedback, setFilterFeedback,
    handleClearFilter,
    handleSearchInput,
  };

  return (
    <GithubContext.Provider value={values}>{children}</GithubContext.Provider>
  );
};

export default GithubProvider;
