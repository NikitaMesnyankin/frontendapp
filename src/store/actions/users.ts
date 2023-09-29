import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers, createUser } from '../../api/users';
import * as i from "../../interfaces/interfaces";

export const getUsersAction = createAsyncThunk(
    "/getUsers",
    async () => await getUsers(),
);

export const createUserAction = createAsyncThunk(
    "/postUsers",
    async (data: i.Interfaces.UserRegistrationData) => await createUser(data),
);