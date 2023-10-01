import { AxiosResponse } from 'axios';
import { axiosInstance } from './axios';
import * as i from '../interfaces/interfaces';

export const getFilms = async (): Promise<i.Interfaces.Film[]> => {
    const response : AxiosResponse<i.Interfaces.Film[]> = await axiosInstance.request({
        method: "POST",
        url: "/films/search",
        data: {
            page: 1,
            count: 200,
            order: {
                averageRating: "DESC"
            }
        }
    });
    return response.data;
}