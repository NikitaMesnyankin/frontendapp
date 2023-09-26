import React, { useCallback, useState }  from "react";
import { useForm } from "react-hook-form";

import {StyledRegistrationForm, StyledTextLabel, StyledInputTextType, StyledButton, StyledErrorMessage, StyledLink, StyledRegisteredOption} from './registration.styles';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { createUserAction } from "../../store/actions/users"

import * as i from "../../interfaces/interfaces";
import * as h from "../../helpers/helpers"


export const Registration: React.FC = () => {
    const dispatch = useAppDispatch();
    const { handleSubmit, register, formState, getValues, reset, setValue } = useForm<i.Interfaces.UserRegistrationData>({ mode: "onChange" });
    console.log(getValues());

    const onSubmit = useCallback(( data: i.Interfaces.UserRegistrationData ) => {
        reset();
        dispatch(createUserAction({...data}));
    }, [dispatch, reset]);

    return (
        <StyledRegistrationForm onSubmit={handleSubmit(onSubmit)}>
            <StyledTextLabel htmlFor="login">Create your login</StyledTextLabel>
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
            <StyledTextLabel htmlFor="password">Create your password</StyledTextLabel>
            <StyledButton  marginTop={0} marginBottom={1} onClick={
                () => {
                    setValue("password", h.generateRandomPassword(12));
                }
            }>Tap to generate new password</StyledButton>
            <StyledInputTextType type="text" id="password" placeholder="Use button above or enter your password!"
                                 {...register('password', {
                                     required: true,
                                     minLength: {
                                         value: 10,
                                         message: "Password should have minimum length of 10 symbols"
                                     },
                                     validate: {
                                         hasUpperChars: (value) => { return /(?=.*?[A-Z])./.test(value) || "Password should contain at least one uppercase english letter" },
                                         hasLowerChars: (value) => { return /(?=.*?[a-z])./.test(value) || "Password should contain at least one lowercase english letter" },
                                         hasDigits: (value) => { return /(?=.*?[0-9])./.test(value) || "Password should contain at least one digit" },
                                         hasSpecialChars: (value) => { return /(?=.*?[!@#$%^&*()+_\-=}{[\]|:;"/?.><,`~])./.test(value) || "Password should contain at least one special symbol" },
                                     },
                                 })}></StyledInputTextType>
            {formState.errors.password && <StyledErrorMessage>{formState.errors.password.message}</StyledErrorMessage>}
            <StyledTextLabel htmlFor="email">Enter your email</StyledTextLabel>
            <StyledInputTextType type="text" id="email"
                                 placeholder="johndoe@gmail.com"
                                 {...register('email' , {
                                     required: true,

                                     pattern: { value: /(^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$)/, message: "Enter valid e-mail" } })}/>
            {formState.errors.email && <StyledErrorMessage>{formState.errors.email.message}</StyledErrorMessage>}
            <StyledButton>Register!</StyledButton>
            <StyledRegisteredOption>Already have an account? <StyledLink className="nav-link" to="/login">Log in</StyledLink></StyledRegisteredOption>
        </StyledRegistrationForm>
    );
}
