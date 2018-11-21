import React from 'react';

import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop';
import AuxComp from '../../../hoc/AuxComp';

const modal = (props) => {
    return (
        <AuxComp>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-50vh)',
                opacity: props.show ? '1' : '0'
            }}>
                {props.children}
            </div>
        </AuxComp>
    )
};

export default modal;