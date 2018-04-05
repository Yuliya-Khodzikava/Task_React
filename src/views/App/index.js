import React, { Component } from 'react';

import './App.scss';

import WholeSvg from 'views/SVGImage_1/WholeSvg';
import WholeSvg_2 from 'views/SVGImage_2/WholeSvg_2';
import WholeSvg_3 from 'views/SVGImage_3/WholeSvg_3';
import WholeSvg_4 from 'views/SVGImage_4/WholeSvg_4';
import WholeSvg_5 from 'views/SVGImage_5/WholeSvg_5';
import WholeSvg_6 from 'views/SVGImage_6/WholeSvg_6';
import WholeSvg_7 from 'views/SVGImage_7/WholeSvg_7';
import WholeSvg_8 from 'views/SVGImage_8/WholeSvg_8';
import WholeLabelTypeText from 'views/LabelTypeText_SVG/WholeLabelTypeText';
import WholeLabelTypeImage from 'views/LabelTypeImage_SVG/WholeLabelTypeImage';

class App extends Component {
        constructor() {
            super();
                this.state = {
                    x0: 0,
                    y0: 0,
                    vx: 500,
                    vy: 500
            };
            this.enlargeHandleClick = this.enlargeHandleClick.bind(this);
            this.reduceHandleClick = this.reduceHandleClick.bind(this);
            this.toLeftHandleClick = this.toLeftHandleClick.bind(this);
            this.toRightHandleClick = this.toRightHandleClick.bind(this);
        }
        enlargeHandleClick(){
            this.setState({
                x0: this.state.x0 + 10,
                y0: this.state.y0 + 10,
                vx: this.state.vx - 10,
                vy: this.state.vy - 10,
                whole_value: this.state.x0 + " " + this.state.y0 + " " + this.state.vx + " " + this.state.vy
            })
        }
        reduceHandleClick(){
            this.setState({
                x0: this.state.x0 - 10,
                y0: this.state.y0 - 10,
                vx: this.state.vx + 10,
                vy: this.state.vy + 10,
                whole_value: this.state.x0 + " " + this.state.y0 + " " + this.state.vx + " " + this.state.vy
            })
        }
        toLeftHandleClick(){
            this.setState({
                x0: this.state.x0 - 10,
                y0: this.state.y0,
                vx: this.state.vx - 10,
                vy: this.state.vy,
                whole_value: this.state.x0 + " " + this.state.y0 + " " + this.state.vx + " " + this.state.vy
            })
        }
        toRightHandleClick(){
            this.setState({
                x0: this.state.x0 + 10,
                y0: this.state.y0,
                vx: this.state.vx + 10,
                vy: this.state.vy,
                whole_value: this.state.x0 + " " + this.state.y0 + " " + this.state.vx + " " + this.state.vy
            })
        }

    render() {
        return (
            <React.Fragment>

                <svg width="100%" height="100%" viewBox={this.state.whole_value}>
                    <WholeSvg />
                    <WholeSvg_2 />
                    <WholeSvg_3 />
                    <WholeSvg_4 />
                    <WholeSvg_5 />
                    <WholeSvg_6 />
                    <WholeSvg_7 />
                    <WholeSvg_8 />
                    <WholeLabelTypeText />
                    <WholeLabelTypeImage />
                </svg>

                <button onClick={this.reduceHandleClick}>&#8722;</button>
                <button onClick={this.enlargeHandleClick}>&#43;</button>

                <button onClick={this.toLeftHandleClick}>&#8592;</button>
                <button onClick={this.toRightHandleClick}>&#8594;</button>

            </React.Fragment>
        );
    }
}

export default App;