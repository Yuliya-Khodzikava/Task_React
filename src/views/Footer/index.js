import React, { Component } from 'react';

import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer className="c-footer container">
                <div className="row">
                    <div className="c-footer__address cols col-4">
                        <p>
                        <span>AOD New York</span><br/>
                        2250 Lexington Avenue<br/>
                        New York, NY 10035 - info@domain.com
                        </p>
                    </div>

                    <div className="c-footer__social cols col-8">
                        <a href="/"><img src="c-footer_logo1.png" alt="twitter-logo" /></a>
                        <a href="/"><img src="c-footer_logo2.png" alt="facebook-logo" /></a>
                        <a href="/"><img src="c-footer_logo3.png" alt="pinterest-logo" /></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;