import React from 'react';
import classes from './BuildControl.module.css';


const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>
      {props.ingredientLabel}
    </div>
    {/* Less button */}
    <button
      disabled={props.disabledInfo}
      className={classes.Less}
      onClick={props.ingredientRemoved}>Less</button>
    {/* More button */}
    <button
      onClick = {props.ingredientAdded}
      className={classes.More}>More</button>
  </div>
)

export default buildControl;
