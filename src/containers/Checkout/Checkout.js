import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0 
    }

    componentWillMount() { 
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let p of query.entries()) {
            if(p[0] === 'price') {
                price = p[1]
            } else {
                ingredients[p[0]] = +p[1]; 
            }
        }
        this.setState({ingredients: ingredients, price: price});
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return(
            <div>
                <CheckoutSummary 
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                    ingredients={this.state.ingredients} />
                <Route 
                    path={this.props.match.path + "/contact-data"} 
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.price} {...props}/>)} />
            </div>
        )
    }
}   

export default Checkout;