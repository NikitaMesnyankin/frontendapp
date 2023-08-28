import { AxiosResponse } from 'axios';
import { axiosInstance } from './axios';
import * as i from '../interfaces/interfaces';

export const getUsers = async (): Promise<i.Interfaces.User[]> => {
    const response : AxiosResponse<i.Interfaces.User[]> = await axiosInstance.request({
        method: "GET",
        url: "/users",
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        params: {
            page: 1,
            count: 50
        }
    });
    return response.data;
}