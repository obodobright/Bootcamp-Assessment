import React from "react";
import styled from "styled-components";
import HomeImage from "./image/githubwindows.png";

const HomeText = ( ) => {
  return (
    <Container>
      <ContainerHeader>Github Desktop</ContainerHeader>
      <ContainerSubHeader>
        Focus on what matters instead of fighting with Git. Whether you're new to Git or a seasoned
        user, GitHub Desktop simplifies your development workflow.
      </ContainerSubHeader>
      <ContainerButton>Download for Windows (64bit)</ContainerButton>
      <ContainerP>
        Download for <Span> macOS</Span> or <Span> Windows (msi)</Span>
      </ContainerP>
      <ContainerP>
        By downloading, you agree to the <Span>Open Source Applications Terms.</Span>
      </ContainerP>
      <ContainerImg  src={HomeImage}/>
    </Container>
  );
};
export default HomeText;
const Container = styled.div`
  margin-top: 10vh;
  text-align: center;
  width: 70%;
`;

const ContainerHeader = styled.h1`
  font-size: 58px;
  font-weight: lighter;
`;
const ContainerSubHeader = styled.h3`
  font-size: 20px;
  font-weight: lighter;
  line-height: 1.4;
`;

const ContainerButton = styled.button`
  margin: 5vh 0;
  font-size: 20px;
  padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  background: #7457be;
  color: white;

  :hover {
    background: #8665d8;
  }
`;
const ContainerP = styled.p`
  font-size: 15px;
  line-height: 0.3;
  font-weight: 200;
`;
const Span = styled.span`
  color: #7457be;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const ContainerImg = styled.img`
  margin-top: 7vh;
  width: 100%;
 object-fit: cover;
`;
