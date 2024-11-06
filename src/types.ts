import './Home.scss';

export interface Ingredient {
  name: string;
  amount: string;
}

export interface Recipe {
  id: number;
  name: string;
  description: string;
  instructions: string;
  ingredients: Ingredient[];
}
