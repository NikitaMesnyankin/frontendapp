import styled from 'styled-components';

export const StyledMain = styled.div`
    background: bisque;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
`;

export const StyledUserContainer = styled.div`
    background: #e5f1dd;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 32px;
    border-radius: 10px;
    border: 1.5px solid #5f9ea0;
    margin: 10px 10px 10px 10px;
`;

export const StyledUsername = styled.div`
    margin: 10px 10px 10px 10px;
    border-radius: 10px;
    font-size: 32px;
    font-family: Arial, serif;
`;

export const StyledUserInfo = styled.div`
    font-family: "Lucida Sans", serif;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
      //width:100px; /* some width */
`;

export const StyledConditionalText = styled.text<{ passedColor: string }>`
    color: ${({ passedColor }) => passedColor || "black"};
`;

export const StyledDelimiter = styled.br