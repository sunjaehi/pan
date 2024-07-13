import React from "react";
import styled from "styled-components";

const StyledButton=styled.button`
    padding:5px 10px;
    font-size:15px;
    font-family: 'Ownglyph_ryuttung-Rg';
    flex-direction:row;
    align-items: center;
    justify-content: center;
    border: 1px solid grey;
    border-width:1px;
    border-radius:8px;
    cursor:pointer;
    background: #fff8dc;
    width:120px;
    height:40px;
    margin-bottom :10px;
    display:flex;
    &:hover {
        background: #ffebcd;
    }
`;
function Button({children,...props}) {
    return (
        <StyledButton {...props}>{children}</StyledButton>
    )
}
export default Button;