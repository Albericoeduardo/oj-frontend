import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080',
});

//get recommendations
export const getRecommendations = async () => {
  const response = await api.get('/recommendations');
  return response.data;
};

export const createRecommendation = async (recommendation: any) => {
  const response = await api.post('/recommendations', recommendation);
  return response.data;
};

//get projects
export const getProjects = async () => {
  const response = await api.get('/projects');
  return response.data;
};

export const createProject = async (project: any) => {
  const response = await api.post('/projects', project);
  return response.data;
};

//get team
export const getTeam = async () => {
  const response = await api.get('/team');
  return response.data;
};

export const createPerson = async (person: any) => {
  const response = await api.post('/team', person);
  return response.data;
};