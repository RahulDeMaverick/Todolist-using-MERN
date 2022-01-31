
import React from 'react';
import './App.scss';

import { Navbar } from './Navbar/Navbar';
import {Todos} from './Todos/Todo';
import { Input } from './Input/Input';


//app component
//hiding inut component
export class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      showinput:false,
      todos:[

       
      ]
    };

  }
//create function calls create on onclick event
  create(){
    this.setState({showinput:true});
}
//fetch get
componentDidMount(){
  

fetch("http://localhost:3001/todos").then((response) =>response.json()).then((todos) => {
this.setState({todos});

});

}
  render(){
  
    return (
  
    <div>
      <span></span> 
<Navbar createHandler={this.create.bind(this)}> </Navbar>
<Todos todos={this.state.todos}></Todos>
{this.state.showinput?<Input> </Input>:null}
    </div>
    );
    
  }
}


