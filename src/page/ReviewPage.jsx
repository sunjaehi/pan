import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";

const Wrapper=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    
`;

function ReviewPage() {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [text, setText] =useState('');
    return (
        <Wrapper>
            <input placeholder="문의제목을 작성해주세요"
                   size={100}
            />
        </Wrapper>
    )
    
}
export default ReviewPage;