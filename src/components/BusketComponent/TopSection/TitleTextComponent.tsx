import React from 'react';
import styled from 'styled-components';

import { SHOPPINGCARTBLACK } from '../../../assets/constants/img';
import { TitleText } from './TitleText';

const TitleTextComponentStyled = styled.div`  
   display: flex;
   align-items: center;
`;

export const Image = styled.img.attrs(({ src }) => ({
    src: src,
    alt: 'shopping cart',
}))`
    width: 34px;
    height: 34px;
    padding: 5px
  `;

export const TitleTextComponent = () => {
    return (
        <TitleTextComponentStyled>
            <Image src={SHOPPINGCARTBLACK} />
            <TitleText>Корзина</TitleText>
        </TitleTextComponentStyled>
    );
};
