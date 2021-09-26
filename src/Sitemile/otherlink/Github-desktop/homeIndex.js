import React from 'react'
import styled from 'styled-components'
import HomeText from './homeText';
import GithubIcon from './image/desktopicon.svg';


const HomeIndex = ({clr}) => {
    return (
      <Container>
        <Wrapper>
          <HomeLogo src={GithubIcon}/>
          <Links>
            <Link>Overview</Link>
            <Link clr>Release Notes</Link>
            <Link clr>Help</Link>
          </Links>
          <HomeText />
        </Wrapper>
      </Container>
    );
}
export default HomeIndex

const Container = styled.div`

`;
const Wrapper = styled.div`
  padding:40px 0;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  

`;
const HomeLogo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit:cover
`;
const Link = styled.div`
margin:0px 20px;
font-size:16px;
font-weight:;
color:${({clr})=> (clr ? "#7457be": "white")};
:hover{
    cursor:pointer;
    text-decoration:underline
}
`;
const Links = styled.div`
display:flex;
justify-content:center
`;