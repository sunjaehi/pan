import React from "react";
import styled from "styled-components";

const Wrapper=styled.div`
    width:80%;
    padding:15px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    border:1px solid grey;
    border-radius:3px;
    cursor:pointer;
    background:white;
    :hover {
        background:lightgrey;
    }
`;
const TitleText=styled.p`
    font-size:15px;
    font-weight:500;
`;
function BodListItem(props) {
    const {bod,onClick}=props;
    return (
        <Wrapper onClick={onClick}>
            <TitleText>{bod.title}</TitleText>
        </Wrapper>
    );

}
export default BodListItem;