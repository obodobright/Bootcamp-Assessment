import React from "react";
import styled from "styled-components";
import HomeCenter from "./MiddleHome/homeCenter";
import HomeIndex from './homeIndex';
import HomeBottomCenter from "./bottomHome/HomeBottomContainer"
import FooterContainer from "./footer/footerContainer";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <HomeIndex />
        <HomeCenter />
        <HomeBottomCenter />
        <FooterContainer />
      </Wrapper>
    </Container>
  );
};
export default Home;

const Container = styled.div`
 min-height:100vh;
 height:100%;
 margin-bottom:30px;
 display:flex;
 justify-content:center;
 
  
 `;
const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  background: #24292e;
  background-image: url("background.svg");
  background-position: auto;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
`;
