import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getPizzasFetch } from '../../redux/slices/pizzasSlice';
import { selectPizzas } from '../../redux/slices/pizzasSlice';
import { useAppDispatch } from '../../redux/store';


import styled from 'styled-components';
import { Text } from './Text';
import { ListBlock } from './ListBlock';

const ListStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;

export const List: React.FC = () => {


    return (
        <ListStyled>
            <Text>Pizzas</Text>
            <ListBlock />
        </ListStyled>
    );
};