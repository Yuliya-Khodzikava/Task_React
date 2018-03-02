import React, { Component } from 'react';
import styled, { ThemeProvider } from "styled-components";

import variables from '../../resources/styles/variables';

import ItemsList from 'views/ItemsList';
import Footer from 'views/Footer';

const Wrapper = styled.div`
`;

const products = {
    items: [
        "Alltistart (ATS Soft Starters)",
        "Altivar",
        "Harmony Pushbuttons",
        "Industrial PLCs",
        "Colonnes de Signalisation",
        "Harmony XVM",
        "Preventa",
        "Zelio",
        "Logic",
        "Industrial Modicon",
        "Time",
        "XVM",
        "Monolithic",
        "Relais",
        "Switches",
        "Magelis",
        "Timing",
        "Tower light",
        "Pression",
        "30mm Pushbuttons",
        "Convertisseur",
        "Photoelectric",
        "Sensors",
        "Architectures"
    ]
};
const rows = [
    [' > Electrical Car Charging', ' > Installation Material and System', ' > Installation Material and System'],
    [' > Electrical Protection and Control', ' > Light Switches and Electrical Sockets', ' > Home Automation'],
    [' > Emergency Lighting', ' > Network Infrastructure and Connectivity', ' > Home Security'],
    ['', ' > Uninterruptible Power Supply (UPS)', '']
];

class App extends Component {

    render() {
        return (
            <Wrapper>

                <ItemsList products={products} />
                <Footer rows={rows}/>

            </Wrapper>
        );
    }
}

export default App;