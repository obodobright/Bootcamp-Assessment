import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { BiGame } from "react-icons/bi";
import { VscGithubAlt } from "react-icons/vsc";
import { FaDev } from "react-icons/fa";
import { FaAssistiveListeningSystems } from "react-icons/fa";
const Nav = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Bright</Logo>
        <Links>
          <MyLink to="/">
            <GoHome />
          </MyLink>
          <MyLink to="/game">
            <BiGame />
          </MyLink>
          <MyLink to="/github-desktop">
            <VscGithubAlt />
          </MyLink>
          <MyLink to="/dailydev">
            <FaDev />
          </MyLink>
          <MyLink to="/accordion">
            <FaAssistiveListeningSystems />
          </MyLink>
          {/* <MyLink>
            <Button text="Buy Now" />
          </MyLink> */}
        </Links>
      </Wrapper>
    </Container>
  );
};
export default Nav;
const Links = styled.div`
  display: flex;
  padding: 0 30px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Logo = styled.div`
  font-size: 25px;
  font-family: cursive;
  padding: 0 40px;
`;
const MyLink = styled(Link)`
  margin: 0 20px;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  font-size: 30px;
  transition: all 350ms;
  transform: scale(1);
  cursor: pointer;

  :hover {
    transform: scale(1.05);
    color: grey;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 60px;
  color: white;
  display: flex;
  align-items: center;
`;
