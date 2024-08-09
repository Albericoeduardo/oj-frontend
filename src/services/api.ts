import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const getRecommendations = async () => {
  const response = await api.get('/recommendations');
  return response.data;
};

export const createRecommendation = async (recommendation: any) => {
  const response = await api.post('/recommendations', recommendation);
  return response.data;
};
