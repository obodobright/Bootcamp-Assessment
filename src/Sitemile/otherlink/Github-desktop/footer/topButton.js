import React from 'react'
import styled from 'styled-components'

const TopFooterButton = () => {
    return <Container>
        <Button>See What's  been Built</Button>
    </Container>
}
export default TopFooterButton

const Container = styled.div`

margin-bottom:30px;
width:100%;
display:flex;
justify-content:center
`
const Button = styled.button`
  font-size: 16px;
  background: transparent;
  border: 2px solid #d1d1d1;
  margin: 20px 0;
  padding: 13px 20px;
  color: white;
  border-radius: 5px;
  text-transform:lowercase;
  

  :hover{
      background:white;
      color:black;
      font-weight:normal
  }
`;