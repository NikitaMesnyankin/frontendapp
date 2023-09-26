import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers, createUser } from '../../api/users';
import {Interfaces} from "../../interfaces/interfaces";
import UserRegistrationData = Interfaces.UserRegistrationData;

export const getUsersAction = createAsyncThunk(
    "/getUsers",
    async () => await getUsers(),
);

export const createUserAction = createAsyncThunk(
    "/postUsers",
    async (data: UserRegistrationData) => await createUser(data),
);