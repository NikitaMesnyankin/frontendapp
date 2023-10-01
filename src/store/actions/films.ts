import { createAsyncThunk } from '@reduxjs/toolkit';
import {getFilms} from '../../api/films';

export const getFilmsAction = createAsyncThunk(
    "/getFilms",
    async () => await getFilms(),
);