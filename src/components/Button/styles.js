import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const ButtonStyles = styled.button`
  ${(props) => props.save && css`
  background-color: #2eb85c;
  `}
  ${(props) => props.warning && css`
  background-color: #f9b115;
  `}
  ${(props) => props.primary && css`
  background-color: #321fdb;
  `}
  ${(props) => props.danger && css`
  background-color: #e55353;
  `}
  display: flex;
  font-size: 18px;
  border-radius: 10px;
  height: 48px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: 500;
  transition: background-color 0.4s;
  color: #fff;
  margin-top: 24px;
  align-self: center;
  justify-content: center;
  align-items: center;
  svg {
    align-self: center;
    size: 50%;
  }
  &:hover {
    ${(props) => props.save && css`
      background-color:${shade(0.3, '#2eb85c')}
    `}
    ${(props) => props.warning && css`
      background-color: ${shade(0.3, '#f9b115')}
    `}
    ${(props) => props.primary && css`
      background-color: ${shade(0.3, '#321fdb')}
    `}
    ${(props) => props.danger && css`
      background-color: ${shade(0.3, '#e55353')}
    `}
  }
`;