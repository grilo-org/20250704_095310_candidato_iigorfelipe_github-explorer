import { useEffect } from 'react';
import { ReactNode, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilterFeedbackType, OptionType, SelectedOptionType, UserInfos } from '../../types/githubContext';
import { GitHubRepositoryType } from '../../types/api';
import { defaultValues, GithubContext } from './context';

type Props = {
  children: ReactNode;
};

const GithubProvider = ({ children }: Props) => {
  const [_searchParams, setSearchParams] = useSearchParams();
  const [userInfos, setUserInfos] = useState<UserInfos>(defaultValues.userInfos);
  const [reposFiltered, setReposFiltered] = useState<GitHubRepositoryType[]>(defaultValues.reposFiltered);
  const [searchRepo, setSearchRepo] = useState(defaultValues.searchRepo);
  const [types, setTypes] = useState<OptionType[]>(defaultValues.types);
  const [sorts, setSorts] = useState<OptionType[]>(defaultValues.sorts);
  const [languages, setLanguages] = useState<OptionType[]>(defaultValues.languages);
  const [filterFeedback, setFilterFeedback] = useState<FilterFeedbackType>(defaultValues.filterFeedback);
  const [selectedOption, setSelectedOption] = useState<SelectedOptionType>(defaultValues.selectedOption);

  const handleClearFilter = () => {

    const resetLanguages = languages.map((lang) => {
      return {
        check: lang.option === 'Todos os idiomas',
        option: lang.option,
        title: 'Linguagem'
      }
    });
  
    setSearchRepo('');
    setTypes(defaultValues.types);
    setSorts(defaultValues.sorts);
    setLanguages(resetLanguages);
    setReposFiltered(defaultValues.reposFiltered);
    setFilterFeedback(defaultValues.filterFeedback);

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

  const updateLanguageList = (repositories: GitHubRepositoryType[]) => {

    const userLanguages = repositories.map(({ language }) => {
      return {
        option: language,
        check: false,
        title: 'Linguagem'
      };
    });

    const uniqueLanguagesSet = new Set([...userLanguages.map((lang) => lang.option)]);

    const uniqueLanguages = [...uniqueLanguagesSet].map(option => ({
        option,
        check: false,
        title: 'Linguagem'
    }));

    setLanguages([...defaultValues.languages, ...uniqueLanguages]);
  };

  useEffect(() => {
    const repositories = userInfos?.repos || [];

    handleClearFilter();
    setReposFiltered(repositories);
    updateLanguageList(repositories);

  }, [userInfos?.user?.login]);

  const values = {
    userInfos, setUserInfos,
    reposFiltered, setReposFiltered,
    searchRepo, setSearchRepo,
    types, setTypes,
    sorts, setSorts,
    languages, setLanguages,
    filterFeedback, setFilterFeedback,
    selectedOption, setSelectedOption,
    handleClearFilter,
    handleSearchInput,
  };

  return (
    <GithubContext.Provider value={values}>{children}</GithubContext.Provider>
  );
};

export default GithubProvider;
