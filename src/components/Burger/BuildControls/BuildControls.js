import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

//array of objects
const controls = [
  { ingredientLabel: 'Salad', type: 'salad' },
  { ingredientLabel: 'Bacon', type: 'bacon' },
  { ingredientLabel: 'Cheese', type: 'cheese' },
  { ingredientLabel: 'Meat', type: 'meat' },
];

const buildControls = (props)  => (
  <div className={classes.BuildControls}>
    <p className={classes.PriceBox}>Current Price:<strong> ${props.price.toFixed(2)}</strong></p>
    {controls.map((ctrl) =>
      <BuildControl
        key={ctrl.ingredientLabel}
        type={ctrl.type}
        ingredientLabel={ctrl.ingredientLabel}
        ingredientAdded={() => props.ingredientAdded(ctrl.type)}
        ingredientRemoved={() => props.ingredientRemoved(ctrl.type)}
        disabledInfo={props.disabledInfo[ctrl.type]}
      />
    )}
    <button
      className={classes.OrderButton}
      disabled={!props.purchaseable}
      onClick={props.ordered}
    >
      ORDER NOW</button>
  </div>
);

export default buildControls;
