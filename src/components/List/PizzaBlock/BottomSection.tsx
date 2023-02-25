import React from 'react';
import styled from 'styled-components';
import { PizzaButton } from './PizzaButton';
import { PriceText } from './PriceText';

type BottomSectionProps = {
    price: number
}

const BottomSectionStyled = styled.div`
   display:flex;
   flex-direction: row;
   align-items: center;
   margin-top: 30px;
`;

export const BottomSection: React.FC<BottomSectionProps> = ({ price }) => {
    return (
        <BottomSectionStyled>
            <PriceText>{price} грн</PriceText>
            <PizzaButton />
        </BottomSectionStyled>
    );
};
