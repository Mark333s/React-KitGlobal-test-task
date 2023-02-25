import React from 'react';
import styled from 'styled-components';

import { TextProps } from '../../../@types/textTypes';

const PizzaTitleTextStyled = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

export const PizzaTitleText: React.FC<TextProps> = ({children}) => {
  return (
    <PizzaTitleTextStyled>{children}</PizzaTitleTextStyled>
  );
};
