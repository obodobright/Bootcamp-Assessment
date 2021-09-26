import React from "react";
import styled from "styled-components";
import Footer from "./footer";
import TopFooterButton from "./topButton";

const FooterContainer = () => {
  return (
    <Container>
      <TopFooterButton />
      <Footer />
    </Container>
  );
};
export default FooterContainer;
const Container = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
`;
