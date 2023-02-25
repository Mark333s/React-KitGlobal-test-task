import React from 'react';
import styled from 'styled-components';


type PriceTextProps = {
    children: React.ReactNode
}

const PriceTextStyled = styled.p`
   font-size: 18px;
   font-weight: bold;
`;

export const PriceText: React.FC<PriceTextProps> = ({ children }) => {
    return (
        <PriceTextStyled>{children}</PriceTextStyled>
    );
};
