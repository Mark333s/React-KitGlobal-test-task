import React from 'react';
import styled from 'styled-components';
import { PizzaButtonText } from './PizzaButtonText';

const PizzaButtonStyled = styled.button`
color: #fe5f1e;
cursor: pointer;
border: solid 10px
background-color: white;
border-color: #fe5f1e;
padding: 10px 26px;
border-radius: 15px;
margin: 10px;


&:hover{
    background-color: orange;
    color: white;
}
`;

export const PizzaButton = () => {
    return (
        <PizzaButtonStyled>
            <PizzaButtonText>+ Добавити 0</PizzaButtonText>
        </PizzaButtonStyled>
    );
};
