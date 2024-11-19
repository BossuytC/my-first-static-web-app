import React, { useState } from 'react';
import Home from './pages/Home';
import AddRecipe from './pages/AddRecipe';
import { Recipe } from './types';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  //environment variable 
  const BACKGROUND_COLOR = process.env.REACT_APP_BACKGROUND_COLOR || '#ffffff';

  console.log('Background color:', BACKGROUND_COLOR);

  const addRecipe = (recipe: Recipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, recipe]);
  };

  return (
    <div style={{ backgroundColor: BACKGROUND_COLOR, minHeight: '100vh' }}>
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/add-recipe" element={<AddRecipe addRecipe={addRecipe} />} />
      </Routes>
    </div>
  );
};

export default App;
