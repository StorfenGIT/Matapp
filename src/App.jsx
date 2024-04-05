import React, { useState } from 'react';
import Search from './components/search';
import MealDetails from './components/mealdetails';
import './App.css';

function App() {
  const [selectedMeal, setSelectedMeal] = useState(null);

  return (
    <div className="App">
      <h1>Meal Search App</h1>
      <Search onSelectMeal={setSelectedMeal} />
      <MealDetails meal={selectedMeal} />
    </div>
  );
}

export default App;
