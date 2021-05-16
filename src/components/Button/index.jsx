import React from 'react';

import { ButtonStyles } from './styles';

const Button = ({
  children, save, warning, danger, primary, ...rest
}) => (
  <ButtonStyles
    save={save}
    warning={warning}
    danger={danger}
    primary={primary}
    {...rest}
  >
    {children}
  </ButtonStyles>
);

export default Button;