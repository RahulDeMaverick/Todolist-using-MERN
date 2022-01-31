import React from 'react'

import './Todo.scss';

import { Update } from '../Update/Update';

//todo js displays todo items

export class Todos extends React.Component {
    

    constructor(props) {
        super(props);   
        this.state={
            showUpdate:false,
            id:""
        }
        this.sample= this.sample.bind(this);
        this.sample1 = this.sample1.bind(this);
     
   
    }


//delete method
    sample2(t) {
        this.setState({showUpdate:true});
        fetch('http://localhost:3001/todos/' + t, {
  method: 'DELETE',
})
.then(res => res.text()) // or res.json()
.then(res => console.log(res))
window.location.reload(false);
    }


// passing value to update component
    sample1(t) {
        this.setState({showUpdate:true,id:t});
    }

    
 
//mark as complete function
      complete(c){

        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }

      }

      //retrive data

    sample(p) {
        
        let btnval = [...document.getElementsByClassName(p+"p1")];
        let btnval1 = [...document.getElementsByClassName(p+"p2")];
        let btnval2 = [...document.getElementsByClassName(p+"p3")];
        let cr = [...document.getElementsByClassName(p+"createdate")];
        let ud = [...document.getElementsByClassName(p+"updatedate")];
        let ccp = [...document.getElementsByClassName(p+"cmp")];

               console.log(btnval)
               for(let i in btnval)
               {
                
                btnval[i].removeAttribute("hidden");
            }
            for(let i in btnval1)
            {        
             btnval1[i].removeAttribute("hidden");
         }
         for(let i in btnval2)
         {
          
          btnval2[i].removeAttribute("hidden");
         }
          for(let i in cr)
          {
           
           cr[i].removeAttribute("hidden");
       }
       for(let i in ud)
       {
        ud[i].removeAttribute("hidden");
    }
    for(let i in ccp)
    {
     ccp[i].removeAttribute("hidden");
 }
      

        }

        

    //rendering todos

    render() {
     
        const todoElements = this.props.todos.map((c, i) => <div id="myDIV" className = "divstyle">
            <h1 className={c._id + "btn"} onClick={() =>
            this.sample(c._id)} key={i}>{c.Name} </h1> 
            <p className={c._id + "p1"} hidden={true}>{c.Description}</p>
            <p className={c._id + "createdate"} hidden={true}>{c.createdDate}</p>
            <p className={c._id + "updatedate"} hidden={true}>{c.lastModifiedDate}</p>
            <button 
           onClick={() =>this.sample1(c._id)}
    
            className={c._id + "p2"}  hidden={true}  >update</button> 
                <button onClick={() =>
                    this.sample2(c._id)}  className={c._id + "p3"} hidden={true}>delete</button>  

                    <button onClick={() => this.complete(c._id)} className={c._id + "cmp"} hidden={true}>complete</button> 
                    
                    
                     </div>);
        
        return (
            <div className="todo-container">TODOs
                <ul>
                    {todoElements}
                    {this.state.showUpdate?<Update id={this.state.id}> </Update>:null}
                </ul>
            </div>
        );
    }
}