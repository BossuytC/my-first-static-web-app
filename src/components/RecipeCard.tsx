import React from 'react';
import { Recipe, Ingredient } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div>
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
      <p>{recipe.instructions}</p>
      <ul>
        {recipe.ingredients.map((ingredient: Ingredient, index: number) => (
          <li key={index}>
            {ingredient.amount} {ingredient.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeCard;