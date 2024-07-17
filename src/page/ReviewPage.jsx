import React, { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Title = styled.div`
    font-size:30px;
    display:flex;
    margin-top:20px;
    justify-content:center;
    align-items:center;
`;
const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

function ReviewPage() {
    const navigate = useNavigate();
    const navigateToQa = () => {
        navigate("/QaWritePage");
    }

    return (
        <Container>
            <Title>문의 내역</Title>
            <Button onClick={navigateToQa}>문의 작성하기</Button>
        </Container>
        

    )


}
export default ReviewPage;