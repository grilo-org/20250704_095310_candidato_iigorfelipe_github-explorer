import { AxiosResponse } from 'axios';
import { GitHubRepositoryType, GitHubUserType } from '../types/api';
import api from './config';

type GitHubAPIClassType = {

  getUser: (username: string) => Promise<AxiosResponse<GitHubUserType>>;

  getRepositorys: (username: string) => Promise<AxiosResponse<GitHubRepositoryType[]>>;

  getStars: (username: string) => Promise<AxiosResponse<GitHubRepositoryType[]>>;
};


class GitHubAPIClass implements GitHubAPIClassType {

  getUser = async (username: string): Promise<AxiosResponse<GitHubUserType>> => {
    try {
      const response = await api.get<GitHubUserType>(`/users/${username}`);

      return response;

    } catch (error) {
      throw error;
    };
  };

  getRepositorys = async (username: string): Promise<AxiosResponse<GitHubRepositoryType[]>> => {
    try {
      const response = await api.get<GitHubRepositoryType[]>(`users/${username}/repos`);

      return response;

    } catch (error) {
      throw error;
    };
  };

  getStars = async (username: string): Promise<AxiosResponse<GitHubRepositoryType[]>> => {
    try {
      const response = await api.get<GitHubRepositoryType[]>(`/users/${username}/starred`);

      return response;

    } catch (error) {
      throw error;
    };
  };
};


const GitHubAPI = new GitHubAPIClass();

export default GitHubAPI;
