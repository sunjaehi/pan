import React from "react";
import styled from "styled-components";
import dataJson from "../db/data.json"; 

const Add=styled.div`
    font-size:40px;
    color: black;
    padding:5px;
    text-align:center;
`;
export default function BodList() {
    console.log(dataJson);
    return (
        <>
        <Add>게시판</Add>
            {
                dataJson.students.map(b=> (
                    <li key={b.id}>
                        {b.name}
                    </li>
                ))
            }
        </>

    );
}