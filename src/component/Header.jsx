import React from "react";
import { BrowserRouter, Route, Routes, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import BodPage from "../page/BodPage";
import CommentPage from "../page/CommentPage";
import ReviewPage from "../page/ReviewPage";

const MainTitle=styled(Link)`
    font-size:40px;
    font-weight:bold;
    text-align:left;
    padding:10px;
    color:grey;
    background-color:azure;
    margin-left:10px;
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
    font-size:15px;
    font-weight:normal;
`;

function Header() {
    const navigate=useNavigate();

    return (
        <MainTitle to="/">
            Board
            <Categories>
                <Linnk to="BodPage">목록</Linnk>
                <Linnk to="CommentPage">댓글</Linnk>
                <Linnk to="ReviewPage">문의</Linnk>
            </Categories>
        </MainTitle>
    )

}
export default Header;