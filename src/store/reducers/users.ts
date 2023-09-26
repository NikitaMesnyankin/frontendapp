import { ActionCreatorWithoutPayload, createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import * as i from '../../interfaces/interfaces';
import {createUserAction, getUsersAction} from '../actions/users';


interface UsersState {
    user: i.Interfaces.User | null;
    users: i.Interfaces.User[];
    getUsersStatus: i.Enums.FetchStatus;
    createUserStatus: i.Enums.FetchStatus;
    error?: unknown;
}

const initialState: UsersState = {
    user: null,
    users: [] as i.Interfaces.User[],
    getUsersStatus: i.Enums.FetchStatus.INITIAL,
    createUserStatus: i.Enums.FetchStatus.INITIAL,
    error: null,
};

const usersSlice = createSlice<UsersState, SliceCaseReducers<UsersState>>({
    name: 'users',
    initialState,
    reducers: {
        reset: () => initialState,
    },

    extraReducers: (builder) => {
        builder.addCase(getUsersAction.pending, (state) => {
            state.getUsersStatus = i.Enums.FetchStatus.FETCHING;
            state.error = null;
        });
        builder.addCase(getUsersAction.fulfilled, (state, { payload }) => {
            state.users = payload;
            state.getUsersStatus = i.Enums.FetchStatus.FETCHED;
            state.error = null;
        });
        builder.addCase(getUsersAction.rejected, (state, action) => {
            state.getUsersStatus = i.Enums.FetchStatus.ERROR;
            state.error = action.error;
        });
        builder.addCase(createUserAction.pending, (state) => {
            state.createUserStatus = i.Enums.FetchStatus.FETCHING;
        });
        builder.addCase(createUserAction.fulfilled, (state, { payload }) => {
            state.createUserStatus = i.Enums.FetchStatus.FETCHED;
            state.user = payload;
            state.error = null;
        });
        builder.addCase(createUserAction.rejected, (state, action) => {
            state.createUserStatus = i.Enums.FetchStatus.ERROR;
            state.error = action.payload;
        });
    },
});

export const resetUsersState = usersSlice.actions.reset as ActionCreatorWithoutPayload<string>;
export const usersReducer = usersSlice.reducer;