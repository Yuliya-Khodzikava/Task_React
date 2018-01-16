import React, { Component } from 'react';

import './Testimonial.scss';

class Testimonial extends Component {
    render() {
        return (
            <div className="c-testimonial container">
                <div className="row">
                        <div className="c-testimonial__items">
                            <img src="icon-twitter.png" alt="twitter_icon"/>
                            <div className="c-testimonial__info"><span>AOD New York @aod</span> / 35 min</div>
                            <p className="c-testimonial__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, dolore, recusandae. Quo, temporibus doloribus, consequuntur eum exercitationem, neque molestiae assumenda tenetur veniam quas fuga ratione.</p>
                        </div>
                        <ul className="c-testimonial__navigation">
                                <li className="current"><a href=""></a></li>
                                <li className=""><a href=""></a></li>
                                <li className=""><a href=""></a></li>
                        </ul>
                </div>
            </div>
        );
    }
}

export default Testimonial;