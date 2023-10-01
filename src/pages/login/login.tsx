import React, { useCallback }  from "react";
import { useForm } from "react-hook-form";

import {StyledRegistrationForm, StyledTextLabel, StyledInputTextType, StyledButton, StyledErrorMessage, StyledLink, StyledRegisteredOption} from './login.styles';
import { useAppDispatch } from '../../store/store';
import {getAuthAction, loginUserAction} from "../../store/actions/auth"
import * as i from "../../interfaces/interfaces";
import {useNavigate} from "react-router-dom";


export const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { handleSubmit, register, formState, reset,  } = useForm<i.Interfaces.UserLoginData>({ mode: "onChange" });

    const onSubmit = useCallback((data: i.Interfaces.UserLoginData) => {
        reset();
        dispatch(loginUserAction({...data})).then(() => dispatch(getAuthAction())).then(() => {
            navigate("/");
        })
    }, [dispatch, reset, navigate]);

    return (
        <StyledRegistrationForm onSubmit={handleSubmit(onSubmit)}>
            <StyledTextLabel htmlFor="email">Sign in to Reviewfy</StyledTextLabel>
            <StyledInputTextType type="text" id="email" placeholder="Email"
                                 {...register('email', {
                                     required: true,
                                     pattern: { value: /(^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$)/, message: "Enter valid e-mail" }
                                 })}/>
            {formState.errors.email && <StyledErrorMessage>{formState.errors.email.message}</StyledErrorMessage>}
            <StyledInputTextType type="password" id="password" placeholder="Password"
                                 {...register('password', {
                                     required: true,
                                 })}></StyledInputTextType>
            <StyledButton>Log in</StyledButton>
            <StyledRegisteredOption>Don't have an account? <StyledLink className="nav-link" to="/register">Create one</StyledLink></StyledRegisteredOption>
        </StyledRegistrationForm>
    );
}
