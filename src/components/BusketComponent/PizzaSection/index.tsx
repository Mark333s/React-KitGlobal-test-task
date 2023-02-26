import React from 'react';
import styled from 'styled-components';

import { CartItem } from '../../../@types/dataTypes';

import { addItem, minusItem, removeItem } from '../../../redux/slices/cartSlice';
import { useAppDispatch } from '../../../redux/store';

const PizzaSectionStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 80px;
`;
const PizzaContainerStyled = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
`;

const Image = styled.img.attrs(({ src }) => ({
  src: src,
  alt: 'shopping cart',
}))`
  width: 78px;
  height: 78px;
  padding: 5px;
`;

const PizzaName = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const CountContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
`;

const MinusDisabledButton = styled.button`
    cursor: pointer;
    font-size: 18px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px;
    border-radius: 22px;
    opacity: 0.4;
    border-color: #787878;
`;

const MinusdButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 32px;
    height: 32px;
    border: solid 1px;
    border-radius: 22px;
    opacity: 0.4;
    border-color: #fe5f1e;

    &:hover{
      background-color: #fe5f1e
     }
`;

const PlusButton = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   width: 32px;
   height: 32px;
   border: solid 1px;
   border-radius: 22px;
   opacity: 0.4;
   border-color: #fe5f1e;

   &:hover{
    background-color: #fe5f1e;
   }
`;

const TextButton = styled.p`
   font-size: 34px;
   color:#fe5f1e;

   &:hover{
    color: white;
   }
`;

const TextButtonDisabled = styled.p`
   font-size: 34px;
   color:#787878;
`;

const CountText = styled.p`
    font-size: 22px;
    font-weight: bold;
    margin: 6px;
`;

const AmountText = styled.p`
   font-size: 22px;
   font-weight: bold
`;

const CancelButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: 32px;
  height: 32px;
  border: solid 1px;
  border-radius: 22px;
  opacity: 0.4;
  border-color: #787878;

  &:hover{
    color: white;
    background-color: black;
    border-color: black;
   }
`;




export const PizzaSection: React.FC<CartItem> = React.memo(({ id, title, price, imageUrl, count }) => {
  const dispatch = useAppDispatch();


  const onClickPlus = React.useCallback(() => {
    dispatch(
      addItem({
        id,
        title,
        price,
        imageUrl,
        count,
      })
    );
  }, []);


  const onClickMinus = React.useCallback(() => {
    dispatch(minusItem(id));
  }, []);

  const onClickRemove = React.useCallback(() => {
    if (window.confirm("Are you sure to remove pizza?")) {
      dispatch(removeItem(id));
    }
  }, []);

  return (
    <PizzaSectionStyled>
      <PizzaContainerStyled>
        <Image src={imageUrl} />
        <PizzaName>{title}</PizzaName>
      </PizzaContainerStyled>
      <CountContainer>
        {count < 2 ? <MinusDisabledButton>
          <TextButtonDisabled>-</TextButtonDisabled>
        </MinusDisabledButton> : <MinusdButton onClick={onClickMinus}>
          <TextButton>-</TextButton>
        </MinusdButton>
        }

        <CountText>{count}</CountText>
        <PlusButton onClick={onClickPlus}>
          <TextButton>+</TextButton>
        </PlusButton>
      </CountContainer>
      <AmountText>{count * price}  ₴</AmountText>
      <CancelButton onClick={onClickRemove}>
        x
      </CancelButton>
    </PizzaSectionStyled>
  );
});
