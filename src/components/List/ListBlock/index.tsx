import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { PizzaItem } from '../../../redux/types/dataTypes';

import { getPizzasFetch } from '../../../redux/slices/pizzasSlice';
import { selectPizzas } from '../../../redux/slices/pizzasSlice';
import { useAppDispatch } from '../../../redux/store';

import { PizzaBlock } from '../PizzaBlock';



import styled from 'styled-components';

const ListBlockStyled = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   margin-top: 100px    
`;

const EmptyText = styled.h2`
  text-align: center;
  margin: 100px;
`;


export const ListBlock: React.FC = React.memo(() => {
    //The block in which all pizzas are rendered

    const pizzas = useSelector(selectPizzas);
    //Here we get all the pizzas
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPizzasFetch());
        //Sending a request to the server to get a list of pizzas
    }, [dispatch]);

    const items = pizzas.map((obj: PizzaItem) => (
        <PizzaBlock {...obj} key={obj.id} />
    ));
    return (
        <ListBlockStyled>
            {pizzas.length > 0 ? items : <EmptyText>Сталась помилка</EmptyText>}
        </ListBlockStyled>
    );
});
