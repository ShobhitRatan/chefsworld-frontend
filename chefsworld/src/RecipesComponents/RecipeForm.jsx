import React, {Component} from 'react'
import Form from 'react-bootstrap/Form' 
import Button from 'react-bootstrap/Button' 

class RecipeForm extends Component {
    state = {
        label: '',
        cuisine: '',
        meal: '',
        dish: '',
        ingredients: '',
        image_url: '',
        source: '',
        source_url: '',
        diet_labels: '',
        health_labels: '',
        cautions: ''
    }

    handleSubmit = (e) => {
        e.preventDefault() 
        this.props.addRecipe({
            label: e.target.label.value,
            user_id: this.props.userId, 
            cuisine: e.target.cuisine.value,
            meal: e.target.meal.value,
            dish: e.target.dish.value,
            ingredients: e.target.ingredients.value,
            image_url: e.target.image_url.value, 
            source: e.target.source.value, 
            source_url: e.target.source_url.value,
            diet_labels: e.target.diet_labels.value, 
            health_labels: e.target.health_labels.value, 
            cautions: e.target.cautions.value 
        })
        this.setState({
            label: '',
            cuisine: '',
            meal: '',
            dish: '',
            ingredients: '',
            image_url: '',
            source: '',
            source_url: '',
            diet_labels: '',
            health_labels: '',
            cautions: ''
        })
    }

    

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    render() {
        const {label, cuisine, meal, dish, ingredients, image_url, source, source_url, diet_labels, health_labels, cautions} = this.state 
        return (
            <Form onSubmit={e => this.handleSubmit(e)} >
                <Form.Group controlId="formGroupLabel">
                    <Form.Label>Label</Form.Label> 
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter the recipe label" name="label" value={label} /> 
                </Form.Group>
                <Form.Group controlId="formGroupCuisine">
                    <Form.Label>Cuisine</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter the cuisine type" name="cuisine" value={cuisine} /> 
                </Form.Group> 
                <Form.Group controlId="formGroupMeal">
                    <Form.Label>Meal</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter the meal type" name="meal" value={meal} /> 
                </Form.Group> 
                <Form.Group controlId="formGroupDish">
                    <Form.Label>Dish</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter the dish type" name="dish" value={dish} /> 
                </Form.Group> 
                <Form.Group controlId="formGroupIngredients">
                    <Form.Label>Ingredients</Form.Label>
                    <Form.Control onChange={this.handleChange} as="textarea" placeholder="Please enter the recipe's ingredients" rows={10} name="ingredients" value={ingredients} /> 
                </Form.Group>
                <Form.Group controlId="formGroupImageUrl">
                    <Form.Label>Image</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter the image url of the recipe" name="image_url" value={image_url} /> 
                </Form.Group>
                <Form.Group controlId="formGroupSource">
                    <Form.Label>Source</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter the source of the recipe" name="source" value={source} /> 
                </Form.Group>
                <Form.Group controlId="formGroupSourceUrl">
                    <Form.Label>Source Url</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter the source url of the recipe" name="source_url" value={source_url} /> 
                </Form.Group>
                <Form.Group controlId="formGroupDietLabels">
                    <Form.Label>Diet Labels</Form.Label>
                    <Form.Control onChange={this.handleChange} as="textarea" placeholder="Please enter the recipe's diet labels" rows={10} name="diet_labels" value={diet_labels} />  
                </Form.Group>
                <Form.Group controlId="formGroupHealthLabels">
                    <Form.Label>Health Labels</Form.Label>
                    <Form.Control onChange={this.handleChange} as="textarea" placeholder="Please enter the recipe's health labels" rows={10} name="health_labels" value={health_labels} />  
                </Form.Group>
                <Form.Group controlId="formGroupCautions">
                    <Form.Label>Cautions</Form.Label>
                    <Form.Control onChange={this.handleChange} as="textarea" placeholder="Please enter the recipe's dietary restrictions" rows={10} name="cautions" value={cautions} />  
                </Form.Group>
                <Button variant="success" type="submit">Submit</Button> 
            </Form>
        )
    }
}

export default RecipeForm