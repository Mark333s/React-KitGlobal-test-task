import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BottomSectionStyled = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 70px;
`;

const BackButton = styled.button`
   cursor: pointer;
   font-size: 16px;
   color: #dddddd;
   border: solid 1px;
   background-color: white;
   border-color: #dddddd; 
   border-radius: 18px;
   padding: 18px 48px;


   &:hover{
    color: white;
    background-color: black;
    border-color: black; 
   }
`;

const PayButton = styled.button`
   cursor: pointer;
   font-size: 16px;
   color: white;
   border: solid 1px;
   background-color: #fe5f1e;
   border-color: #fe5f1e; 
   border-radius: 18px;
   padding: 18px 48px;

   &:hover{
    background-color: orange;
    border-color: orange; 
   }
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
`;

export const BottomSection: React.FC = () => {
    return (
        <BottomSectionStyled>
            <NavbarLink to='/'>
                <BackButton>Вернутися назад</BackButton>
            </NavbarLink>
            <PayButton>Оплатити зараз</PayButton>
        </BottomSectionStyled>
    );
};
