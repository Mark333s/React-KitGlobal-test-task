import React from 'react';
import styled from 'styled-components';

import { PizzaButton } from './PizzaButton';
import { PriceText } from './PriceText';

export type BottomSectionProps = {
    price: number;
    addedCount: number;
    onClickAdd: () => void

}

const BottomSectionStyled = styled.div`
   display:flex;
   flex-direction: row;
   align-items: center;
   margin-top: 30px;
`;

export const BottomSection: React.FC<BottomSectionProps> = ({ price, addedCount, onClickAdd }) => {
    return (
        <BottomSectionStyled>
            <PriceText>{price} грн</PriceText>
            <PizzaButton onClickAdd={onClickAdd} addedCount={addedCount}/>
        </BottomSectionStyled>
    );
};
