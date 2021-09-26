import React from "react";
import styled from "styled-components";
import Hero from "./hero";
import Nav from "./nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from "./otherlink/game";
import HomeContainer from "./otherlink/Github-desktop/homeContainer";
import Homescreen from "./otherlink/dailyDev/homescreen";
import Accordion from "./otherlink/accordion/accordion";
const Home = () => {
  return (
    <Container>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Hero}></Route>
          <Route path="/game" exact component={Game}></Route>
          <Route path="/github-desktop" exact component={HomeContainer}></Route>
          <Route path="/dailydev" exact component={Homescreen}></Route>
          <Route path="/accordion" exact component={Accordion}></Route>
        </Switch>
      </Router>
    </Container>
  );
};
export default Home;

const Container = styled.div`
  width: 100%;
  min-height: 130vh;
  height: 100%;
  background-image: url("bg-color.jpeg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
