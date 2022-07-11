import React, { Component } from 'react'
import axios from 'axios'
import '../Style.css'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        photoID: '',
        PhotoTitle: ''
      }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/photos', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
  render() {
    const{photoID, PhotoTitle} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <label>Enter the photo ID</label>
                <input type='text' name='photoID' placeholder='Photo ID' value={photoID} onChange={this.changeHandler}></input>
            </div>
            <div>
                <label>Enter the photo Title</label>
                <input type='text' name='PhotoTitle' placeholder='Photo Title' value={PhotoTitle} onChange={this.changeHandler}></input>
            </div>
            <button type='Submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form