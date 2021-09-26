import React, { useState } from "react";
import styled from "styled-components";
import AccordionList from "./accordionList";

const Accordion = () => {
  const [question, setQuestion] = useState([
    {
      id: 1,
      question: "Do i have to allow the use of cookies",
      answer: " Assumenda quibusdam adipisci possimus aut ",
    },
    {
      id: 2,
      question: "How do i change my page password",
      answer: "reiciendis praesentium veniam eos vitae modi molestiae.",
    },
    {
      id: 3,
      question: "What is Bank Id",
      answer: " Nobis exercitationem laborum suscipit, deleniti nostrum quibusdam!",
    },
    {
      id: 4,
      question: "What birth number can i use",
      answer: "sit amet consectetur adipisicing elit. Asperiores,",
    },
    {
      id: 5,
      question: "When do i recieve a password ordered by the letter",
      answer: "Lorem ipsum dolor sit amet.",
    },
  ]);
  return (
    <Container>
      <Wrapper>
        <Header>Questions and answers about our login platform</Header>
        <QuestionContainer>
          {question.map((q) => {
            return <AccordionList key={q.id} question={q} />;
          })}
        </QuestionContainer>
      </Wrapper>
    </Container>
    // <h1>Questions and answers about our login platform</h1>
  );
};
export default Accordion;
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background: purple;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const QuestionContainer = styled.div``;

const Wrapper = styled.div`
  background: white;
  padding: 10px;
  display: flex;
`;

const Header = styled.h4`
  width: 250px;
`;
