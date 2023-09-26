import { AxiosResponse } from 'axios';
import { axiosInstance } from './axios';
import * as i from '../interfaces/interfaces';

export const loginUser = async (userData: { email: string, login: string }): Promise<Partial<i.Interfaces.User>> => {
    const response: AxiosResponse<Partial<i.Interfaces.User>> = await axiosInstance.request({
        method: "POST",
        url: "/auth/login",
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        data: userData
    });
    return response.data;
}

export const logoutUser = async (): Promise<AxiosResponse> => {
    return await axiosInstance.request({
        method: "POST",
        url: "/auth/logout",
    })
}