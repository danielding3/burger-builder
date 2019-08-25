//Burger that we're rendering to the screen
import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = ( props ) => {
  //_____ Key:Value pair to array of ingredients conversion _____
  // Returns array of keys
  let transformedIngredients = Object.keys(props.ingredients)
  //meat salad cheese bacon
    .map((ingKey) => {
      // Array argument takes length of created array
      // gets correct length so it maps ingredient the correct amount of times
      return [...Array(props.ingredients[ingKey])]
      //Array of undefined elements of correct number of elements
        .map((_ , i) => {
          return <BurgerIngredient key={ingKey + i} type={ingKey}/>
        });
    })
      //now turning it from an array of arrays to just an array.
     .reduce((arr, el) => {
       return arr.concat(el)
     }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (


    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );

};

export default burger;
