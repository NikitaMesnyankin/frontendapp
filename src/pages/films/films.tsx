import React, { useEffect } from 'react';
import {
    StyledMain,
    StyledText,
    StyledUsersHeader,
    StyledUsersTopText,
    StyledUserDescriptionSpan,
    StyledUserFieldSpan,
    StyledUserContainer
} from '../users/users.styles';
import { useAppDispatch, useAppSelector } from '../../store/store';
import * as i from "../../interfaces/interfaces"
import { getFilmsAction } from "../../store/actions/films";

export const Films: React.FC = () => {
    const dispatch = useAppDispatch();
    const { films, getFilmsStatus } = useAppSelector((store) => store.films);

    useEffect(() => {
        if (getFilmsStatus === i.Enums.FetchStatus.INITIAL){
            dispatch(getFilmsAction());
        }
    }, [dispatch, getFilmsStatus])

    return (
        <StyledMain>
            <StyledUsersHeader>
                <StyledUsersTopText>Top films by their average rating</StyledUsersTopText>
                <StyledUserDescriptionSpan>
                    <StyledText passedColor={"green"}>This is top films sorted by their average rating<br/>Watch more, review more, be in top!</StyledText>
                </StyledUserDescriptionSpan>
            </StyledUsersHeader>
            <StyledUserContainer>
                {[["ID", 3], ["NAME", 5], ["COUNTRY", 3], ["AVGRATING", 3], ["DESCRIPTION", 7]].map((item) => (
                    <StyledUserFieldSpan color={"gold"} fontSize={"2vh"} width={item[1] as number}>{item[0] as string}</StyledUserFieldSpan>
                ))}
            </StyledUserContainer>

            {films?.map((film) => (
                <StyledUserContainer>
                    <StyledUserFieldSpan color={"black"} fontSize="2vh" width={3}>{film.id}</StyledUserFieldSpan>
                    <StyledUserFieldSpan color={"black"} fontSize="2vh" width={5}>{film.name}</StyledUserFieldSpan>
                    <StyledUserFieldSpan color={"black"} fontSize="2vh" width={3}>{film.country}</StyledUserFieldSpan>
                    <StyledUserFieldSpan color={film.averageRating! > 3.5 ? "green" : "red"} fontSize="2vh" width={3}>{film.averageRating}</StyledUserFieldSpan>
                    <StyledUserFieldSpan color={"black"} fontSize="1.5vh" width={7}>{film.description?.substring(0, 10)}...</StyledUserFieldSpan>
                </StyledUserContainer>
            ))}
        </StyledMain>)
};