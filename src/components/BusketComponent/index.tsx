import React from 'react';
import styled from 'styled-components';
import { TitleText } from './TitleText';

const TopSectionStyled = styled.div`
   display: flex;
   flex-direction: row;
`;

export const TopSection: React.FC = () => {
  return (
    <TopSectionStyled>
      <TitleText />
    </TopSectionStyled>
  );
};
