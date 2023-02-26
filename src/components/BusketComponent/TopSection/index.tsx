import React from 'react';
import styled from 'styled-components';

import { clearItems } from '../../../redux/slices/cartSlice';
import { useAppDispatch } from '../../../redux/store';

import { DeleteText } from './DeleteText';
import { TitleTextComponent } from './TitleTextComponent';

const TopSectionStyled = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`;
const Button = styled.button`
  text-decoration: none;
  border: none;
  background-color: white;
 `;

export const TopSection: React.FC = () => {
  //This component is responsible for drawing the header of the shopping cart and the clear button

  const dispatch = useAppDispatch();

  const onClickClear = React.useCallback(() => {
    //Basket cleaning function
    if (window.confirm("Are you sure to clear bucket?")) {
      dispatch(clearItems());
    }
  }, []);


  return (
    <TopSectionStyled>
      <TitleTextComponent />
      <Button onClick={onClickClear}>
        <DeleteText>Очистити Корзину</DeleteText>
      </Button>
    </TopSectionStyled>
  );
};
