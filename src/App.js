import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Recipes from "./Components/Recipes/Recipes"
import Recipe from "./Components/Recipe/Recipe"

function App() {
  return (
    <Router>
      <Routes>
        <Route key={1} path="/" element={<Recipes />} />
        <Route key={2} path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </Router>
  );
}

export default App;
