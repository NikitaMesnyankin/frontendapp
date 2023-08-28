import { ActionCreatorWithoutPayload, createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import * as i from '../../interfaces/interfaces';
import { getUsersAction } from '../actions/users';


interface UsersState {
    users: i.Interfaces.User[];
    getUsersStatus: i.Enums.FetchStatus;
    error?: unknown;
}

const initialState: UsersState = {
    users: [] as i.Interfaces.User[],
    getUsersStatus: i.Enums.FetchStatus.INITIAL,
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
    },
});

export const resetUsersState = usersSlice.actions.reset as ActionCreatorWithoutPayload<string>;
export const usersReducer = usersSlice.reducer;