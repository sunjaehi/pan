import React from "react";
import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BodPage from "../page/BodPage";
import CommentPage from "../page/CommentPage";
import ReviewPage from "../page/ReviewPage";
import LoginPage from "../page/LoginPage";

const MainTitle=styled(Link)`
    font-size:40px;
    font-weight:bold;
    text-align:left;
    padding:10px;
    color:grey;
    background-color:lightyellow;
    display:flex;
    text-decoration:none;
    justify-content:space-between;
    align-items:center;
`;
const Categories=styled.div`
    display:flex;
    gap:15px;
`;

const Linnk=styled(Link)`
    margin:5px;
    cursor:pointer;
    text-decoration:none;
    color:black;
    font-size:20px;
    font-weight:normal;
`;

function Header() {
    const navigate=useNavigate();

    return (
        <MainTitle to="/">
            Blog
            <Categories>
                <Linnk to="LoginPage">로그인</Linnk>
                <Linnk to="ListPage">댓글</Linnk>
                <Linnk to="ReviewPage">문의</Linnk>
            </Categories>
        </MainTitle>
    )

}
export default Header;