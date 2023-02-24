import React from 'react';
import styled from 'styled-components';
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
border: aliceblue;

&:hover{
    background-color: orange;
}
`;
const Image = styled.img.attrs(({ src }) => ({
    src: src,
    alt: 'shopping cart',
}))`
    width: 18px;
    height: 18px;
    padding: 5px
  `;

export const ShoppingCartButton: React.FC = () => {
    return (
        <ShoppingCartButtonStyled>
            <ButtonText>24  $  |</ButtonText>
            <Image src={SHOPPINGCART} />
            <ButtonText>3</ButtonText>
        </ShoppingCartButtonStyled>
    );
};
