import React, { Component } from 'react';

import HoleDiameter16 from 'views/HoleDiameter/HoleDiameter16';
import HoleDiameter22 from 'views/HoleDiameter/HoleDiameter22';
import HoleDiameter30 from 'views/HoleDiameter/HoleDiameter30';

class HoleDiameterMain extends Component {

    render() {
        return (
            <React.Fragment>
                <HoleDiameter16 />
                <HoleDiameter22 />
                <HoleDiameter30 />
            </React.Fragment>
        );
    }
}

export default HoleDiameterMain;