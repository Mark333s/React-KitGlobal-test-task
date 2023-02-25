import React from 'react';
import styled from 'styled-components';
import { PizzaItem } from '../../../@types/dataTypes';
import { BottomSection } from './BottomSection';
import { PizzaTitleText } from './PizzaTitleText';


const PizzaBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22%;
  margin: 18px;
  
`;
const Image = styled.img.attrs(({ src }) => ({
    src: src,
    alt: 'shopping cart',
}))`
    width: 250px;
    height: 250px;
    padding: 5px
  `;


export const PizzaBlock: React.FC<PizzaItem> = ({ id, title, price, imageUrl }) => {
    return (
        <PizzaBlockStyled>
            <Image src={imageUrl} />
            <PizzaTitleText>{title}</PizzaTitleText>
            <BottomSection price={price} />
        </PizzaBlockStyled>
    );
};
