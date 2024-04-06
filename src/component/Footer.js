import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper=styled.div`
    font-size:13px;
    background-color:azure;
    padding:5px;
    flex-direction : row;
    justify-content:space-around;
    position:fixed;
    bottom:0;
    left:0;
    right:0;
`;
function Footer() {
    return (
        <>
            <Wrapper>
            <hr />
            이용안내 
            처리방침
            </Wrapper>
        </>
        
    );    
}

export default Footer;
