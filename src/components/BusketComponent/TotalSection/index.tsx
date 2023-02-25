import React from 'react';
import styled from 'styled-components';


type TotalSectionProps = {
    totalCount: number;
    totalPrice: number;
}

const TotalSectionStyled = styled.div`
   display:flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   margin-top: 70px;
`;

const CountContainer = styled.div`
`;

const AmountContainer = styled.div`
`;


const Text = styled.span`
   font-size: 24px;
`;
const CountText = styled.span`
   font-size: 24px;
   font-weight: bold;
`;

const AmountText = styled.span`
   font-size: 24px;
   font-weight: bold;
   color: #fe5f1e;
`;

export const TotalSection: React.FC<TotalSectionProps> = React.memo(({totalCount, totalPrice}) => {
    return (
        <TotalSectionStyled>
            <CountContainer>
                <Text>Всього піц:</Text>
                <CountText>{totalCount} шт.</CountText>
            </CountContainer>
            <AmountContainer>
                <Text>Сума замовлення: </Text>
                <AmountText>{totalPrice} ₴</AmountText>
            </AmountContainer>
        </TotalSectionStyled>
    );
});
