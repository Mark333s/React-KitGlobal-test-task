import React from 'react';
import styled from 'styled-components';

const PizzaButtonTextStyled = styled.p`
  font-size: 18px
`;
   type PizzaButtonTextProps = {
    children: React.ReactNode
   }

export const PizzaButtonText: React.FC<PizzaButtonTextProps> = ({ children }) => {
    return (
        <PizzaButtonTextStyled>{children}</PizzaButtonTextStyled>
    );
};
