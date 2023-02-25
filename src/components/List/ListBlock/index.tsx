import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getPizzasFetch } from '../../../redux/slices/pizzasSlice';
import { selectPizzas } from '../../../redux/slices/pizzasSlice';
import { useAppDispatch } from '../../../redux/store';
import { PizzaBlock } from '../PizzaBlock';
import { PizzaItem } from '../../../@types/dataTypes';


import styled from 'styled-components';

const ListBlockStyled = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   margin-top: 100px    
`;

export const ListBlock = () => {

    const pizzas = useSelector(selectPizzas);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPizzasFetch());
    }, [dispatch]);

    const items = pizzas.map((obj: PizzaItem) => (
        <PizzaBlock {...obj} key={obj.id} />
    ));
    return (
        <ListBlockStyled>
            {items}
        </ListBlockStyled>
    );
};
