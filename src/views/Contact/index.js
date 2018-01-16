import React, { Component } from 'react';

import './Contact.scss';

class Contact extends Component {
    render() {
        return (
            <div className="c-contact container" id="contact">
                <div className="row">
                    <img src="Logosmall.png" alt="logo"/>
                    <p className="c-contact__text">Stay on the saddle!</p>
                    <input type="text" name="subscription" placeholder="Enter your email..." />
                    <button>go</button>
                </div>
            </div>
        );
    }
}

export default Contact;