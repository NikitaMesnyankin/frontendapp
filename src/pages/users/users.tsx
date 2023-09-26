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
        <StyledUsersHeader>
            <StyledUsersTopText>Top 200 users by rating</StyledUsersTopText>
            <StyledUserDescriptionSpan>
                <StyledText passedColor={"green"}>This is top 200 users sorted by their karma rating<br/>Watch more, review more, be in top!</StyledText>
            </StyledUserDescriptionSpan>
        </StyledUsersHeader>
            {/*<StyledUserTableContainer>*/}
            {/*    <colgroup>*/}
            {/*        {[[5, "black"], [35, "yellow"], [5, "blue"], [15, "white"]].map((pair) => (*/}
            {/*            <StyledColumnWidth width={pair[0] as number} color={pair[1] as string}></StyledColumnWidth>*/}
            {/*        ))}*/}
            {/*        /!*{[[10, "black"], [70, "yellow"], [10, "blue"], [10, "white"]].map((item) => {*!/*/}
            {/*        /!*    <StyledColumnWidth width={item[0]} color={item[1]}></StyledColumnWidth>*!/*/}
            {/*        /!*})}*!/*/}
            {/*    </colgroup>*/}
            {/*    <StyledTableHeader>*/}
            {/*        <StyledTableRow>*/}
            {/*            {["RANK", "NAME", "RATING", "REVIEWS COUNT"].map((item) => (*/}
            {/*                <StyledTableCell><StyledText passedColor={"gold"}>{item}</StyledText></StyledTableCell>*/}
            {/*            ))}*/}
            {/*        </StyledTableRow>*/}
            {/*    </StyledTableHeader>*/}
            {/*    {users?.map((user, index) => (*/}
            {/*        <StyledTableRow>*/}
            {/*            <StyledTableCell>{index + 1}</StyledTableCell>*/}
            {/*            <StyledTableCell>{user.nickname} (#{user.id})</StyledTableCell>*/}
            {/*            <StyledTableCell><StyledText passedColor={user.rating! > 3.5 ? "green" : "red"}>{user.rating}</StyledText></StyledTableCell>*/}
            {/*            <StyledTableCell>REVIEWS COUNT</StyledTableCell>*/}
            {/*        </StyledTableRow>*/}

            {/*    ))}*/}
            {/*</StyledUserTableContainer>*/}
            <StyledUserContainer>
                {[["RANK", 10], ["NAME", 40], ["RATING", 10], ["REVIEWS", 24]].map((item) => (
                    <StyledUserFieldSpan color={"gold"} fontSize={"2vh"} width={item[1] as number}>{item[0] as string}</StyledUserFieldSpan>
                ))}
            </StyledUserContainer>

            {users?.map((user, index) => (
                <StyledUserContainer>
                    <StyledUserFieldSpan color={"black"} fontSize="2vh" width={10}>{index + 1}</StyledUserFieldSpan>
                    <StyledUserFieldSpan color={"black"} fontSize="2vh" width={40}>{user.nickname} (#{user.id})</StyledUserFieldSpan>
                    <StyledUserFieldSpan color={user.rating! > 3.5 ? "green" : "red"} fontSize="2vh" width={10}>{user.rating}</StyledUserFieldSpan>
                    <StyledUserFieldSpan color={"black"} fontSize="2vh" width={24}>100500</StyledUserFieldSpan>
                    {/*<StyledUsername></StyledUsername>*/}
                    {/*<StyledUserInfo>About: {(user.about ?? "").length > 15 ? `${user.about?.slice(0, 15)}...` : user.about} | Rating:*/}
                    {/*    <StyledText passedColor={user.rating! > 3.5 ? "green" : "red"}>{user.rating}</StyledText>*/}
                    {/*</StyledUserInfo>*/}
                </StyledUserContainer>
            ))}
        </StyledMain>)
};