import React from "react";
import styled from "styled-components";

const Container=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

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
        <Container>
            <Search>공지사항</Search>
        </Container>
        
    );

}
export default NoticePage;