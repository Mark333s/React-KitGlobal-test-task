import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectCart } from '../../../redux/slices/cartSlice';

import { SHOPPINGCART } from '../../../assets/constants/img';
import { ButtonText } from './ButtonText';

const ShoppingCartButtonStyled = styled.button`
cursor: pointer;
padding: 10px 26px;
border-radius: 10px;
background-color: #f58113;
display: flex;
justify-content: center;
align-items: center;
color: white;
border: solid 1px;
background-color: #fe5f1e;
border-color: #fe5f1e; 

&:hover{
    border-color: orange;
    background-color: orange;
}
`;
export const Image = styled.img.attrs(({ src }) => ({
    src: src,
    alt: 'shopping cart',
}))`
    width: 18px;
    height: 18px;
    padding: 5px
  `;

export const ShoppingCartButton: React.FC = () => {
    const { items, totalPrice } = useSelector(selectCart);
    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

    return (
        <ShoppingCartButtonStyled>
            <ButtonText>{totalPrice}  ₴  |</ButtonText>
            <Image src={SHOPPINGCART} />
            <ButtonText>{totalCount}</ButtonText>
        </ShoppingCartButtonStyled>
    );
};
