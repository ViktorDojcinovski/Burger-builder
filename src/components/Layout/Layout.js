import React from 'react';

import AuxComp from '../../hoc/AuxComp';
import classes from './Layout.css';

const layout = (props) => {
    return(
        <AuxComp>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={classes.Content}>
                { props.children }
            </main>
        </AuxComp>
    )
}

export default layout;