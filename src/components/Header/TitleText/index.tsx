import React from 'react';
import styled from 'styled-components';
import { TextProps } from '../../../@types/textTypes';

const StyledTitle = styled.h1`  
font-size: 18px
font-weight: bold
`;


export const Title: React.FC<TextProps> = ({ children }) => {
    return (
        <>
            <StyledTitle>{children}</StyledTitle>
        </>
    );
};
