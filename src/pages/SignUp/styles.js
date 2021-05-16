import styled, { keyframes }  from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

const appearFromRight = keyframes`
  from {
    opacity:0;
    transform: translateX(50px);
  }
  to {
    opacity:1;
    transform: translateX(0);
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  /* place-content: center; */
  flex-direction: column;
  width: 100%;
  max-width: 560px;
  justify-content: center;
  align-items: center;
  background-color: #ebedef;
  animation: ${appearFromRight} 1s;
  
  form {
    display: flex;
    flex-direction: column;
  }

  a {
    position: absolute;
    top: 0;
    margin-top: 36px;
    margin-left: 36px;
    align-self: flex-start;
    text-decoration: none;
    color: #4f5d73;
    transition: all .4s;
    &:hover {
      color: ${shade(.2, '#4f5d73')};
    }
  }
`
