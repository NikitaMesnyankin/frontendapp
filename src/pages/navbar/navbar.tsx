import React from "react";
import {StyledAuthSection, StyledSections, StyledButton, StyledLink, StyledNavbar} from './navbar.styles';


export const Navbar: React.FC = () => {
    return (
        <StyledNavbar>
            <StyledSections>
                <StyledButton passedColor="#35E872"><StyledLink className="nav-link" to="/movies">Movies</StyledLink></StyledButton>
                <StyledButton passedColor="#E8D635"><StyledLink className="nav-link" to="/review">Reviews</StyledLink></StyledButton>
                <StyledButton passedColor="#E84035"><StyledLink
                    className="nav-link active" to="/users">Top users</StyledLink></StyledButton>
            </StyledSections>
            <StyledAuthSection>
                <StyledButton passedColor="#E835B6"><StyledLink className="nav-link" to="/login">Sign in</StyledLink></StyledButton>
                <StyledButton passedColor="#E835B6"><StyledLink className="nav-link" to="/register">Sign up</StyledLink></StyledButton>
            </StyledAuthSection>
        </StyledNavbar>
);
}