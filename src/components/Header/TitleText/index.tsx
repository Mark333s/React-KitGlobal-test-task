import React from 'react';
import styled from 'styled-components';

type TitleTextProps = {
    children: string;
}

const StyledTitle = styled.h1`  
font-size: 18px
font-weight: bold
`;

export const Title: React.FC<TitleTextProps> = ({ children }) => {
    return (
        <StyledTitle>{children}</StyledTitle>
    );
};
