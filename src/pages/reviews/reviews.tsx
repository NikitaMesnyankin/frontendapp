import React, { useEffect, useCallback } from 'react';
import {
    StyledMain,
    StyledReviewsHeader,
    StyledReviewsTopText,
    StyledReviewFieldSpan,
    StyledReviewContainer,
} from './reviews.styles';
import { useAppDispatch, useAppSelector } from '../../store/store';
import * as i from "../../interfaces/interfaces"
import {getReviewsAction, validateReviewAction} from "../../store/actions/reviews";
import {useNavigate, Link} from "react-router-dom";
import {StyledButton, StyledTextLabel} from "../login/login.styles";

export const Reviews: React.FC = () => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const { reviews, getReviewsStatus } = useAppSelector((store) => store.reviews);
    const { isReviewer, isAdmin, getAuthStatus } = useAppSelector((store) => store.persistedAuthReducer);

    useEffect(() => {
        if (getReviewsStatus === i.Enums.FetchStatus.INITIAL){
            dispatch(getReviewsAction());
        }
    }, [dispatch, getReviewsStatus])

    const handleValidateClick = useCallback((id: number) => {
        dispatch(validateReviewAction(id));
        navigate(`/reviews`);
        window.location.reload();
    }, [navigate, dispatch]);

    const widthArray = [["ID", 3], ["FILM_ID", 3], ["AUTHOR_ID", 3], ["CONTENT", 7], ["SCORE", 3], ["KARMA", 3], ["CREATED", 6], ["MODIFIED", 6]];
    if (isReviewer || isAdmin) {
        widthArray.splice(1, 0, ["VALIDATED?", 4])
    }
    return (
        <StyledMain>
            <StyledReviewsHeader>
                <StyledReviewsTopText>Top reviews by creation date</StyledReviewsTopText>
                { getAuthStatus === i.Enums.FetchStatus.FETCHED ? ((!isReviewer || isAdmin) ?
                    <StyledButton onClick={() => navigate("/reviews/publish")}>Publish your review to be on top!</StyledButton> :
                    <StyledTextLabel>You have no access to publish reviews</StyledTextLabel>) :
                    <StyledTextLabel>Login to publish your review</StyledTextLabel>}
            </StyledReviewsHeader>
            <StyledReviewContainer>
                {widthArray.map((item) => (
                    <StyledReviewFieldSpan color={"black"} fontSize={"1.5vh"} width={item[1] as number}>{item[0] as string}</StyledReviewFieldSpan>
                ))}
            </StyledReviewContainer>

            {reviews?.map((review) => (
                <StyledReviewContainer>
                    <StyledReviewFieldSpan color={"black"} fontSize="1.25vh" width={3}>{review.id}</StyledReviewFieldSpan>
                    {(isReviewer || isAdmin) && <StyledReviewFieldSpan color={"black"} fontSize="1.5vh" width={4}>{review.isValidated ? "YES" : "NO"}{!review.isValidated && <Link to="" onClick={() => handleValidateClick(review.id!)}>(VALIDATE)</Link>}</StyledReviewFieldSpan>}
                    <StyledReviewFieldSpan color={"black"} fontSize="1.5vh" width={3}>{review.filmId}</StyledReviewFieldSpan>
                    <StyledReviewFieldSpan color={"black"} fontSize="1.5vh" width={3}>{review.authorId}</StyledReviewFieldSpan>
                    <StyledReviewFieldSpan color={"black"} fontSize="1.5vh" width={7}>{review.content?.substring(0, 10)}...</StyledReviewFieldSpan>
                    <StyledReviewFieldSpan color={i.Interfaces.ReviewColorsMapping[review.score.toString()]} fontSize="2vh" width={3}>{review.score}</StyledReviewFieldSpan>
                    <StyledReviewFieldSpan color={"black"} fontSize="1.5vh" width={3}>{review.karma}</StyledReviewFieldSpan>
                    <StyledReviewFieldSpan color={"black"} fontSize="1.5vh" width={6}>{review.createdAt!.split('T')[0]}</StyledReviewFieldSpan>
                    <StyledReviewFieldSpan color={"black"} fontSize="1.5vh" width={6}>{review.modifiedAt!.split('T')[0]}</StyledReviewFieldSpan>
                </StyledReviewContainer>
            ))}
        </StyledMain>)
};