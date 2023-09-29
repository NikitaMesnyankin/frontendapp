import axios from "axios";
import { BACKEND_URI } from "../configs/configs";

export const axiosInstance = axios.create({
    baseURL: BACKEND_URI,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    withCredentials: true
});