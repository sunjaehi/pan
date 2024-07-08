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

function ReviewPage() {
    const navigate = useNavigate();
    return (
        <Title>문의 내역</Title>

    )


}
export default ReviewPage;