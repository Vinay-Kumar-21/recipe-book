import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import Header from './Components/Header';
import RecipeDetail from './Components/RecipeDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<>
          <HomePage />
        </>}>
        </Route>

        <Route path='/recipedetails/:id/:title' element={
          <>
            <RecipeDetail />
          </>
        }>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
