import React from 'react';

function MealDetails({ meal }) {
  return (
    <div>
      {meal && (
        <div>
          <h2>{meal.strMeal}</h2>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <p>{meal.strInstructions}</p>
          <p>Category: {meal.strCategory}</p>
          <p>Area: {meal.strArea}</p>
        </div>
      )}
    </div>
  );
}

export default MealDetails;
