import React from 'react';
import styled from 'styled-components';

import { BusketComponent } from '../../components/BusketComponent';
import { Header } from '../../components/Header';


const BasketStyled = styled.div`
    margin: 60px;
    padding: 70px;
    background-color: #fff;
    min-height: 60vh;
`;

export const Basket: React.FC = () => {
    //Cart page
    return (
        <BasketStyled>
            <Header />
            <BusketComponent />
        </BasketStyled>
    );
};
