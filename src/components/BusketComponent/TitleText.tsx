import React from 'react';
import styled from 'styled-components';
import { SHOPPINGCART } from '../../assets/constants/img';

const TitleTextStyled = styled.h2`

`;

export const Image = styled.img.attrs(({ src }) => ({
    src: src,
    alt: 'shopping cart',
}))`
    width: 18px;
    height: 18px;
    padding: 5px
  `;

export const TitleText = () => {
    return (
        <TitleTextStyled>
            <Image src={SHOPPINGCART} />
            Bucket
        </TitleTextStyled>
    );
};
