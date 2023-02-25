import React from 'react';
import styled from 'styled-components';

type ButtonTextProps = {
  children: React.ReactNode
 }

const ButtonTextStyled = styled.p`
  font-size: 15px;
  color: white;
  padding-righ: 16px
`;

export const ButtonText: React.FC<ButtonTextProps> = ({ children }) => {
    return (
        <ButtonTextStyled>{children}</ButtonTextStyled>
    );
};
