import React from 'react' 
import Recipe from './Recipe' 

const FilteredRecipesContainer = (props) => {
    return (
        <ul>
            {props.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} updateRecipe={props.updateRecipe} deleteRecipe={props.deleteRecipe} addComment={props.addComment}  increaseLikes={props.increaseLikes} deleteComment={props.deleteComment} />)}  
        </ul>
    )
}

export default FilteredRecipesContainer