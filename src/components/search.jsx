import React, { useState } from 'react';

function Search({ onSelectMeal }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Fetch data from API using searchTerm
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data.meals))
      .catch((error) => console.error('Error fetching data:', error));
  };

  const handleSelectMeal = (meal) => {
    onSelectMeal(meal);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search for a meal" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map((meal) => (
          <li key={meal.idMeal} onClick={() => handleSelectMeal(meal)}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
