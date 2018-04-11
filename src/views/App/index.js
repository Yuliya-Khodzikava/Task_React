import React, { Component } from 'react';

//import './App.scss';

import GreetingText from 'views/GreetingText';
import BeautifulDay from 'views/BeautifulDay';
import Question from 'views/Question';
import SomeValue from 'views/SomeValue';

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <GreetingText />
                {BeautifulDay}
                {Question}
                <SomeValue />
            </React.Fragment>
        );
    }
}

export default App;