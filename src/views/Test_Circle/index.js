//import React, { Component } from 'react';
//
//var x0 = 470;
//var y0 = 375;
//
//var rad = 72;
//
//var pathRad = rad + 11;
//
//var values = {
//
//    xvalue1: Math.round(x0 + pathRad * Math.cos(14.5)),
//    yvalue1: Math.round(y0 + pathRad * Math.sin(14.5)),
//
//    xvalue2: Math.round(x0 + pathRad * Math.cos(13.6)),
//    yvalue2: Math.round(y0 + pathRad * Math.sin(13.6)),
//
//};
//
//var whole_value = "M" + values.xvalue1 + " " + values.yvalue1 + " A " + pathRad + " " + pathRad + ", 0, 1, 1, " + values.xvalue2 + " " + values.yvalue2 + " L " + x0 + " " + y0;
//
//
//class Test_Circle extends Component {
//
//    render() {
//
//        return (
//            <React.Fragment>
//
//                <circle r={rad} fill="#f5a623" cx={x0} cy={y0}/>
//
//                <path id="arc" d={whole_value} fill="none"/>
//
//                <text x="80" fill="#fff">
//                    <textPath href="#arc">
//                        label
//                    </textPath>
//                </text>
//
//                <text x="210" fill="#fff">
//                    <textPath href="#arc">
//                        label
//                    </textPath>
//                </text>
//
//                <text x="345" fill="#fff">
//                    <textPath href="#arc">
//                        label
//                    </textPath>
//                </text>
//
//
//
//
//                <text className="push-text" x="443" y="382" fill="#fbfbfb">PUSH</text>
//
//            </React.Fragment>
//        );
//    }
//}
//
//export default Test_Circle;