import React from "react";
import styled from "styled-components";

const HomeBottom = ({img, textHead,textBody}) => {
    return (
      <Container>
        <Wrapper>
          <ContainerImg src={img} />
          <ContainerTextHead>{textHead}</ContainerTextHead>
          <ContainerTextBody>
           
            {textBody}
          </ContainerTextBody>
        </Wrapper>
      </Container>
    );
};

export default HomeBottom;

const Container = styled.div`
width:100%;
margin: 5vh 0;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;

 margin:0 20px;
 text-align:center;
  
`;
const ContainerImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border:2px solid #7457be;
  padding:10px;
  border-radius:4px;
  background: #7457be;
  margin-bottom:15px
`;

const ContainerTextHead = styled.h6`
font-size:13px
`
const ContainerTextBody = styled.p`
font-size:11px;
font-weight:100
`;