import React, { Component } from 'react';
import styled from "styled-components";

import './Header.scss';

class Header extends Component {

    render() {

        const Header = styled.div`
            width: 1025px;
            height: 40px;
            background-color: #fff;
        `;
        const ButtonsContainer = styled.div`
            float: right;
            margin-top: 5px;
            margin-bottom: 5px;
        `;
        const Button = styled.button`
            width: 110px;
            height: 30px;
            border: none;
            background-color: #e5e5e5;
            margin-right: 13px;
            font-size: 15px;
            color: #545454;
            cursor: pointer;
        `;
        const Button2 = Button.extend`
            margin-right: 18px;
        `;
        const Button3 = Button.extend`
            margin-right: 8px;
            color: #fff;
            background-color: #4a90e2;
        `;

        return (
            <Header>
                <ButtonsContainer>
                    <Button>Export img</Button>
                    <Button2>Save draft</Button2>
                    <Button3>Complete</Button3>
                </ButtonsContainer>
            </Header>
        );
    }
}

export default Header;