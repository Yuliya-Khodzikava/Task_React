import React, { Component } from 'react';
import './Work.scss';
import Additional from '../Work_Additional/index.js';
import Button from '../Work_Button/index.js';
import Preview from '../Work_Preview/index.js';

class Work extends Component {

    constructor(props) {
       super(props);

       this.state = {
           isOpened: false
       }

       this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler() {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    render() {

    const { isOpened } = this.state;

        return (
            <div className="container c-work" id="work">

                <Preview />

                <div onClick={this.clickHandler}>
                    <Button />
                </div>

                {isOpened ? <Additional /> : null }

            </div>
        );
    }
}

export default Work;