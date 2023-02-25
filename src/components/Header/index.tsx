import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';


import { Title } from './TitleText';
import { ShoppingCartButton } from './ShoppingCartButton';
import { Link } from 'react-router-dom';



const StyledHeader = styled.div`
   display:flex;
   justify-content: space-between;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
`;

export const Header: React.FC = () => {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <StyledHeader>
            <Title>Pizzas Magazine</Title>
            <NavbarLink to='/Basket'>

                {
                    pathname === '/Basket' ?  null : <ShoppingCartButton />
                }
              
            </NavbarLink>
        </StyledHeader>
    );
};
