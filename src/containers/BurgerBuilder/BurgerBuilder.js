import React, { Component } from 'react';

import AuxComp from '../../hoc/AuxComp';
import Burger from '../../components/Burger/Burger'; 
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    meat: 1.2,
    cheese: 0.6
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
                .map(ingKey => {
                    return ingredients[ingKey]
                })
                .reduce((sum, el) => {
                    return sum + el;
                }, 0)
        this.setState({purchasable: sum > 0 })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        const price_addition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + price_addition;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = Math.max(updatedCount, 0);

        const price_deduction = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - price_deduction;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(updatedIngredients);
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return(
            <AuxComp>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler} 
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}/>
            </AuxComp>
        )
    }
}

export default BurgerBuilder;