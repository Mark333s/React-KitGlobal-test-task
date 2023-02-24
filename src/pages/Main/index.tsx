import React from 'react';
import styled from 'styled-components';
import { Header } from '../../components/Header';

const MainWrapper = styled.div`
margin: 60px;
padding: 50px;
background-color: #fff;
min-height:100vh;
`;

export const Main = () => {
    return (
        <MainWrapper>
            <Header />
        </MainWrapper>
    );
};


