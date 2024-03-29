import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  //receive ingredients in an object format
  const ingredientSummary = Object.keys(props.ingredients)
    .map((ing, i) => {
      return (
        <li key={ing + 2*i}>
          <span style={{textTransform:'capitalize'}}>{ing}</span>: {props.ingredients[ing]}
        </li>
      );
    })

  //<li> Salad: 1 </li>
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong> </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>

  );
};

export default orderSummary;
