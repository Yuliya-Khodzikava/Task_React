import React, { Component, PureComponent } from 'react';

//import './Title.scss';

const Temp = (props) => {
    return (<div>{props.val}</div>)
}

class SomeValue extends PureComponent {

    constructor() {
        super();
        this.state = {
            val: 1
        };
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState(()=>{
                return {val: 1};
            });
        }, 2000)
    }

    render() {

        return (
            <div>
                <Temp val={this.state.val} />
            </div>
        );
    }
}

export default SomeValue;