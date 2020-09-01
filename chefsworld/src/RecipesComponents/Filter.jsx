import React, {Component} from 'react'

class Filter extends Component {
    render() {
        return (
            <>
            <nav>
                <p>Filter by Cuisine Type: </p>
                <select name="cuisine" onChange={e => this.props.handleSelection(e)} id="map">
                    <option value="All">All</option>
                    <option value="american">american</option> 
                    <option value="asian">asian</option> 
                    <option value="british">british</option> 
                    <option value="caribbean">caribbean</option> 
                    <option value="central europe">central europe</option> 
                    <option value="chinese">chinese</option> 
                    <option value="eastern europe">eastern europe</option> 
                    <option value="french">french</option> 
                    <option value="indian">indian</option> 
                    <option value="japanese">japanese</option> 
                    <option value="kosher">kosher</option> 
                    <option value="mediterranean">mediterranean</option> 
                    <option value="mexican">mexican</option> 
                    <option value="middle eastern">middle eastern</option> 
                    <option value="nordic">nordic</option> 
                    <option value="south american">south american</option> 
                    <option value="south east asian">south east asian</option>
                    <option value="world">world</option>
                </select>
            </nav>
            </>
        )
    }
}

export default Filter 