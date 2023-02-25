import React from 'react';
import styled from 'styled-components';

type TextProps = {
    children: string;
}


const TitleTextStyled = styled.h2`
   font-size: 28px;
   font-weight: bold;
`;

export const TitleText: React.FC<TextProps> = ({ children }) => {
    return (
        <TitleTextStyled>{children}</TitleTextStyled>
    );
};
