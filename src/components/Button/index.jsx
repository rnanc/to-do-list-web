import React from 'react';

import { ButtonStyles } from './styles';

const Button = ({
  children, save, warning, danger, primary, handleClick
}) => (
  <ButtonStyles
    save={save}
    warning={warning}
    danger={danger}
    primary={primary}
    onClick={handleClick}
  >
    {children}
  </ButtonStyles>
);

export default Button;