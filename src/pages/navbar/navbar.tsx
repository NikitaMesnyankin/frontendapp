import React, { useCallback } from "react";
import {StyledAuthSection, StyledSections, StyledButton, StyledLink, StyledNavbar} from './navbar.styles';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/store';
import * as i from "../../interfaces/interfaces"
import { logoutUserAction } from "../../store/actions/auth"

export const Navbar: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { user, status,  } = useAppSelector((store) => store.auth);
    const handleLogoutClick = useCallback(() => {
        dispatch(logoutUserAction()).then(() => {
            window.location.reload()
            navigate(`/`)
        });
    }, [dispatch, navigate]);
    return (
        <StyledNavbar>
            <StyledSections>
                <StyledButton passedColor="#35E872"><StyledLink className="nav-link" to="/movies">Movies</StyledLink></StyledButton>
                <StyledButton passedColor="#E8D635"><StyledLink className="nav-link" to="/reviews">Reviews</StyledLink></StyledButton>
                <StyledButton passedColor="#E84035"><StyledLink
                    className="nav-link active" to="/users">Top users</StyledLink></StyledButton>
            </StyledSections>
            <StyledAuthSection>
                {user === null && <StyledButton passedColor="#E835B6"><StyledLink className="nav-link" to="/login">Sign in</StyledLink></StyledButton>}
                {user === null && <StyledButton passedColor="#E835B6"><StyledLink className="nav-link" to="/register">Sign up</StyledLink></StyledButton>}
                {user !== null && <StyledButton passedColor="#E835B6" className="nav-link" onClick={handleLogoutClick}>Logout</StyledButton>}
            </StyledAuthSection>
        </StyledNavbar>
);
}