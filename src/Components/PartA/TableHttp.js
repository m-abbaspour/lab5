import React, { Component } from 'react'
import axios from 'axios'

export class TableHttp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errorMessage: ''
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            this.setState({posts: response.data})
        })
        .catch(error => {
            this.setState({errorMessage: 'Error retrieving data'})
        })
    }
    
    deleteRow(id){
        axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then (response =>{
            this.setState({posts: this.state.posts.filter(row=> row.id !== id)}) 
        })
        .catch (error => {
            this.setState({errorMessage: 'Error deleting data'})
        })
     }
    
  render() {
    var{posts, errorMessage} = this.state
    return (
        <>
        <h1>{errorMessage}</h1>
        <h1>List of Albums</h1>
           <table>
            <thead>
              <tr>
                  <th>Photo ID</th>
                  <th>Photo Title</th>
                  <th>Thumbnail</th>
                  <th>Delete</th>
              </tr>
            </thead>
            <tbody>               
                {
                    posts.length?
                    posts.map(post => 
                        <tr key={(post.id)}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>
                                <img src={post.thumbnailUrl}/>      
                            </td>
                            <td>
                                <button onClick={this.deleteRow(post.id)}>Delete</button>
                            </td>
                        </tr>):
                    null
                }
              </tbody>
          </table> 
        </>
      )
  }
}
