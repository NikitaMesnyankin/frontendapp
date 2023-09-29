import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, logoutUser, getAuth } from '../../api/auth';
import * as i from "../../interfaces/interfaces";

export const loginUserAction = createAsyncThunk(
    "/loginUser",
    async (data: i.Interfaces.UserLoginData) => await loginUser(data),
);

export const logoutUserAction = createAsyncThunk(
    "/logoutUser",
    async () => await logoutUser(),
);

export const getAuthAction = createAsyncThunk(
    "/getAuth",
    async () => await getAuth(),
)