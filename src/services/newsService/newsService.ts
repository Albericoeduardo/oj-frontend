import { api } from '../api';

export const getNews = async () => {
    const response = await api.get('/news');
    return response.data;
};

export const createNews = async (news: any) => {
    const response = await api.post('/news', news, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    console.log(response.config.data);
    return response.config.data;
};
