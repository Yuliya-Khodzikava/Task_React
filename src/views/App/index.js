import React, { Component } from 'react';
import styled, { ThemeProvider } from "styled-components";

import variables from '../../resources/styles/variables';

import ItemsList from 'views/ItemsList';
import Footer from 'views/Footer';

const Wrapper = styled.div`
`;

const propsValues = {
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

class App extends Component {

    render() {
        return (
            <Wrapper>

                <ItemsList data={propsValues}/>
                <Footer />

            </Wrapper>
        );
    }
}

export default App;