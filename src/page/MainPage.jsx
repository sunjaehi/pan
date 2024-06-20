import React from "react";
import Footer from "../component/Footer";
import BodList from "../component/BodList";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import data from '../data.json';

const Wrapper=styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 200px;
`;
const Container=styled.div`
    width:100%;
    max-width:720px;
    :not(:last-child) {
        margin-bottom:15px;
    }
`;

function MainPage() {
    const navigate=useNavigate();
    return (
        <Wrapper>
            <Button
            name='목록'
            onClick={()=> {
                navigate('/home-page');
            }}
            />
            <Button
            name='댓글'
            onClick={()=> {
                navigate('/comment-page');
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