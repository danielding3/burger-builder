import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 1,
  meat: 2,
  bacon: 0.7,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat : 0,
      salad : 0,
      cheese : 0,
      bacon : 0,
    },
    totalPrice: 4,
    purchaseable:false,
    purchaseMode: false,
  };

  updatePurchaseState (ingredients) {
    //Sums the quantity of each ingredient
    const sum = Object.keys(ingredients)
    .map((ing) => {
      return ingredients[ing];
    })
    //reduces to sum all the numbers
    .reduce((acc,element) => {
      return acc + element;
    },0);
    //True if at least one ingredient
    this.setState({purchaseable: sum > 0});
  }

  orderBtnHandler = () => {
    this.setState({purchaseMode : true});
  }

  addIngredientHandler = (type) => {
    // Adding ingredients
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition= INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + priceAddition;
    this.setState({totalPrice : newPrice, ingredients: updatedIngredients});
        //Checks to see if burger is empty and disables purchase button if it is
    this.updatePurchaseState(updatedIngredients);
  }
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice - priceDeduction;
    this.setState({totalPrice : newPrice, ingredients: updatedIngredients});
    //Checks to see if burger is empty and disables purchase button if it is
    this.updatePurchaseState(updatedIngredients);
  }
  //cancels purchase
  purchaseCancelHandler = () => {
    this.setState({purchaseMode: false});
  }
  purchaseContinueHandler = () => {
    alert('You continue!');
  }

  render () {
    //Checks ingredients, and returns false if quantity = 0 (to disable 'less' button)
    const disabledInfo = {...this.state.ingredients};
    // eslint-disable-next-line
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    // disabledInfo is {salad: true, meat: false, etc} now


    return (
      <Aux>
        <Modal show={this.state.purchaseMode} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            //cancel
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice}

          />
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          ordered={this.orderBtnHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
