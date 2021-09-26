import React from "react";
import styled from "styled-components";
import HomeBottom from "./HomeBottom";
import Img1 from "../image/expandedImage.svg";
import Img2 from "../image/communitySuppoted.svg";
import Img3 from "../image/terminalshellIntegration.svg";
const HomeBottomCenter = () => {
  return (
    <ContainerWrapper>
      <Container>
        <HomeBottom
          img={Img1}
          textHead="Expanded image diff support"
          textBody="Easily compare changed images. See the before and after, swipe or fade between the two, or look at just the changed parts."
        />
        <HomeBottom
          img={Img3}
          textHead="Extensive editor & shell integrations"
          textBody="Open your favorite editor or shell from the app, or jump back to GitHub Desktop from your shell. GitHub Desktop is your springboard for work."
        />
        <HomeBottom
          img={Img2}
          textHead="Community supported"
          textBody="GitHub Desktop is open source now! Check out our roadmap, contribute, and help us make collaboration even easier."
        />
      </Container>
    </ContainerWrapper>
  );
};
export default HomeBottomCenter;

const ContainerWrapper = styled.div`
width:70%;
display:flex;
justify-content:center;
align-items:center;
margin:0 auto;
flex-wrap:wrap
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;
