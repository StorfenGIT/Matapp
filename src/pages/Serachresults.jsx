import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [error, setError] = useState(null);
  const params = useParams();

  const getSearched = async (search) => {
    try {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const data = await api.json();

      if (data && data.meals) {
        setSearchedRecipes(data.meals);
        setError(null);
      } else {
        setSearchedRecipes([]);
        setError('No results found. Check your spelling!');
      }
    } catch (error) {
      setSearchedRecipes([]);
      setError('Error fetching meals');
    }
  };
  
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div>
      {error && <div className='error'>{error}</div>}
      {searchedRecipes.map((item) => (
        <Link to={`/recipe/${item.idMeal}`} key={item.idMeal}>
          <div className='imageMeals'>
            <img src={item.strMealThumb} alt="" className='mealSelection'/>
            <h4>{item.strMeal}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Searched;