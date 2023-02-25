import React from 'react';
import styled from 'styled-components';

import { BottomSectionProps } from './BottomSection';
import { PizzaButtonText } from './PizzaButtonText';

const PizzaButtonStyled = styled.button`
   color: #fe5f1e;
   cursor: pointer;
   color: white;
   border: solid 1px;
   background-color: #fe5f1e;
   border-color: #fe5f1e; 
   padding: 10px 26px;
   border-radius: 15px;
   margin: 10px;


&:hover{
    border-color: orange;
    background-color: orange;
}
`;

type PizzaButtonProps = Omit<BottomSectionProps, "price">



export const PizzaButton: React.FC<PizzaButtonProps> = ({ addedCount, onClickAdd }) => {

    return (
        <PizzaButtonStyled onClick={onClickAdd}>
            <PizzaButtonText>+ Добавити  {addedCount > 0 && <i>{addedCount}</i>}</PizzaButtonText>
        </PizzaButtonStyled>
    );
};
