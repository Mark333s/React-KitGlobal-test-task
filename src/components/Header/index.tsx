import React from 'react';
import styled from 'styled-components';


import { Title } from './TitleText';
import { ShoppingCartButton } from './ShoppingCartButton';



const StyledHeader = styled.div`
   display:flex;
   justify-content: space-between;
`;

export const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Title>Pizzas Magazine</Title>
            <ShoppingCartButton />
        </StyledHeader>
    );
};
