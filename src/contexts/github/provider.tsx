import { useEffect } from 'react';
import { ReactNode, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filters, OptionType, Sorts, Types, UserInfos } from '../../types/githubContext';
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
  const [filters, setFilters] = useState<Filters>(defaultValues.filters);

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
    setReposFiltered(userInfos.repos);
    setFilters(defaultValues.filters);

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

    setFilters({
      ...filters,
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
  };

  const applyFilters = () => {
    const { type, language, sort, repo } = filters;
  
    let filteredRepos = [...userInfos.repos];

    if (repo !== '') {
      filteredRepos = filteredRepos.filter((item) => item.name.includes(repo));
    } else {
      filteredRepos = filteredRepos;
    };

    if (type[1] !== '') {
      const key = type[2];
  
      filteredRepos = filteredRepos.filter((repo) => {
        if (key === 'fork' || key === 'archived' || key === 'is_template') {
          return repo[key];
        };
      });
    };

    if (language[1] !== '') {
      const key = language[2];
      const value = language[1];
  
      filteredRepos = filteredRepos.filter((repo) => {
        if (repo[key]) {
          return value.toLowerCase() === repo[key].toLowerCase();
        };
      });
    };

    const key = sort[2];
    filteredRepos.sort((a, b) => {
      if (key === 'name') {
        return a[key].localeCompare(b[key]);
      } else if (key === 'stargazers_count') {
        return (b[key] - a[key]);
      } else if (key === 'updated_at') {
        return new Date(b[key]).getTime() - new Date(a[key]).getTime();
      };
    });

    setReposFiltered(filteredRepos);
  };

  const updateFilters = () => {
    const filter = {...filters};

    const selectedType = types.find((type) => type.check && type.option !== 'Todos');
    const selectedLanguage = languages.find((language) => language.check && language.option !== 'Todos os idiomas');
    const selectedSort = sorts.find((sort) => sort.check);
    
    const valueInRepo = searchRepo.trim().length > 0;
    const valueInType = selectedType !== undefined;
    const valueInLanguage = selectedLanguage !== undefined;

    if (selectedType) {
      const value = selectedType.option as Types;
      filter.type[1] = value.toLowerCase();

      switch (value) {
        case 'Arquivados':
          filter.type[2] = 'archived';
        break;
    
        case 'Forks':
          filter.type[2] = 'fork';
        break;

        case 'Modelos':
          filter.type[2] = 'is_template';
        break;

        default:
          filter.type[2] = 'all';
      };
    } else filter.type[1] = '';

    if (selectedLanguage) {
      filter.language[1] = selectedLanguage.option.toLowerCase();
    } else filter.language[1] = '';

    if (selectedSort) {
      const value = selectedSort.option as Sorts;

      filter.sort[1] = value.toLocaleLowerCase();

      switch (value) {
        case 'Nome':
          filter.sort[2] = 'name';
        break;
    
        case 'Estrelas':
          filter.sort[2] = 'stargazers_count';
        break;

        default:
          filter.sort[2] = 'updated_at';
      };
    } else filter.sort[1] = '';

    setSearchParams((prevState) => {
      const newState = new URLSearchParams(prevState);

      if (valueInType) {
        newState.set(filter.type[0], filter.type[1]);
      } else {
        newState.delete(filter.type[0]);
      };

      if (valueInLanguage) {
        newState.set(filter.language[0], filter.language[1]);
      } else {
        newState.delete(filter.language[0]);
      };

      if (filter.show) {
        newState.set(filter.sort[0], filter.sort[1]);
      } else {
        newState.delete(filter.sort[0]);
      };

      return newState;
    });

    filter.show = valueInRepo || valueInType || valueInLanguage;

    setFilters(filter);
  };

  const updateLanguageList = (repos: GitHubRepositoryType[]) => {

    const userLanguages = repos.filter((repo) => repo.language !== null).map(({ language }) => (
      {
        option: language,
        check: false,
        title: 'Linguagem'
      }
    ));

    const uniqueLanguagesSet = new Set([...userLanguages.map((lang) => lang.option)]);

    const uniqueLanguages = [...uniqueLanguagesSet].map(option => ({
      option,
      check: false,
      title: 'Linguagem'
    }));

    setLanguages([...defaultValues.languages, ...uniqueLanguages]);
  };

  useEffect(() => {
    applyFilters();
  }, [filters.type[1], filters.language[1], filters.sort[1], filters.repo]);

  useEffect(() => {
    updateFilters();
  }, [searchRepo, types, languages, sorts]);

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
    filters, setFilters,
    handleClearFilter,
    handleSearchInput,
  };

  return (
    <GithubContext.Provider value={values}>{children}</GithubContext.Provider>
  );
};

export default GithubProvider;
