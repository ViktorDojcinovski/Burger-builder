import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        orderForm: {

        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price
        }
    }

    render() {
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact details:</h4>
                <form>
                    <Input inputtype="input" type="text" name="name" placeholder="Your Name"/>
                    <Input inputtype="input" type="email" name="email" placeholder="Your Email"/>
                    <Input inputtype="input" type="text" name="street" placeholder="Street and Number"/>
                    <Input inputtype="input" type="text" name="postal" placeholder="Postal Code"/>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        );
    }
};

export default ContactData;