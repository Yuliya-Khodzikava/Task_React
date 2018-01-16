import React, { Component } from 'react';

import Main from 'views/Main';
import About from 'views/About';
import Work from 'views/Work';
import Testimonial from 'views/Testimonial';
import Shop from 'views/Shop';
import Contact from 'views/Contact';
import Footer from 'views/Footer';
import './LayoutMain.scss';

class LayoutMain extends Component {
    render() {
        return (
            <div className="app">
                <Main />
                <About />
                <Work />
                <Testimonial />
                <Shop />
                <Contact />
                <Footer />

                <div id="back-top">
                  <a href="#" id="up">TOP</a>
                </div>

            </div>
        );
    }
}

export default LayoutMain;