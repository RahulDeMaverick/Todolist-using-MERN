import React from 'react'

import './input.scss';

//import axios  from 'axios';

//input field component

export class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          Name:'',
          Description:''

        }
  
      }
    //text handler
      changeHandler = e => {
  this.setState({[e.target.name]: e.target.value})
      }
//submit handler
      submitHandler = e =>{
      //e.preventDefault()
      console.log(this.state)

      const url = 'http://localhost:3001/todos';
      const testing= this.state;
      const myJSON = JSON.stringify(testing);
const options = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  body: myJSON
};

fetch(url, options)
  .then(response => {
    console.log(response.status);
  });             
      }

    //rendering text box and submit button
      render() {
        const {Name,Description} = this.state
        return (
          <div>
            <form onSubmit={this.submitHandler}>
              <div>
            <input type="text" placeholder="Name"  name="Name"  value={Name} onChange={this.changeHandler}></input> </div>
            <div>
            <input type="text"  placeholder="Description" name="Description"  value={Description} onChange={this.changeHandler}></input> 
            <input type="datetime-local"  name="datetime"  onChange={this.changeHandler}></input> 
            
            </div>
            <button type="submit">submit</button>

            </form>
          </div>
         
        )
      }
}