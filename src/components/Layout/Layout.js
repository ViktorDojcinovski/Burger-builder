import React from 'react';

import AuxComp from '../../hoc/AuxComp';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => {
    return(
        <AuxComp>
            <Toolbar />
            <main className={classes.Content}>
                { props.children }
            </main>
        </AuxComp>
    )
}

export default layout;