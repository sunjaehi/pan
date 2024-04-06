import React, {useState }from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import data from '../data.json';
import Button from "../ui/Button";
import BodList from "../component/BodList";


const Wrapper=styled.div`
    padding:15px;
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    overflow:scroll;
`;
const Container=styled.div`
    width:100%;
    max-width:720px;
    :not(:last-child) {
        margin-bottom:15px;
    }
`;

function HomePage(props) {
    const navigate=useNavigate();
    const {bodId}=useParams();

    const bod=data.find((item)=> {
        return item.id===bodId;
    });
    return (
        <Wrapper>
            <Container>
                <BodList
                    bods={data}
                    onClickItem={(item)=> {
                        navigate(`/bod/${item.id}`);
                    }}
                />
                <Button
                    name='홈'
                    onClick={()=> {
                        navigate('/');
                    }}
                />
            </Container>
        </Wrapper>
    )

}
export default HomePage;