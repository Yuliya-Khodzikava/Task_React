import React, { Component } from 'react';

//import './App.scss';

import Title from 'views/Title';
import Article from 'views/Article';

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Title />
                {Article}
            </React.Fragment>
        );
    }
}

export default App;