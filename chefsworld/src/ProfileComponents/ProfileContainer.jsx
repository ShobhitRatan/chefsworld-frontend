import React, {Component} from 'react'  
import Button from 'react-bootstrap/Button' 
import AddressForm from './AddressForm' 
import Address from './Address'
import WorkExperienceForm from './WorkExperienceForm'
import WorkExperience from './WorkExperience'
import EducationForm from './EducationForm'
import Education from './Education'
import AwardForm from './AwardForm'
import Award from './Award'
const addresses_url = "http://localhost:4000/addresses" 
const experiences_url = "http://localhost:4000/work_experiences" 
const educations_url = "http://localhost:4000/educations"
const awards_url = "http://localhost:4000/awards"

class ProfileContainer extends Component {
    state = {
        displayAddress: false, 
        displayExperience: false, 
        displayEducation: false, 
        displayAward: false 
    }

    handleDisplayAddress = () => {
        const val = this.state.displayAddress 
        this.setState({
            displayAddress: !val 
        })
    }

    handleDisplayExperience = () => {
        const val = this.state.displayExperience
        this.setState({
            displayExperience: !val 
        })
    }

    handleDisplayEducation = () => {
        const val = this.state.displayEducation 
        this.setState({
            displayEducation: !val 
        })
    }

    handleDisplayAward = () => {
        const val = this.state.displayAward 
        this.setState({
            displayAward: !val 
        })
    }

    addAddress = (address) => {
        fetch(addresses_url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json', 
                'Authorization': this.props.token
            },
            body: JSON.stringify(address) 
        })
        .then(res => res.json()) 
        .then(newlyCreatedAddress => {
            this.props.addOneAddress(newlyCreatedAddress)
        })
    }

    addExperience = (work_experience) => {
        fetch(experiences_url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': this.props.token 
            },
            body: JSON.stringify(work_experience) 
        })
        .then(res => res.json()) 
        .then(newlyCreatedExperience => {
            this.props.addOneExperience(newlyCreatedExperience)
        })
    } 

    addEducation = (education) => {
        fetch(educations_url, {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json', 
                Accept: 'application/json', 
                'Authorization': this.props.token
            },
            body: JSON.stringify(education) 
        })
        .then(res => res.json()) 
        .then(newlyCreatedEducation => {
            this.props.addOneEducation(newlyCreatedEducation) 
        })
    }

    addAward = (award) => {
        fetch(awards_url, {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json', 
                Accept: 'application/json', 
                'Authorization': this.props.token 
            },
            body: JSON.stringify(award) 
        })
        .then(res => res.json()) 
        .then(newlyCreatedAward => {
            this.props.addOneAward(newlyCreatedAward) 
        })
    }

    updateAddress = address => {
        fetch(`${addresses_url}/${address.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': this.props.token
            },
            body: JSON.stringify(address)  
        })
        .then(res => res.json()) 
        .then((updatedAddressObject) => {
            this.props.updateOneAddress(updatedAddressObject)
        })
    }

    updateExperience = work_experience => {
        fetch(`${experiences_url}/${work_experience.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': this.props.token 
            },
            body: JSON.stringify(work_experience) 
        })
        .then(res => res.json()) 
        .then(updatedWorkExperienceObject => {
            this.props.updateOneExperience(updatedWorkExperienceObject) 
        })
    }

    updateEducation = education => {
        fetch(`${educations_url}/${education.id}`, {
            method: "PATCH", 
            headers: {
                'Content-Type': 'application/json', 
                Accept: 'application/json', 
                'Authorization': this.props.token 
            }, 
            body: JSON.stringify(education) 
        })
        .then(res => res.json()) 
        .then(updatedEducationObject => {
            this.props.updateOneEducation(updatedEducationObject)
        })
    }

    updateAward = award => {
        fetch(`${awards_url}/${award.id}`, {
            method: "PATCH", 
            headers: {
                'Content-Type': 'application/json', 
                Accept: 'application/json', 
                'Authorization': this.props.token 
            },
            body: JSON.stringify(award)
        })
        .then(res => res.json()) 
        .then(updatedAwardObject => {
            this.props.updateOneAward(updatedAwardObject) 
        })
    }

    deleteAddress = (id) => {
        fetch(`${addresses_url}/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization': this.props.token
            }
        })
        .then(res => res.json()) 
        .then((deletedAddress) => {
            this.props.deleteAddressFromUser(id) 
        })
    }

    deleteExperience = (id) => {
        fetch(`${experiences_url}/${id}`, {
            method: "DELETE", 
            headers: {
                'Authorization': this.props.token 
            }
        })
        .then(res => res.json()) 
        .then(deletedWorkExperience => {
            this.props.deleteWorkExperienceFromUser(id) 
        })
    }

    deleteEducation = (id) => {
        fetch(`${educations_url}/${id}`, {
            method: "DELETE", 
            headers: {
                'Authorization': this.props.token 
            }
        })
        .then(res => res.json()) 
        .then(deletedEducation => {
            this.props.deleteEducationFromUser(id) 
        })
    }

    deleteAward = (id) => {
        fetch(`${awards_url}/${id}`, {
            method: "DELETE", 
            headers: {
                'Authorization': this.props.token 
            }
        })
        .then(res => res.json()) 
        .then(deletedAward => {
            this.props.deleteAwardFromUser(id) 
        })
    }

    render() {
        console.log(this.state.user) 
        return (
            <div>
                <h2>{this.props.user.name}&apos;s Profile</h2>
                {this.state.displayAddress ? <AddressForm addAddress={this.addAddress} token={this.props.token} /> : null } 
                <Button variant="primary" onClick={this.handleDisplayAddress}>Add an Address</Button>  
                {this.props.user.addresses.map(address => <Address address={address} key={address.id} updateAddress={this.updateAddress} token={this.props.token} deleteAddress={this.deleteAddress} />)} 
                {this.state.displayEducation ? <EducationForm addEducation={this.addEducation} token={this.props.token} /> : null} 
                <Button variant="primary" onClick={this.handleDisplayEducation}>Add Education</Button> 
                {this.props.user.educations.map(education => <Education education={education} key={education.id} updateEducation={this.updateEducation} deleteEducation={this.deleteEducation} token={this.props.token} />)} 
                {this.state.displayExperience ? <WorkExperienceForm addExperience={this.addExperience} token={this.props.token} /> : null} 
                <Button variant="primary" onClick={this.handleDisplayExperience}>Add Work Experience</Button> 
                {this.props.user.work_experiences.map(work_experience => <WorkExperience work_experience={work_experience} key={work_experience.id} updateExperience={this.updateExperience} deleteExperience={this.deleteExperience} token={this.props.token} />)}
                {this.state.displayAward ? <AwardForm addAward={this.addAward} token={this.props.token} /> : null} 
                <Button variant="primary" onClick={this.handleDisplayAward}>Add Award</Button> 
                {this.props.user.awards.map(award => <Award award={award} key={award.id} updateAward={this.updateAward} deleteAward={this.deleteAward} token={this.props.token} />)}  
            </div>
        ); 
    }
}

export default ProfileContainer 