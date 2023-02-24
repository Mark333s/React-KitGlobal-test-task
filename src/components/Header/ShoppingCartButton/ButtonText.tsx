import React from 'react';
import styled from 'styled-components';

import { TextProps } from '../../../@types/textTypes';

const ButtonTextStyled = styled.p`
  font-size: 15px;
  color: white;
  padding-righ: 16px
`;


export const ButtonText: React.FC<TextProps> = ({ children }) => {
    return (
        <ButtonTextStyled>{children}</ButtonTextStyled>
    );
};
