import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { CartItem } from '../../@types/dataTypes';

import { selectCart } from '../../redux/slices/cartSlice';

import { BottomSection } from './BottomSection';
import { PizzaSection } from './PizzaSection';
import { TopSection } from './TopSection';
import { TotalSection } from './TotalSection';

const BusketComponentStyled = styled.div`
   padding: 100px;
`;

const EmptyText = styled.h2`
  text-align: center;
  margin: 100px;
`;


export const BusketComponent: React.FC = React.memo(() => {
    const { items, totalPrice } = useSelector(selectCart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);

    const pizzas = items.map((obj: CartItem) => (
        <PizzaSection {...obj} key={obj.id} />
    ));
    return (
        <BusketComponentStyled>
            <TopSection />
            {!totalPrice ? <EmptyText>Корзина Пуста</EmptyText> : pizzas}
            <TotalSection totalCount={totalCount} totalPrice={totalPrice} />
            <BottomSection />
        </BusketComponentStyled>
    );
});
