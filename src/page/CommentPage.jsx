import React, { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";

const Container=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;
const InnerContainer = styled.div`
    display:flex;
    align-items:right;
    justify-content:space-between;
    margin-top:20px;
`;

const Title = styled.div`
    font-size:30px;
    display:flex;
    margin-top:20px;
    justify-content:center;
    align-items:center;
    
`;
const CommentTitle = styled.input`
    font-size:15px;
    width:500px;
    height:30px;
    margin-top:30px;
    border:1px solid;
    border-radius:3px;
    padding-left:10px;

    ::placeholder {
        color:black;
    }

    
`;
const Comment = styled.input`
    font-size:15px;
    width:500px;
    height:200px;
    padding-left:10px;
    margin-top:30px;
    border-radius:5px;
    border:1px solid;
`;

function CommentPage() {
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');

    const onTitle = e => {
        setTitle(e.target.value);
    };
    const onContent = e => {
        setComment(e.target.value);
    }

    return (
        <Container>
            <Title>댓글 작성하기</Title>
            <CommentTitle 
                type="text"
                name="title"
                placeholder="제목을 입력해주세요"
                value={title}
                onChange={onTitle}
            />
            <Comment
                type="text"
                value={comment}
                name="comment"
                placeholder="내용을 입력해주세요"
                onChange={onContent}
            />
            <InnerContainer>
                <Button>등록</Button>
            </InnerContainer>
            

        </Container>
        

    )

}
export default CommentPage;