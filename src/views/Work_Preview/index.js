import React, { Component } from 'react';
import './Work_Preview.scss';

class Preview extends Component {

    render() {
        return (
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
        );
    }
}

export default Preview;