import React from 'react';
import styled from 'styled-components';
import { TextProps } from '../../@types/textTypes';

const TextStyled = styled.h2`
   font-size 24px;
   font-weight: bold
`;

export const Text: React.FC<TextProps> = ({ children }) => {
    return (
        <TextStyled>{children}</TextStyled>
    );
};
