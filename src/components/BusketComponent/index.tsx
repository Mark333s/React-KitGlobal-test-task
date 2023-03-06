import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { CartItem } from '../../redux/types/dataTypes';

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
    //Here we get the list of pizzas in the basket and their total price from redux


    React.useEffect(() => {
        //This is where we store our pizzas in local storage
        const json = JSON.stringify(items);
        localStorage.setItem("cart", json);
        return () => {
            localStorage.clear();
        };
    }, [items]);

    const totalCount = items.reduce((sum, item) => sum + item.count, 0);
    //The total number of pizzas in the cart is calculated here



    const pizzas = items.map((obj: CartItem) => (
        <PizzaSection {...obj} key={obj.id} />
    ));
    return (
        <BusketComponentStyled>
            <TopSection />
            {pizzas.length > 0 ? pizzas : <EmptyText>Корзина пуста</EmptyText>}
            <TotalSection totalCount={totalCount} totalPrice={totalPrice} />
            <BottomSection />
        </BusketComponentStyled>
    );
});
