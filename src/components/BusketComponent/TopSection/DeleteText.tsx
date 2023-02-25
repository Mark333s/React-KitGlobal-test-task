import React from 'react';
import styled from 'styled-components';

import { TextProps } from '../../../@types/textTypes';

const DeleteTextStyled = styled.p`
   cursor: pointer;
   color: #b6b6b6;
   font-size: 18px;

   &:hover{
    color: #232323;;
   }
`;

export const DeleteText: React.FC<TextProps> = ({ children }) => {
  return (
    <DeleteTextStyled>{children}</DeleteTextStyled>
  );
};
