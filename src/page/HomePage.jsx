import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
`;

const MainText = styled.div`
    font-size:30px;
    margin:20px;
`
const SubText = styled(Link)`
    font-size:20px;
    color:grey;
    margin:20px;
    text-decoration:none;
`
function HomePage() {
    return (
        <Container>
            <MainText>환영합니다</MainText>
            <SubText>한 줄 소개</SubText>
        </Container>
        
    );

}
export default HomePage;