import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledRegistrationForm = styled.form`
  width: 100%;
  height: 100vh;
  color: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledTextLabel = styled.label`
  font-family: "Trebuchet MS", system-ui;
  color: navy;
  font-size: x-large;
  margin-top: 1%;
  margin-bottom: 1%;
`

export const StyledInputTextType = styled.input`
  margin-top: 1%; 
  width: 25%;
  text-align: center;
  border:1px solid black;
  border-radius: 3px;
  background-image: linear-gradient(#FAFAFA, #F1F1F1);
`

export const StyledButton = styled.button<{ width?: number, height?: number, marginTop?: number, marginBottom?: number }>`
  margin-top: ${({marginTop}) => marginTop ? `${marginTop}%` : "1%"};
  margin-bottom: ${({marginBottom}) => marginBottom ? `${marginBottom}%` : "1%"};
  text-align: center;
  vertical-align: middle;
  font-size: 100%;
  width: ${({width}) => width ? `${width}%` : "auto"};
  height: ${({height}) => height ? `${height}%` : "auto"};
  font-family: "Trebuchet MS", system-ui;
`

export const StyledErrorMessage = styled.div`
    font-size: 14px;
    line-height: 22px;
    color: red;
    margin-bottom: 8px;
`;

export const StyledLink = styled(Link)`
  color: blueviolet;
  font-family: Arial, serif;
  text-decoration: none;
  
  &:hover {
    color: navy;
    text-decoration: goldenrod underline;
  }
`;

export const StyledRegisteredOption = styled.div`
    font-size: 80%;
`