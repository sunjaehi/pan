import React, { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Container=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;
const Title = styled.div`
    font-size:30px;
    display:flex;
    margin-top:20px;
    justify-content:center;
    align-items:center;
    
`;

function ListPage() {
    const navigate = useNavigate();
    const navigateToWrite = () => {
        navigate("/CommentPage");
    }
    return (
        <Container>
            <Title>댓글 목록</Title>
            <Button onClick={navigateToWrite}>댓글 작성하기</Button>
        </Container>
    )

}
export default ListPage;