import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;

const MainText = styled.div`
    display:flex;
    padding:10px;
    color:black;
    font-size:30px;
    margin-top:30px;
    margin-bottom:30px;
`;
const IdInput = styled.input`
    width:500px;
    margin:10px;   
    height:45px;
    border-radius:5px;
    margin:20px;
    border:1px solid;
    padding-left:10px;
`;
const InnerContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center; /*가로정렬*/
    gap:15px;
    margin-top:40px;
`;


function LoginPage() {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate("/");
    }

    const [username, setUsername] = useState('');
    const [userPassword, setUserpassword] = useState('');

    const onId = e => {
        setUsername(e.target.value);
    };
    const onPassword = e => {
        setUserpassword(e.target.value);
    }

    return (
        <Container>
            <MainText>로그인</MainText>
            <IdInput 
                type="text"
                name="username"
                value={username}
                onChange={onId}
                placeholder="아이디를 입력해주세요"
            />
            <IdInput
                type="text"
                name="userPassword"
                value={userPassword}
                onChange={onPassword}
                placeholder="비밀번호를 입력해주세요"
            />
            <InnerContainer>
                <Button onClick={navigateToHome}>취소</Button>
                <Button>로그인</Button>
            </InnerContainer>
        </Container>
        
    )

}
export default LoginPage;