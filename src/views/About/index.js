import React, { Component } from 'react';
import './About.scss';

class About extends Component {
    render() {
        return (
            <div className="container c-about-bg" id="about">
                <div className="c-about">
                    <div className="c-about__icon">
                        <img src="Icon1.png" alt="icon"/>
                    </div>
                    <div className="c-about__article">
                        <h2>a new generation of vintage bike</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae neque quo, illum consectetur fugiat dicta qui ullam obcaecati hic ratione officia enim unde optio omnis incidunt, facilis at eveniet tempora voluptatibus corrupti doloribus eos animi quisquam dolore! Dolore laboriosam, ullam iusto illum voluptas corporis, ut ipsum, debitis aspernatur, facere eaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae neque quo, illum consectetur fugiat dicta qui ullam obcaecati hic ratione officia enim unde optio omnis incidunt, facilis at eveniet tempora voluptatibus corrupti doloribus eos animi quisquam dolore! Dolore laboriosam, ullam iusto illum voluptas corporis, ut ipsum, debitis aspernatur, facere eaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;