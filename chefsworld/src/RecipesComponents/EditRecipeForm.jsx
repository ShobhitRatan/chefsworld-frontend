import React, {Component} from 'react' 
import Form from 'react-bootstrap/Form' 
import Button from 'react-bootstrap/Button'  


class EditRecipeForm extends Component {
    state = {
        recipe: { 
            id: this.props.recipe.id, 
            label: this.props.recipe.label,
            user_id: this.props.userId, 
            cuisine: this.props.recipe.cuisine,
            meal: this.props.recipe.meal,
            dish: this.props.recipe.dish,
            ingredients: this.props.recipe.ingredients,
            image_url: this.props.recipe.image_url,
            source: this.props.recipe.source,
            source_url: this.props.recipe.source_url,
            diet_labels: this.props.recipe.diet_labels,
            health_labels: this.props.recipe.health_labels,
            cautions: this.props.recipe.cautions 
        }
    } 

    handleSubmit = (e) => {
        e.preventDefault() 
        this.props.updateRecipe(this.state.recipe) 
        console.log(this.props.updateRecipe(this.state.recipe)) 
    }

   

    handleChange = (e) => {
        e.persist(); 

        this.setState(prevState => ({
            recipe: {...prevState.recipe, [e.target.name]: e.target.value}
        }))
    } 

    render() {
        return (
            <Form onSubmit={e => this.handleSubmit(e)} >
                <Form.Group controlId="formGroupLabel">
                    <Form.Label>Label</Form.Label> 
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter the recipe label" name="label" value={this.state.recipe.label} /> 
                </Form.Group>
                <Form.Group controlId="formGroupCuisine">
                    <Form.Label>Cuisine</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter the cuisine type" name="cuisine" value={this.state.recipe.cuisine} /> 
                </Form.Group> 
                <Form.Group controlId="formGroupMeal">
                    <Form.Label>Meal</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter the meal type" name="meal" value={this.state.recipe.meal} /> 
                </Form.Group> 
                <Form.Group controlId="formGroupDish">
                    <Form.Label>Dish</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter the dish type" name="dish" value={this.state.recipe.dish} /> 
                </Form.Group> 
                <Form.Group controlId="formGroupIngredients">
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control onChange={this.handleChange} as="textarea" placeholder="Please enter the recipe's ingredients" rows={10} name="ingredients" value={this.state.recipe.ingredients} /> 
                </Form.Group>
                <Form.Group controlId="formGroupImageUrl">
                    <Form.Label>Image</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter the image url of the recipe" name="image_url" value={this.state.recipe.image_url} /> 
                </Form.Group>
                <Form.Group controlId="formGroupSource">
                    <Form.Label>Source</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter the source of the recipe" name="source" value={this.state.recipe.source} /> 
                </Form.Group>
                <Form.Group controlId="formGroupSourceUrl">
                    <Form.Label>Source Url</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter the source url of the recipe" name="source_url" value={this.state.recipe.source_url} /> 
                </Form.Group>
                <Form.Group controlId="formGroupDietLabels">
                    <Form.Label>Diet Labels</Form.Label>
                    <Form.Control onChange={this.handleChange} as="textarea" placeholder="Please enter the recipe's diet labels" rows={10} name="diet_labels" value={this.state.recipe.diet_labels} />  
                </Form.Group>
                <Form.Group controlId="formGroupHealthLabels">
                    <Form.Label>Health Labels</Form.Label>
                    <Form.Control onChange={this.handleChange} as="textarea" placeholder="Please enter the recipe's health labels" rows={10} name="health_labels" value={this.state.recipe.health_labels} />  
                </Form.Group>
                <Form.Group controlId="formGroupCautions">
                    <Form.Label>Cautions</Form.Label>
                    <Form.Control onChange={this.handleChange} as="textarea" placeholder="Please enter the recipe's dietary restrictions" rows={10} name="cautions" value={this.state.recipe.cautions} />  
                </Form.Group>
                <Button variant="success" type="submit">Submit</Button> 
            </Form>
        )
    }
}

export default EditRecipeForm