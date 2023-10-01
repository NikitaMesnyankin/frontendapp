import { createAsyncThunk } from '@reduxjs/toolkit';
import {getReviews, createReview, validateReview} from '../../api/reviews';
import * as i from "../../interfaces/interfaces";

export const getReviewsAction = createAsyncThunk(
    "/getReviews",
    async () => await getReviews(),
);

export const createReviewAction = createAsyncThunk(
    "/postReviews",
    async (data: Partial<i.Interfaces.Review>) => await createReview(data),
);

export const validateReviewAction = createAsyncThunk(
    "/validateReview",
    async (id: number) => await validateReview(id),
)