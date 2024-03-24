import React, {useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const Wrapper=styled.div`
    padding:15px;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Container=styled.div`
    width:100%;
    max-width:720px;
    :not(:last-child) {
        margin-bottom:15px;
    }
`;

function ReviewPage(props) {
    const navigate=useNavigate();

    const [title,setTitle]=useState('');
    const [text, setText]=useState('');

    return (
        <Wrapper>
            <Container>
                <TextInput
                    height={20}
                    value={title}
                    onChange={(event)=> {
                        setTitle(event.target.value);
                    }}
                    placeholder="문의 제목을 작성해주세요"
                />
                <TextInput
                    height={500}
                    value={text}
                    onChange={(event)=> {
                        setText(event.target.value);
                    }}
                    placeholder="문의 내용을 작성해주세요."
                />
                <Button 
                    name='문의 작성하기'
                    onClick={()=> {
                        navigate('/');
                    }}
                    
                />
        </Container>
    </Wrapper>
        
    );

}
export default ReviewPage;