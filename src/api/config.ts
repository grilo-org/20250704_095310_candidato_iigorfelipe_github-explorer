import axios from 'axios';

const URL = 'https://api.github.com/';

const api = axios.create({
  baseURL: URL,
});

export default api;