import React from "react";
import Header from "../component/Header";
import BodList from "../component/BodList";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
//import data from '.db/data';
const Wrapper=styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

function MainPage() {
    const navigate=useNavigate();
    return (
        <Wrapper>
            <Button
            name='홈'
            onClick={()=> {
                navigate('/home-page');
            }}
            />
            <Button
            name='목록'
            onClick={()=> {
                navigate('/bod-page');
            }}
            />
            <Button
            name='문의'
            onClick={()=> {
                navigate('/review-page');
            }}
            />
        </Wrapper>
        
    );
    
}
export default MainPage;