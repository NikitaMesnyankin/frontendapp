import * as i from "../../interfaces/interfaces";
import { ActionCreatorWithoutPayload, createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { getAuthAction, loginUserAction, logoutUserAction } from "../actions/auth";


export type AuthState = i.Interfaces.AsyncState & {
    user: Partial<i.Interfaces.User> | null;
    isAdmin: boolean;
    isReviewer: boolean;
    getAuthStatus: i.Enums.FetchStatus;
};

const initialState: AuthState = {
    user: null,
    isAdmin: false,
    isReviewer: false,
    getAuthStatus: i.Enums.FetchStatus.INITIAL,
    status: i.Enums.FetchStatus.INITIAL,
};


const authSlice = createSlice<AuthState, SliceCaseReducers<AuthState>>({
    name: 'auth',
    initialState,
    reducers: {
        reset: () => initialState,
    },

    extraReducers: (builder) => {
        builder.addCase(loginUserAction.pending, (state) => {
            state.status = i.Enums.FetchStatus.FETCHING;
        });
        builder.addCase(loginUserAction.fulfilled, (state, action) => {
            state.status = i.Enums.FetchStatus.FETCHED;
            state.error = null;
            state.isAdmin = action.payload.role === i.Enums.Roles.ADMIN;
            state.isReviewer = action.payload.role === i.Enums.Roles.REVIEWER;
            state.user = action.payload;
        });
        builder.addCase(loginUserAction.rejected, (state, action) => {
            state.status = i.Enums.FetchStatus.ERROR;
            state.error = action.payload;
        });

        builder.addCase(logoutUserAction.pending, (state) => {
            state.status = i.Enums.FetchStatus.FETCHING;
        });
        builder.addCase(logoutUserAction.fulfilled, (state) => {
            state.status = i.Enums.FetchStatus.FETCHED;
            state.user = null;
        });
        builder.addCase(logoutUserAction.rejected, (state, action) => {
            state.status = i.Enums.FetchStatus.ERROR;
            state.error = action.error;
        });

        builder.addCase(getAuthAction.pending, (state) => {
            state.getAuthStatus = i.Enums.FetchStatus.FETCHING;
        });
        builder.addCase(getAuthAction.fulfilled, (state, { payload }) => {
            state.getAuthStatus = i.Enums.FetchStatus.FETCHED;
            state.user = payload;
            state.isAdmin = payload.role === i.Enums.Roles.ADMIN;
            state.isReviewer = payload.role === i.Enums.Roles.REVIEWER;
        });
        builder.addCase(getAuthAction.rejected, (state, action) => {
            state.getAuthStatus = i.Enums.FetchStatus.ERROR;
            state.error = action.error;
        });
    },
});

export const resetAuthState = authSlice.actions.reset as ActionCreatorWithoutPayload<string>;
export const authReducer = authSlice.reducer;