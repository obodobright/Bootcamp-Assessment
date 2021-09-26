import React from "react";
import styled from "styled-components";

const AccordionList = ({ question }) => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <Container>
      <QuestionBox>
        <QuestionHead>
          <Question>{question.question}</Question>
          <ToggleButton onClick={() => setIsActive(!isActive)}>{isActive ? "-" : "+"}</ToggleButton>
        </QuestionHead>
        {isActive && <Answer>{question.answer}</Answer>}
      </QuestionBox>
    </Container>
  );
};
export default AccordionList;

const Container = styled.div``;
const QuestionHead = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ToggleButton = styled.button`
  border: none;
  border-radius: 50%;
  background: black;
  color: white;
`;
const Question = styled.div``;
const Answer = styled.div`
  padding: 0 10px;
`;
const QuestionBox = styled.div`
  width: 500px;
  padding: 5px;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.2);
  margin: 10px 0;
`;
