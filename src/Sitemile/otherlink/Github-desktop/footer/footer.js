import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <TopBorderLine> </TopBorderLine>
      <Links>
        <Link>Terms</Link>
        <Link>Privacy Policy</Link>
        <Link>EULA</Link>
        <Link>Release Notes</Link>
      </Links>
      <CopyRightText> &copy; 2021 Github Inc. All rights reserved.</CopyRightText>
    </Container>
  );
};
export default Footer;
const Container = styled.div`
  padding: 1em 0;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center
`;
const TopBorderLine = styled.div`
  width: 100px;
  height: 0.5px;
  background: #586069;
  weight: 100;
  margin-bottom: 2em;
`;

const Links = styled.div`
display:flex;
justify-content:center
`
const Link = styled.a`
  margin: 0 13px;
  color: #7457be;
  padding: 7px 0;
  font-size: 13px;
  text-decoration: none;
  cursor:pointer;
  :hover {
    text-decoration: underline;
    color: #7457be;
  }
`;
const CopyRightText = styled.small`
  width: 100%;
  text-align: center;
  font-size: 13px;
padding-bottom:10px;
  color: #586069;

 
`;
