import React from 'react';
import classes from './NavigationItem/NavigationItem';

const navigationItem = (props) => (
  <li classname={classes.NavigationItem}>
    <a
      href={props.link}
      className={props.active ? classes.active : null}>
      {props.children}
    </a>
  </li>
);

export default navigationItem
