import React, { useState } from 'react';
import Home from './pages/Home';
import AddRecipe from './pages/AddRecipe';
import { Recipe } from './types';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const addRecipe = (recipe: Recipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, recipe]);
  };

  return (
    <Routes>
      <Route path="/" element={<Home recipes={recipes} />} />
      <Route path="/add-recipe" element={<AddRecipe addRecipe={addRecipe} />} />
    </Routes>
  );
};

export default App;
