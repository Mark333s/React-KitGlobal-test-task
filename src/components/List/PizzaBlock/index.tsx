import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { PizzaItem } from '../../../@types/dataTypes';
import { CartItem } from '../../../@types/dataTypes';

import { addItem, selectCartItemById } from '../../../redux/slices/cartSlice';
import { useAppDispatch } from '../../../redux/store';

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
    const dispatch = useAppDispatch();
    const cartItem = useSelector(selectCartItemById(id));

    const addedCount = cartItem ? cartItem.count : 0;

    const onClickAdd = () => {
        const item: CartItem = {
          id,
          title,
          price,
          imageUrl,
          count: 0
        };
        dispatch(addItem(item));
      };
    return (
        <PizzaBlockStyled>
            <Image src={imageUrl} />
            <PizzaTitleText>{title}</PizzaTitleText>
            <BottomSection price={price} onClickAdd={onClickAdd} addedCount={addedCount}/>
        </PizzaBlockStyled>
    );
};
