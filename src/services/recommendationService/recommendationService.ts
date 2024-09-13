import { api } from "../api";

export const getRecommendations = async () => {
    const response = await api.get("/recommendations");
    return response.data;
};

export const createRecommendation = async (recommendation: any) => {
    const response = await api.post("/recommendations", recommendation, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log(response.config.data);
    return response.config.data;
};