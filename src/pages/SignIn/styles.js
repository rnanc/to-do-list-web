import styled, { keyframes }  from 'styled-components';
import { TextField } from '@material-ui/core'
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

const appearFromLeft = keyframes`
  from {
    opacity:0;
    transform: translateX(-50px);
  }
  to {
    opacity:1;
    transform: translateX(0);
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  place-content: center;
  width: 100%;
  max-width: 560px;
  align-items: center;
  background-color: #ebedef;
  animation: ${appearFromLeft} 1s;
  
  form {
    display: flex;
    flex-direction: column;
  }

  a {
    margin-top: 12px;
    text-decoration: none;
    color: #4f5d73;
    transition: all .4s;
    &:hover {
      color: ${shade(.2, '#4f5d73')};
      transform: translateY(-20%)
    }
  }
`
export const LoginInputs = styled(TextField)``