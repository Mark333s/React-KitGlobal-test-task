import React from 'react';
import styled from 'styled-components';

type TextProps = {
    children: string;
}

const TextStyled = styled.p`
   font-size: 16px;
`;

export const Text:React.FC<TextProps> = ({children}) => {
    return (
        <TextStyled>{children}</TextStyled>
    );
};
