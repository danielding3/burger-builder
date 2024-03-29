
import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem';

const navigationItems = (props) => (
  <ul classes={classes.NavigationItems}>
    <NavigationItem
      link={"/"}
      active>
      Burger Builder
    </NavigationItem>
    <NavigationItem
      link={"/"}
      active>
      Burger Builder
    </NavigationItem>
  </ul>
);

export default navigationItems
