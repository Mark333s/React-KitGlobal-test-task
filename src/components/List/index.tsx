import React from 'react';
import styled from 'styled-components';

import { Text } from './Text';
import { ListBlock } from './ListBlock';

const ListStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;

export const List: React.FC = () => {
    //The component renders the title and list of pizzas
    return (
        <ListStyled>
            <Text>Піци</Text>
            <ListBlock />
        </ListStyled>
    );
};