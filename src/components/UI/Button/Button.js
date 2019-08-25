import React from 'react';
import classes from './Button.module.css'


const button = ( props ) => (
  <button
    //btnType can be Danger or Success
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}>
    {props.children}
  </button>
);

export default button;
