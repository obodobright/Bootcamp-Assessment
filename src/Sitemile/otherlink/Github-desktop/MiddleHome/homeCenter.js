import React from "react";
import styled from "styled-components";
import HomeBuild from "../MiddleHome/homeBuild"
import Img1 from '../image/attributecommits.png'
import Img2 from '../image/checkoutBranches.png';
import Img3 from '../image/syntaxHighlighted.png';


const HomeCenter = () => {
  return (
    <Container>
      <HomeBuild
        img={Img1}
        textHead="Attribute commits with collaborators easily"
        colouredText="github.com"
        sup
        textBody="Quickly add co-authors to your commit. Great for pairing and excellent for sending a little love/credit to that special someone who helped fix that gnarly bug of yours. See the attribution on the history page, undo an accidental attribution, and see the co-authors on "
      />
      <HomeBuild
        chn
        img={Img2}
        textHead="Checkout branches with pull requests and view CI statuses"
        textBody="See all open pull requests for your repositories and check them out as if they were a local branch, even if they're from upstream branches or forks. See which pull requests pass commit status checks, too!"
      />
      <HomeBuild
        img={Img3}
        textHead="Syntax highlighted diffs"
        textBody="The new GitHub Desktop supports syntax highlighting when viewing diffs for a variety of different languages."
      />
    </Container>
  );
};

export default HomeCenter;

const Container = styled.div``;
