import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.wheretheiss.at/v1/satellitess',
});

export default api;