import React from 'react'
import styled from 'styled-components';

const HomeBuild = ({chn, img,textHead,textBody,sup,colouredText}) => {
    return (
      <Container>
        <Wrapper chn={chn}>
          <WrapperImg src={img} />
          <WrapperText>
            <TextHead>{textHead}</TextHead>
            <TextBody>
              {textBody}
              <Span sup={sup}>{colouredText}</Span>
            </TextBody>
          </WrapperText>
        </Wrapper>
      </Container>
    );
}
export default HomeBuild

const Container = styled.div`
margin:20px 0;
width: 100%;
display:flex;
justify-content:center;
akign-items:center
`

const Wrapper = styled.div`
display:flex;
justify-content:space-between;
flex-direction:${({ chn }) => (chn ? 'row-reverse': 'row')};
width:850px;
align-items:center;

`;
const WrapperImg = styled.img`
width:300px;
height:200px;
margin:0 15px;
`
const WrapperText = styled.div`
  width: 400px;
  padding: 14px;
  margin:0 15px ;
`;

  const TextHead = styled.h5`
  font-size: 20px;
  font-weight:300
  `
   const TextBody = styled.p`
     font-size: 13px;
     font-weight: 100;

    
   `;
   const Span =styled.span`
      color: ${({ sup }) => (sup ? "red" : "white")};
   `;
    
     
  