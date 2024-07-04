import React from "react";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import styled from "styled-components";
import BodPage from "../page/BodPage";
import NoticePage from "../page/NoticePage";

const Wrapper=styled.div`
    font-size:17px;
    background-color:lightyellow;
    padding:5px;
    flex-direction : row;
    justify-content:space-between;
    position:fixed;
    bottom:0;
    left:0;
    right:0;   
`;
const Linnk=styled(Link)`
    margin:5px;
    margin-right:15px;
    cursor:pointer;
    text-decoration:none;
    color:black;
`;
function Footer() {
    return (
        <Wrapper>
            <Linnk to="NoticePage">공지사항</Linnk>
            <Linnk to="BodPage">목록</Linnk>
        </Wrapper>
        
    );    
}

export default Footer;
