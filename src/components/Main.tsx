import React from 'react'; 
import styled from 'styled-components';
import photo from './../assets/images/main.jpg'


export const Main = () => {
    return (
        <div>
            <Wrapper>
            <Photo src={photo} alt="" />
            <BoxText>
                <Title>Headline</Title>
                <Text>Faucibus. Faucibus. Sit sit sapien sit
                 tempusrisu ut.Sit molestie ornare in venen</Text>
            </BoxText>
            <BoxBtn>
                <StyledBtn>See more</StyledBtn>
                <SuperBtn>Save</SuperBtn>
            </BoxBtn>
        </Wrapper>
        </div>
    );
};
const Photo = styled.img`
    width: 280px;
    height: 170px;
    object-fit: cover;
    margin: 10px;
    border-radius: 10px;
   
    
`
const Wrapper =styled.div`
    width: 300px;
    height: 350px ;
    background-color:#FFFFFF;
    border-radius: 15px;
`
const BoxText = styled.div`
    width: 260px;
    height: 100px;
   
`
const Title = styled.div`
    font-size: 16px;
    line-height: 19.36px;
    font-weight: 700;
    padding: 10px;
    color: #000000;
    text-align:left;
`
const Text = styled.span`
    font-size: 12px;
    line-height: 20px;
    font-weight: 500;
    padding: 10px;
    color: #ABB3BA;
    text-align: left;
    
`
const StyledBtn = styled.button`
    border:1px solid #4E71FE;
    width: 86px;
    height: 30px;
    border-radius: 5px;
    background-color:#4E71FE;
    color:#FFFFFF;
    padding: 5px;
    font-size: 10;
    font-weight: 700;
    line-height: 20px;
    
`
const SuperBtn = styled(StyledBtn)`
     background-color:#FFFFFF;
     color:#4E71FE;
     
`
const BoxBtn = styled.div`
   text-align: left;
padding-left: 10px;
`