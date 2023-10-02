import React, { useEffect } from 'react';
import {
    StyledMain,
    StyledText,
    StyledUsersHeader,
    StyledUsersTopText,
    StyledUserDescriptionSpan,
    StyledUserFieldSpan,
    StyledUserContainer
} from './users.styles';
import { useAppDispatch, useAppSelector } from '../../store/store';
import * as i from "../../interfaces/interfaces"
import { getUsersAction } from "../../store/actions/users";

export const Users: React.FC = () => {
    const dispatch = useAppDispatch();
    const { users, getUsersStatus } = useAppSelector((store) => store.users);

    useEffect(() => {
        if (getUsersStatus === i.Enums.FetchStatus.INITIAL){
            dispatch(getUsersAction());
        }
    }, [dispatch, getUsersStatus])

    return (
        <StyledMain>
        <StyledUsersHeader>
            <StyledUsersTopText>Top users by their review count</StyledUsersTopText>
            <StyledUserDescriptionSpan>
                <StyledText passedColor={"green"}>This is top users sorted by their reviews count<br/>Watch more, review more, be in top!</StyledText>
            </StyledUserDescriptionSpan>
        </StyledUsersHeader>
            <StyledUserContainer>
                {[["RANK", 10], ["NAME", 40], ["RATING", 10], ["REVIEWS", 24]].map((item) => (
                    <StyledUserFieldSpan color={"gold"} fontSize={"2vh"} width={item[1] as number}>{item[0] as string}</StyledUserFieldSpan>
                ))}
            </StyledUserContainer>
            {[...users]?.sort((left, right) => {
                return (right.reviews?.length ?? 0) - (left.reviews?.length ?? 0);
            })?.map((user, index) => (
                <StyledUserContainer>
                    <StyledUserFieldSpan color={"black"} fontSize="2vh" width={10}>{index + 1}</StyledUserFieldSpan>
                    <StyledUserFieldSpan color={"black"} fontSize="2vh" width={40}>{user.nickname} (#{user.id})</StyledUserFieldSpan>
                    <StyledUserFieldSpan color={user.rating! > 3.5 ? "green" : "red"} fontSize="2vh" width={10}>{user.rating}</StyledUserFieldSpan>
                    <StyledUserFieldSpan color={"black"} fontSize="2vh" width={24}>{user.reviews!.length}</StyledUserFieldSpan>
                </StyledUserContainer>
            ))}
        </StyledMain>)
};