import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
`;
const LoginButton = styled.button`
    border-radius:5px;
    flex-direction:row;
    display:flex;
`;

function LoginPage() {
    const [username, setUsername] = useState('');
    const [userPassword, setUserpassword] = useState('');

    const onField = e => {
        setUsername(e.target.value);
    };

    return (
        <Container>
            <MainText>로그인</MainText>
            <IdInput 
                type="text"
                name="username"
                value={username}
                onChange={onField}
                placeholder="아이디를 입력해주세요"
            />
            <IdInput
                type="text"
                name="userPassword"
                value={userPassword}
                placeholder="비밀번호를 입력해주세요"
            />
        </Container>
        
    )

}
export default LoginPage;