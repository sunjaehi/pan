import React from "react";
import styled from "styled-components";

const Search = styled.div`
    display:flex;
    text-align:center;
    padding:10px;
    color:black;
    font-size:30px;
    justify-content:center;
    margin-top:10px;
`

function NoticePage() {
    return (
        <Search>공지사항</Search>
    );

}
export default NoticePage;