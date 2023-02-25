import React from 'react';
import styled from 'styled-components';
import { TextProps } from '../../../@types/textTypes';

const PizzaButtonTextStyled = styled.p`
  font-size: 18px
`;

export const PizzaButtonText: React.FC<TextProps> = ({ children }) => {
    return (
        <PizzaButtonTextStyled>{children}</PizzaButtonTextStyled>
    );
};
