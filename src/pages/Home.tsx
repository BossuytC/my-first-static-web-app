import React from 'react';
import { Recipe } from '../types';
import { Link } from 'react-router-dom';
import '../styles/Home.scss';

interface HomeProps {
  recipes: Recipe[];
}

const Home: React.FC<HomeProps> = ({ recipes }) => {
  return (
    <div className="container">
      <h1>Recipe Overview</h1>
      <Link to="/add-recipe">Add a New Recipe</Link>
      {recipes.length === 0 ? (
        <p>No recipes available</p>
      ) : (
        <ul className="recipeList">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="recipeItem">
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
              <p>{recipe.instructions}</p>
              <h4>Ingredients:</h4>
              <ul>
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient.name}>
                    {ingredient.amount} {ingredient.name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
