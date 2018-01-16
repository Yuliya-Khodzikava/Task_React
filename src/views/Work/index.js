import React, { Component } from 'react';
import './Work.scss';

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

    const Preview = () =>
    <div>
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
            <button onClick={this.clickHandler}>Discover our works</button>
        </div>
    </div>

    const Additional = () =>
    <div>
        <div className="row c-work__item c-work__item--background">
            <div className="c-work__description cols col-5">
                <img src="c-work_icon-2.png" alt="icon" />
                <h2>la boriosa</h2>
                <p className="c-work__paragraph">Hic neque, voluptate consectetur ex quo pariatur! Officiis. Hic neque, voluptate consectetur ex quo pariatur! Officiis, facilis facere quod animi suscipit quas, error, amet ad ex, harum quia ullam! Eaque asperiores inventore dolores maiores praesentium iure, commodi debitis earum eveniet soluta adipisci deserunt laborum voluptas ipsum quibusdam. Mollitia suscipit eaque porro esse aut quae delectus debitis perspiciatis dicta, incidunt architecto beatae et commodi in sed quam quasi exercitationem.</p>
            </div>
            <div className="c-work__picture c-work__picture--right-float cols col-7">
                <img src="c-work_pic-2.png" alt="image" />
            </div>
        </div>
        <div className="row c-work__item">
            <div className="c-work__picture cols col-3">
                <img src="c-work_pic-3.png" alt="image" />
            </div>
            <div className="c-work__description c-work__description--margin cols col-6">
                <img src="c-work_icon-3.png" alt="icon" />
                <h2>vintage oliva</h2>
                <p className="c-work__paragraph-3">Mollitia suscipit eaque porro esse aut quae delectus debitis perspiciatis dicta, incidunt architecto beatae et commodi in sed quam quasi exercitationem. Hic neque, voluptate consectetur ex quo pariatur! Officiis. Hic neque, voluptate consectetur ex quo pariatur! Officiis, facilis facere quod animi suscipit quas, error, amet ad ex, harum quia ullam! Eaque asperiores inventore dolores maiores praesentium iure, commodi debitis earum eveniet soluta adipisci deserunt laborum voluptas ipsum quibusdam. Mollitia suscipit eaque porro esse aut quae delectus debitis perspiciatis dicta, incidunt architecto beatae et commodi in sed quam quasi exercitationem.</p>
            </div>
            <div className="c-work__picture cols col-3">
                <img src="c-work_pic-4.png" alt="image" />
            </div>
        </div>
    </div>

    return (
       <div className="container c-work" id="work">
          <Preview />
          {isOpened ? <Additional /> : null }
       </div>
    )
    }
}

export default Work;