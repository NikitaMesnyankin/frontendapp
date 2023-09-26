import styled from 'styled-components';
import {Link} from "react-router-dom";


export const StyledButton = styled.button<{ passedColor?: string }>`
  width: auto;
  height: auto;
  margin-top: 2%;
  margin-bottom: 2%;
  border-radius: 25vh;
  //margin-left: 2.5%;
  //margin-right: 2.5%;
  background-color: #fff000;
  color: #000;
  //border-radius: 12px;
  //background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 1px solid black;
  //filter: drop-shadow(0 0 10px ${({passedColor}) => passedColor || "black"});

  &:hover {
    filter: drop-shadow(0 0 20px ${({passedColor}) => passedColor || "black"});
    text-underline: antiquewhite;
  }
  
  &:visited {
    text-underline: antiquewhite;
  }
  
`;

export const StyledNavbar = styled.header`
  //background: linear-gradient(to bottom left, #A602FF, #D2D6CE);
  border-bottom: bisque solid 0.25vh;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledAuthSection = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledSections = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const StyledLink = styled(Link)<{ passedColor?: string }>`
  width: 100%;
  color: black;
  font-family: Arial, serif;
  font-size: 80%;
  text-decoration: none;
`;