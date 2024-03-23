import React from "react";
import styled from "styled-components";

const StyledButton=styled.button`
    padding:4px;
    font-size:15px;
    flex-direction:column;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid grey;
    border-width:1px;
    border-radius:8px;
    cursor:pointer;
    width: 10%;
    background: white;
    margin-bottom :10px;
    &:hover {
        background: lightgrey;
    }
`;
function Button(props) {
    const {name,onClick}=props;
    return <StyledButton onClick={onClick}>{name || "button"}</StyledButton>;


}
export default Button;