import React, { Component } from 'react';

//import './Question.scss';

function AskUser(props) {
    return <p>How are you, {props.name}?</p>;
};

const Question = <AskUser name="my friend" />;

export default Question;