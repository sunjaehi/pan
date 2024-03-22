import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Head=styled.div`
    padding:10px;
    font-weight:bold;
    text-align:center;
    background-color:azure;
`;

const Header=() => {
    return (
        <Head>
            <span>홈</span>
            &nbsp; &nbsp; | &nbsp; &nbsp;
            <span>리뷰</span>
            &nbsp; &nbsp; | &nbsp; &nbsp;
            <span>목록</span>
            <hr />
        </Head>
    )
}
export default Header;