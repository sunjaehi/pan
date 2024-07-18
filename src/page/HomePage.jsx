import React from "react";
import styled from "styled-components";

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
function HomePage() {
    return (
        <Container>
            <MainText>환영합니다.</MainText>
        </Container>
        
    );

}
 export default HomePage;