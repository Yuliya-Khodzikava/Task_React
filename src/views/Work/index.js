import React, { Component } from 'react';
import './Work.scss';

import Additional from '../Additional/index.js';

class Work extends Component {

    constructor(props) {
        super(props);
        this.state = {class: "closed"};

        this.press = this.press.bind(this);
    }
  
   press(){
      let className = (this.state.class === "closed") ? "opened" : "closed";
      this.setState({class: className});
   }

    render() {
        return (
            <div className="container c-work" id="work">
                <div className="row c-work__item">
                    <div className="c-work__picture cols col-7">
                        <img src="c-work_pic-1.png" alt="image" />
                    </div>
                    <div className="c-work__description cols col-5">
                        <img src="c-work_icon-1.png" alt="icon" />
                        <h2>vintage oliva</h2>
                        <p>Hic neque, voluptate consectetur ex quo pariatur! Officiis. Hic neque, voluptate consectetur ex quo pariatur! Officiis, facilis facere quod animi suscipit quas, error, amet ad ex, harum quia ullam! Eaque asperiores inventore dolores maiores praesentium iure, commodi debitis earum eveniet soluta adipisci deserunt laborum voluptas ipsum quibusdam. Mollitia suscipit eaque porro esse aut quae delectus debitis perspiciatis dicta, incidunt architecto beatae et commodi in sed quam quasi exercitationem.</p>
                    </div>
                </div>
                <div className="c-work__button">
                    <button onClick={this.press} >Discover our works</button>
                </div>
                <div className={this.state.class}>
                     <Additional />
                </div>
            </div>
        );
    }
}

export default Work;