import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../../api/users';

export const getUsersAction = createAsyncThunk(
    "/getUsers",
    async () => await getUsers(),
);