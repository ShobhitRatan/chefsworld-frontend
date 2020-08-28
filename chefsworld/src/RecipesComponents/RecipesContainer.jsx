import React, {Component} from 'react';
import axios from 'axios' 
import ReactPaginate from 'react-paginate' 
const recipes_url = "http://localhost:4000/recipes" 
const comments_url = "http://localhost:4000/comments" 
class RecipesContainer extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            offset: 0, 
            recipes: [], 
            perPage: 5, 
            currentPage: 0, 
            searchTerm: "", 
            display: false, 
            comments: []
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

    
}