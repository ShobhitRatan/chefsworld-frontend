import React, {Component} from 'react'; 
import axios from 'axios'
import ReactPaginate from 'react-paginate' 
import SearchBar from './SearchBar';
import FilteredRecipesContainer from './FilteredRecipesContainer';
import {Redirect} from 'react-router-dom'
import Filter from './Filter';
import RecipeForm from './RecipeForm'
import Button from 'react-bootstrap/Button'
const recipes_url = "https://chefsworld-backend.herokuapp.com/recipes" 
const comments_url = "https://chefsworld-backend.herokuapp.com/comments" 
class RecipesContainer extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            offset: 0, 
            recipes: [],
            perPage: 20, 
            currentPage: 0, 
            searchTerm: "", 
            cuisine: "All",  
            comments: [],
            display: false, 
        }
        this.handlePageClick = this.handlePageClick.bind(this); 
    }
    handleDisplay = () => {
        const val = !this.state.display 
        this.setState({
            display: val 
        })
    } 

    componentDidMount() {
        this.receivedData() 
    }

    receivedData = () => {
        axios.get(recipes_url) 
        .then(res => {
            const data = res.data;
            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage), 
                recipes: data 
            })
        })
    }

    cuisineFilter = () => {
        let {recipes, cuisine} = this.state 
        return cuisine === "All" ? recipes : recipes.filter(recipe => recipe.cuisine === cuisine) 
    } 
    
    
    filteredRecipes = () => {
        let {searchTerm} = this.state   
        let filteredRecipes = this.cuisineFilter().filter(recipe => recipe.label.toLowerCase().includes(searchTerm.toLowerCase()) 
        || recipe.meal.toLowerCase().includes(searchTerm.toLowerCase()) 
        || recipe.dish.toLowerCase().includes(searchTerm.toLowerCase())) 
        return filteredRecipes
    } 

    slicedRecipes = () => {
        return this.filteredRecipes().slice(this.state.offset, this.state.offset + this.state.perPage)  
    }

    pageCount = () => {
        let pageCount = Math.ceil(this.filteredRecipes().length / this.state.perPage) 
        return pageCount ? pageCount : undefined 
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected; 
        const offset = selectedPage * this.state.perPage; 
        this.setState({
            currentPage: selectedPage, 
            offset: offset 
        }, () => {
            this.receivedData()
        })
    }

    handleSearch = (e) => {
        this.setState({
            searchTerm: e.target.value 
        })
    }

    handleSelection = (e) => {
        let {name, value} = e.target 
        this.setState({
            [name]: value 
        })
    }

    // handleRecipePatch = (recipe) => {
    //     recipe.user_id = this.props.userId 
    //     let fetchOptions = {
    //         method: recipe.id ? 'PATCH' : 'POST', 
    //         headers: {
    //             'Content-Type': 'application/json', 
    //             Accept: 'application/json' 
    //         }, 
    //         body: JSON.stringify(recipe) 
    //     }

    //     if (recipe.id) {
    //         fetch(`${recipes_url}/${recipe.id}`, fetchOptions) 
    //         .then(res => res.json()) 
    //         .then(newRecipe => {
    //             let newRecipes = this.state.recipes.map(recipe => {
    //                 if (recipe.id === newRecipe.id) {
    //                     return newRecipe 
    //                 }
    //                 else {
    //                     return recipe 
    //                 }
    //             })
    //             this.setState({
    //                 recipes: newRecipes 
    //             })
    //         })
    //     } 
    //     else {
    //         fetch(recipes_url, fetchOptions) 
    //         .then(res => res.json()) 
    //         .then(json => {
    //             const newRecipes = [...this.state.recipes, json] 
    //             this.setState({
    //                 recipes: newRecipes 
    //             }) 
    //         })
    //     }
    // }

    addRecipe = (recipe) => {
        recipe.user_id = this.props.userId 
        fetch(recipes_url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json' 
            },
            body: JSON.stringify(recipe) 
        })
        .then(res => res.json()) 
        .then(json => {
            const newRecipes = [...this.state.recipes, json] 
            this.setState({
                recipes: newRecipes 
            })
        })
    }

    updateRecipe = recipe => {
        recipe.user_id = this.props.userId 
        fetch(`${recipes_url}/${recipe.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json' 
            },
            body: JSON.stringify(recipe) 
        })
        .then(res => res.json()) 
        .then(newRecipe => {
            let newRecipes = this.state.recipes.map(recipe => {
                if (recipe.id === newRecipe.id) {
                    return newRecipe
                }
                else {
                    return recipe 
                }
            })
            this.setState({
                recipes: newRecipes 
            })
        }) 
    }

    deleteRecipe = (id) => {
        fetch(`${recipes_url}/${id}`, {
            method: "DELETE"
        })
        .then(res => {
            const newRecipes = this.state.recipes.filter(recipe => recipe.id !== id) 
            this.setState({
                recipes: newRecipes  
            })
        })
         
    } 


    addComment = (comment) => {
        comment.user_id = this.props.userId 
        fetch(comments_url, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                Accept: 'application/json' 
            },
            body: JSON.stringify(comment) 
        })
        .then(res => res.json()) 
        .then(data => {
            const newRecipes = [...this.state.recipes] 
            newRecipes.find(recipe => recipe.id === comment.recipe_id).comments.push(data) 
            this.setState({recipes: newRecipes})  
        })
    }

    increaseLikes = (comment) => {
        fetch(`${comments_url}/${comment.id}`, {
            method: "PATCH", 
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json" 
            },
            body: JSON.stringify({
                likes: comment.likes + 1
            })
        })
        .then(res => res.json()) 
        .then(res => {
            const newRecipes = [...this.state.recipes]
            const recipeFound = newRecipes.find(recipe => recipe.id === comment.recipe.id) 
            const foundComment = recipeFound.comments.find(comment => comment.id === res.id) 
            foundComment.likes = res.likes 
            this.setState({
                recipes: newRecipes 
            })
        })
    }

    
    deleteComment = (id) => {
        fetch(`${comments_url}/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json()) 
        .then(this.removeDeletedComment) 
    }

    removeDeletedComment = ({id, recipe}) => {
        const newRecipes = [...this.state.recipes] 
        const foundRecipe = newRecipes.find(r => r.id === recipe.id) 
        const commentIndex = foundRecipe.comments.findIndex((comment) => comment.id === id) 
        console.log(commentIndex) 
        foundRecipe.comments.splice(commentIndex, 1) 
        this.setState({
            recipes: newRecipes 
        })
    }

    render() {
        console.log(this.filteredRecipes()) 
        return (
            <div>
            {this.props.user ? 
            <div>
                <h1>Recipes</h1> 
                <ReactPaginate 
                    previousLabel={"prev"} 
                    nextLabel = {"next"} 
                    breakLabel = {"..."} 
                    breakClassName = {"break-me"} 
                    pageCount = {this.pageCount()} 
                    marginPagesDisplayed = {2} 
                    pageRangeDisplayed = {5} 
                    onPageChange = {this.handlePageClick} 
                    containerClassName = {"pagination"} 
                    subContainerClassName = {"pages pagination"} 
                    activeClassName = {"active"} /> 
                
                {this.state.display ? <RecipeForm addRecipe={this.addRecipe} /> : null} 
                <Button variant="primary" onClick={this.handleDisplay}>Add a Recipe</Button> 
                <SearchBar searchTerm={this.state.searchTerm} handleChange={this.handleSearch} /> 
                <Filter handleSelection={this.handleSelection} /> 
                <FilteredRecipesContainer recipes={this.slicedRecipes()} updateRecipe={this.updateRecipe} deleteRecipe={this.deleteRecipe} addComment={this.addComment} increaseLikes={this.increaseLikes} deleteComment={this.deleteComment}/> 
                <ReactPaginate 
                    previousLabel={"prev"} 
                    nextLabel = {"next"} 
                    breakLabel = {"..."} 
                    breakClassName = {"break-me"} 
                    pageCount = {this.pageCount()} 
                    marginPagesDisplayed = {2} 
                    pageRangeDisplayed = {5} 
                    onPageChange = {this.handlePageClick} 
                    containerClassName = {"pagination"} 
                    subContainerClassName = {"pages pagination"} 
                    activeClassName = {"active"} /> 
            </div>
        
            : 
            <Redirect to="/login"/> 
            }
        </div> 
        )
    }
}

export default RecipesContainer