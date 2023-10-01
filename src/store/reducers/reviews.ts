import { ActionCreatorWithoutPayload, createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import * as i from '../../interfaces/interfaces';
import {createReviewAction, getReviewsAction, validateReviewAction} from '../actions/reviews';


interface ReviewsState {
    review: i.Interfaces.Review | null;
    validatedReview: i.Interfaces.Review | null;
    reviews: i.Interfaces.Review[];
    getReviewsStatus: i.Enums.FetchStatus;
    createReviewStatus: i.Enums.FetchStatus;
    validateReviewStatus: i.Enums.FetchStatus;
    error?: unknown;
}

const initialState: ReviewsState = {
    review: null,
    validatedReview: null,
    reviews: [] as i.Interfaces.Review[],
    getReviewsStatus: i.Enums.FetchStatus.INITIAL,
    createReviewStatus: i.Enums.FetchStatus.INITIAL,
    validateReviewStatus: i.Enums.FetchStatus.INITIAL,
    error: null,
};

const reviewsSlice = createSlice<ReviewsState, SliceCaseReducers<ReviewsState>>({
    name: 'reviews',
    initialState,
    reducers: {
        reset: () => initialState,
    },

    extraReducers: (builder) => {
        builder.addCase(getReviewsAction.pending, (state) => {
            state.getReviewsStatus = i.Enums.FetchStatus.FETCHING;
            state.error = null;
        });
        builder.addCase(getReviewsAction.fulfilled, (state, { payload }) => {
            state.reviews = payload;
            state.getReviewsStatus = i.Enums.FetchStatus.FETCHED;
            state.error = null;
        });
        builder.addCase(getReviewsAction.rejected, (state, action) => {
            state.getReviewsStatus = i.Enums.FetchStatus.ERROR;
            state.error = action.error;
        });
        builder.addCase(createReviewAction.pending, (state) => {
            state.createReviewStatus = i.Enums.FetchStatus.FETCHING;
        });
        builder.addCase(createReviewAction.fulfilled, (state, { payload }) => {
            state.createReviewStatus = i.Enums.FetchStatus.FETCHED;
            state.review = payload;
            state.error = null;
        });
        builder.addCase(createReviewAction.rejected, (state, action) => {
            state.createReviewStatus = i.Enums.FetchStatus.ERROR;
            state.error = action.payload;
        });
        builder.addCase(validateReviewAction.pending, (state) => {
            state.validateReviewStatus = i.Enums.FetchStatus.FETCHING;
        });
        builder.addCase(validateReviewAction.fulfilled, (state, { payload }) => {
            state.validateReviewStatus = i.Enums.FetchStatus.FETCHED;
            state.validatedReview = payload;
            state.error = null;
        });
        builder.addCase(validateReviewAction.rejected, (state, action) => {
            state.validateReviewStatus = i.Enums.FetchStatus.ERROR;
            state.error = action.payload;
        });
    },
});

export const resetReviewsState = reviewsSlice.actions.reset as ActionCreatorWithoutPayload<string>;
export const reviewsReducer = reviewsSlice.reducer;