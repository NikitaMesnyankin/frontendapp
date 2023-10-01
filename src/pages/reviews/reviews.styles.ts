import styled from 'styled-components';

export const StyledMain = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
`;

export const StyledReviewsHeader = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 1%;
  padding-bottom: 1%;
  background: transparent;
  border-bottom: bisque solid 0.25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledReviewsTopText = styled.span`
  text-shadow: 1px 1px 2px black;
  vertical-align: middle;
  font-size: large;
  font-family: "Lucida Sans", serif;
`

export const StyledReviewDescriptionSpan = styled.span`
  padding-top: 1.5vh;
  width: 100%;
  justify-self: center;
  vertical-align: middle;
  text-align: center;
`

export const StyledReviewTableContainer = styled.table`
  width: 80%;
  table-layout: fixed;
  margin-bottom: 20px;
  border-bottom: 1px solid black;
  word-break: break-word;
`

export const StyledTableHeader = styled.thead`
  vertical-align: middle;
  border-color: inherit;
`

export const StyledTableRow = styled.tr`
  display: table-row;
  width: inherit;
`

export const StyledTableCell = styled.th`
  display: table-cell;
  width: inherit;
`

export const StyledColumnWidth = styled.col<{ width: number, color: string }>`
  width: ${({ width }) => width};
  color: ${({ color }) => color};
`

export const StyledText = styled.text<{ passedColor: string }>`
    color: ${({ passedColor }) => passedColor || "black"};
`;

export const StyledReviewContainer = styled.div`
    background: #e5f1dd;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    //font-size: 1.25vh;
    border-radius: 10px;
    border: 1.5px solid #5f9ea0;
    margin: 10px 10px 10px 10px;
`;

export const StyledReviewFieldSpan = styled.span<{ color: string; fontSize: string; width: number }>`
  //font-size: medium;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bold;
  color: ${({ color }) => color};
  width: ${({ width }) => `${width}%`};
  text-align: center;
`