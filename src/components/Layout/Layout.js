import React from 'react';

import AuxComp from '../../hoc/AuxComp';

const layout = (props) => {
    return(
        <AuxComp>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main>
                { props.children }
            </main>
        </AuxComp>
    )
}

export default layout;