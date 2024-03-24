import React from "react";
import styled from "styled-components";
import BodListItem from './BodListItem';

const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    :not(:last-child) {
        margin-bottom:15px;
    }
`;
function BodList(props) {
    const {bods,onClickItem}=props;
    return (
        <Wrapper>
            {bods.map((bod,index)=> {
                return (
                    <BodListItem
                        key={bod.id}
                        bod={bod}
                        onClick={()=> {
                            onClickItem(bod);
                        }}
                    />
                );
                
            })}
        </Wrapper>
    );
}
export default BodList;