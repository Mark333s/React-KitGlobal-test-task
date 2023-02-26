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

export const BottomSection: React.FC<BottomSectionProps> = React.memo(({ price, addedCount, onClickAdd }) => {
    //The price and the button for adding a pizza to the cart are displayed here
    return (
        <BottomSectionStyled>
            <PriceText>{price} грн</PriceText>
            <PizzaButton onClickAdd={onClickAdd} addedCount={addedCount}/>
        </BottomSectionStyled>
    );
});
