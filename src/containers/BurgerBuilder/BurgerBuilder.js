import React, { Component } from 'react';

import AuxComp from '../../hoc/AuxComp';

class BurgerBuilder extends Component {

    render() {
        return(
            <AuxComp>
                <div>Builder</div>
                <div>Builder Controls</div>
            </AuxComp>
        )
    }
}

export default BurgerBuilder;