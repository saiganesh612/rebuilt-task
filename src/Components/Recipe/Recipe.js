import { useLocation } from "react-router-dom"
import "./Recipe.css"

const Recipe = () => {
    const { state } = useLocation()

    return (
        <div className="container my-3">
            <h3 style={{ textAlign: "center" }} className="my-3">{state.RecipeName} Recipe</h3>
            <div className="row">
                <div className="col-6">
                    <img className="img" src={state.Image} alt={state.RecipeName} />
                    <p><b>{state.RecipeName}: </b> {state.Description} </p>
                </div>
                <div className="col-6">
                    <h5>Ingredients Required</h5>
                    <ul>
                        {state.Ingredients.map((ingredient, ind) => (
                            <li key={ind}>{ingredient}</li>
                        ))}
                    </ul>
                    <h5>Making process for this recipe</h5>
                    <ul>
                        {state.Process.map((step, ind) => (
                            <li key={ind}>{step}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Recipe