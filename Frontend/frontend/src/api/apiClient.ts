import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://localhost:5001/api", // поменяй на свой URL бекенда
    withCredentials: true,
});
