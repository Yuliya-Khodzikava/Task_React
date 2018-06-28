import React, { Component } from 'react';
import styled from "styled-components";
//import './MainHeadSearch.scss';

import Header from '../Header/Header.js';
import SearchItems from '../SearchItems/SearchItems.js';

class MainHeadSearch extends React.Component {

    render() {
        return (
            <MainWrapper>
                <MainDark>
                    <Header />
                    <SearchItems />
                </MainDark>
            </MainWrapper>
        );
    }
}

const MainWrapper = styled.div`
    background-image: url("../../resources/img/main-image.jpg");
`;

const MainDark = styled.div`
    background: rgba(0, 0, 0, 0.7);
`;

export default MainHeadSearch;