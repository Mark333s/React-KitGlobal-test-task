import React from 'react';
import styled from 'styled-components';

import { TextProps } from '../../@types/textTypes';



const TextStyled = styled.p`
   font-size: 16px;
`;

export const Text:React.FC<TextProps> = ({children}) => {
    return (
        <TextStyled>{children}</TextStyled>
    );
};
