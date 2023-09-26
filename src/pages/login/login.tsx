import React, { useCallback, useState }  from "react";
import { useForm } from "react-hook-form";

import {StyledRegistrationForm, StyledTextLabel, StyledInputTextType, StyledButton, StyledErrorMessage, StyledLink, StyledRegisteredOption} from './login.styles';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { createUserAction } from "../../store/actions/users"

import * as i from "../../interfaces/interfaces";


export const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const { handleSubmit, register, formState, reset,  } = useForm<i.Interfaces.UserRegistrationData>({ mode: "onChange" });

    const onSubmit = useCallback(( data: i.Interfaces.UserRegistrationData ) => {
        reset();
        dispatch(createUserAction({...data}));
    }, [dispatch, reset]);

    return (
        <StyledRegistrationForm onSubmit={handleSubmit(onSubmit)}>
            <StyledTextLabel htmlFor="login">Sign in to Reviewfy</StyledTextLabel>
            <StyledInputTextType type="text" id="login" placeholder="Login"
                                 {...register('login', {
                                     required: true,
                                     minLength: {
                                         value: 10,
                                         message: "Login should contain at least 10 symbols"
                                     },
                                     pattern: {
                                         value: /([A-z]|\d)*/,
                                         message: "Login should contain only letters or numbers"
                                     },
                                     maxLength: {
                                         value: 30,
                                         message: "Login should contain no more than 30 symbols"
                                     }
                                 })}/>
            {formState.errors.login && <StyledErrorMessage>{formState.errors.login.message}</StyledErrorMessage>}
            <StyledInputTextType type="password" id="password" placeholder="Password"
                                 {...register('password', {
                                     required: true,
                                 })}></StyledInputTextType>
            <StyledButton>Log in</StyledButton>
            <StyledRegisteredOption>Don't have an account? <StyledLink className="nav-link" to="/register">Create one</StyledLink></StyledRegisteredOption>
        </StyledRegistrationForm>
    );
}
