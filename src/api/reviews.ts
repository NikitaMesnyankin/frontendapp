import { AxiosResponse } from 'axios';
import { axiosInstance } from './axios';
import * as i from '../interfaces/interfaces';

export const getReviews = async (): Promise<i.Interfaces.Review[]> => {
    const response : AxiosResponse<i.Interfaces.Review[]> = await axiosInstance.request({
        method: "POST",
        url: "/reviews/search",
        data: {
            page: 1,
            count: 200,
            order: {
                createdAt: "DESC"
            }
        }
    });
    return response.data;
}

export const createReview = async (reviewData: Partial<i.Interfaces.Review>): Promise<i.Interfaces.Review> => {
    const response: AxiosResponse<i.Interfaces.Review> = await axiosInstance.request({
        method: "POST",
        url: "/reviews",
        data: reviewData
    })
    return response.data;
}

export const validateReview = async (id: number): Promise<i.Interfaces.Review> => {
    const response: AxiosResponse<i.Interfaces.Review> = await axiosInstance.request({
        method: "PATCH",
        url: `/reviews/${id}`,
    });
    return response.data;
}