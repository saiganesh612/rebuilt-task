import { useState, useEffect } from "react"
import Seed from "../../seed"
import "./Recipes.css"
import { useNavigate } from "react-router-dom"
import "../../App.css"

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setRecipes(Seed())
    }, [])

    const redirectTo = (recipe) => {
        navigate(`/recipe/${recipe.Id}`, {
            state: recipe
        })
    }

    return (
        <>
            <div className="container App">
                <h3>List of Recipes</h3>
                <div className='row justify-content-evenly'>
                    {recipes.map(recipe => (
                        <div key={recipe.Id} className="col-3 card m-3" onClick={() => redirectTo(recipe)}>
                            <img src={recipe.Image} alt={recipe.RecipeName} className="card-img-top" />
                            <div className='card-body'>
                                <p className="card-text">{recipe.RecipeName}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Recipes