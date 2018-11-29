import React from 'react';

import classes from './CheckoutSummary.css';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
    return(
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes good!</h1>
            <div style={{width: '100%'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                clicked={props.checkoutCancelled}
                btnType="Danger">CANCEL</Button>
            <Button 
                clicked={props.checkoutContinued}
                btnType="Success">CONTINUE</Button>
        </div>
    )
};

export default checkoutSummary;