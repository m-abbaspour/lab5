import React, { Component } from 'react'
import '../Style.css'
export class Table extends Component {
  render() {
    return (
      <>
      <h1>List of Albums</h1>
         <table>
            <tr>
                <th>Photo ID</th>
                <th>Photo Title</th>
                <th>Thumbnail</th>
                <th>Delete</th>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Germany</td>
            </tr>
        </table> 
      </>
    )
  }
}

export default Table