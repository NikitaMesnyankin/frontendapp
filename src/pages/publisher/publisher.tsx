import React, { useCallback, useEffect }  from "react";
import { useForm } from "react-hook-form";

import {StyledRegistrationForm, StyledTextLabel, StyledInputTextType, StyledButton, StyledErrorMessage, StyledSelector} from '../login/login.styles';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { createReviewAction } from "../../store/actions/reviews"
import { getFilmsAction } from "../../store/actions/films"
import * as i from "../../interfaces/interfaces";
import {useNavigate} from "react-router-dom";
import {StyledTextArea} from "./publisher.styles";


export const Publisher: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { handleSubmit, register, formState, reset,  } = useForm<i.Interfaces.Review>({ mode: "onChange" });
    const { user } = useAppSelector((store) => store.persistedAuthReducer);
    const { films, getFilmsStatus, error } = useAppSelector((store) => store.films);

    useEffect(() => {
        dispatch(getFilmsAction());
    }, [dispatch]);

    const onSubmit = useCallback((data: i.Interfaces.Review) => {
        reset();
        dispatch(createReviewAction({...data, authorId: Number(user!.id) })).then(() => {
            navigate("/reviews");
            window.location.reload();
        })
    }, [dispatch, reset, navigate]);


    return (
        <StyledRegistrationForm onSubmit={handleSubmit(onSubmit)}>
            <StyledTextLabel>Publish your review</StyledTextLabel>
            <StyledSelector id="film" {...register("filmId", { valueAsNumber: true }) }>
                <option value="" disabled selected hidden>Choose film from list...</option>
                { ((getFilmsStatus === i.Enums.FetchStatus.FETCHED && !error) ? films : []).map((film) => <option value={film.id}>{film.name}</option>) }
            </StyledSelector>
            <StyledTextLabel htmlFor="score" fontSize="medium">Rate this film from 1 (left, very bad) to 5 (right, very good)</StyledTextLabel>
            <StyledInputTextType id="score" type="range" min="1" max="5" defaultValue="3"
                {...register("score", { valueAsNumber: true }) }/>
            <StyledTextLabel htmlFor="content" fontSize="medium">Your commentary</StyledTextLabel>
            <StyledTextArea id="content" placeholder="Enter your text here..." rows={6} cols={50}
            {...register('content', {
                required: true,
                minLength: {
                    value: 100,
                    message: "Commentary should contain at least 100 symbols"
                },
                maxLength: {
                    value: 200,
                    message: "Login should contain no more than 200 symbols"
                }
            })}/>
            {formState.errors.content && <StyledErrorMessage>{formState.errors.content.message}</StyledErrorMessage>}
            <StyledButton>Send review on validation</StyledButton>
        </StyledRegistrationForm>
    );
}
