import { AxiosResponse } from 'axios';
import { axiosInstance } from './axios';
import * as i from '../interfaces/interfaces';

export const getUsers = async (): Promise<i.Interfaces.User[]> => {
    const response : AxiosResponse<i.Interfaces.User[]> = await axiosInstance.request({
        method: "POST",
        url: "/users/search",
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        data: {
            page: 1,
            count: 200,
            order: {
                rating: "DESC"
            }
        }
    });
    return response.data;
}

export const createUser = async (userData: { login: string, password: string, email: string }): Promise<i.Interfaces.User> => {
    const response: AxiosResponse<i.Interfaces.User> = await axiosInstance.request({
        method: "POST",
        url: "/users/register",
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        data: userData
    })
    return response.data;
}