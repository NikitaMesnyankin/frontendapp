import { ActionCreatorWithoutPayload, createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import * as i from '../../interfaces/interfaces';
import {getFilmsAction} from '../actions/films';


interface FilmsState {
    films: i.Interfaces.Film[];
    getFilmsStatus: i.Enums.FetchStatus;
    error?: unknown;
}

const initialState: FilmsState = {
    films: [] as i.Interfaces.Film[],
    getFilmsStatus: i.Enums.FetchStatus.INITIAL,
    error: null,
};

const filmsSlice = createSlice<FilmsState, SliceCaseReducers<FilmsState>>({
    name: 'films',
    initialState,
    reducers: {
        reset: () => initialState,
    },

    extraReducers: (builder) => {
        builder.addCase(getFilmsAction.pending, (state) => {
            state.getFilmsStatus = i.Enums.FetchStatus.FETCHING;
            state.error = null;
        });
        builder.addCase(getFilmsAction.fulfilled, (state, { payload }) => {
            state.films = payload;
            state.getFilmsStatus = i.Enums.FetchStatus.FETCHED;
            state.error = null;
        });
        builder.addCase(getFilmsAction.rejected, (state, action) => {
            state.getFilmsStatus = i.Enums.FetchStatus.ERROR;
            state.error = action.error;
        });
    },
});

export const resetFilmsState = filmsSlice.actions.reset as ActionCreatorWithoutPayload<string>;
export const filmsReducer = filmsSlice.reducer;