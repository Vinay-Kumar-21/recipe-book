import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<>
          <HomePage />
        </>}>
        </Route>

        <Route path='/recipedetails/:id' element={
          <>
            <h1>Recipe Details page</h1></>
        }>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
