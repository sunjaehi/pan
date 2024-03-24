import React, {useState }from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import data from '../data.json';
import Button from "../ui/Button";

const Wrapper=styled.div`
    padding:15px;
    width: 100%;
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
const BodContainer=styled.div`
    padding:8px 16px;
    border: 1px solid grey;
    border-radius:8px;
`;
const TitleText=styled.p`
    font-size:25px;
    font-weight:500;
`;
const TeText=styled.p`
    font-size:18px;
    lint-height:30px;
    white-space:pre-wrap;
`;

function BodPage(props) {
    const navigate=useNavigate();
    const {bodId}=useParams();

    const bod=data.find((item)=> {
        return item.id===bodId;
    });
    return (
        <Wrapper>
            <Container>
                <Button
                    name='뒤로 가기'
                    onClick={()=> {
                        navigate('/');
                    }}
                />
                <BodContainer>
                    <TitleText>{bod.title}</TitleText>
                    <TeText>{bod.text}</TeText>
                </BodContainer>
            </Container>
        </Wrapper>
    )

}
export default BodPage;