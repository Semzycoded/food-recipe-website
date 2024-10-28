import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/home'
import RecipeDetails from './pages/recipeDetails'
import RecipePage from './pages/recipe'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipeDetails/:id' element={<RecipeDetails/>}/>
        <Route path="/recipes" element={<RecipePage/>}/>
      </Routes>

    <Footer/>

    </div>
  )
}

export default App
