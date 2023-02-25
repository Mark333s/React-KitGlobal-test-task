import React from 'react';
import styled from 'styled-components';
import { Header } from '../../components/Header';

const BasketStyled = styled.div`
    margin: 60px;
    background-color: #fff;
    min-height: 60vh;
`;

export const Basket: React.FC = () => {
    return (
        <BasketStyled>
            <Header />
        </BasketStyled>
    );
};
