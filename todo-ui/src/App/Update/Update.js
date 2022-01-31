import React from 'react'

import './Update.scss';

//update component

export class Update extends React.Component{


        constructor(props) {
            super(props);
            this.state = {
                id: this.props.id,
              Name:'',
              Description:''
              

    
            }
       
      
          }
          //input field handler
        
          changeHandler = e => {
            this.setState({[e.target.name]: e.target.value})
                }

//put method
                submitHandler = e =>{
                    //e.preventDefault()
                    console.log(this.state)
                    const idd = this.state.id
              
                    const url = 'http://localhost:3001/todos/'+idd;
                    const testing= this.state;
                    const myJSON = JSON.stringify(testing);
              const options = {
                method: 'PUT',
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
                

    render() {
        const {Name,Description} = this.state
        const id = this.props.id;
        console.log(id);
        return (
          <div>
            <form onSubmit={this.submitHandler}>
              <div>
            <input type="text" placeholder="Name"  name="Name"  value={Name} onChange={this.changeHandler}></input> </div>
            <div>
            <input type="text"  placeholder="Description" name="Description"  value={Description} onChange={this.changeHandler}></input> </div>
            <button type="submit">submit</button>

            </form>
          </div>
         
        )
      }

}