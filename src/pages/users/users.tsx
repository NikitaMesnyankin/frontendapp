import React, { useEffect } from 'react';
import { StyledMain, StyledUserContainer, StyledUsername, StyledUserInfo, StyledConditionalText } from './users.styles';
import { useAppDispatch, useAppSelector } from '../../store/store';
import * as i from "../../interfaces/interfaces"

//import { useNavigate } from 'react-router-dom';
import { getUsersAction } from "../../store/actions/users";

export const Users: React.FC = () => {
    const dispatch = useAppDispatch();

    //const navigate = useNavigate();

    const { users, getUsersStatus } = useAppSelector((store) => store.users);

    useEffect(() => {
        if (getUsersStatus === i.Enums.FetchStatus.INITIAL){
            dispatch(getUsersAction());
        }
    }, [dispatch, getUsersStatus])

    //const handleNavigateClick = useCallback(() => navigate(`/`), [navigate]);

    return (
        <StyledMain>
            {users?.map((user) => (
        <StyledUserContainer>
            <StyledUsername>{user.nickname} | (#{user.id})</StyledUsername>
            <StyledUserInfo>About: {(user.about ?? "").length > 15 ? `${user.about?.slice(0, 15)}...` : user.about} | Rating: <StyledConditionalText passedColor={user.rating! > 3.5 ? "green" : "red"}>{user.rating}</StyledConditionalText></StyledUserInfo>
        </StyledUserContainer>
))}</StyledMain>
);
};