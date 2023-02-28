// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends  Component {
  state = {
    persons: [
    {name:"Mudassar", age:28},
    {name:"Muzammal", age:30},
    {name:"Mubashar", age:50}
    ],
    otherState: "Some other values",
    showPerson: false
  }
  switchname=(new_name) => {
    console.log("This is working "+new_name);

    this.setState({
      persons:  [
        {id:0,name:new_name, age:289},
        {id:1,name:"Muzammal", age:30},
        {id:2,name:"Mubashar", age:50}
        ]
    })
  }
  showThePerson=()=>{
    const doesShow=this.showPerson;
    this.setState(
      this.state.showPerson=== false ? {showPerson:true}:{showPerson:false}
    )
    console.log("This is working ");

  }
  changeNameHandler=(event) => {
    console.log("This is working "+event.target.value);

    this.setState({
      persons:  [
        {name:event.target.value, age:289},
        {name:event.target.value, age:30},
        {name:event.target.value, age:50}
        ]
    })
  }
  deletePersonHandler=(personIndex) =>{
    //  const persons=this.state.persons;
    const persons=[...this.state.persons];
     persons.splice(personIndex,1);
     this.setState({persons: persons})
    
  }
  render(){
    let person=null;
    if(this.state.showPerson){
      person=<div>
      {this.state.persons.map((person,index) =>{
        return <Person Click={()=>this.deletePersonHandler(index)} name={person.name} age={person.age} /> 
      })}
</div>
    }
  return (
    <div className="App">
      <h1>A O A this is my First React Application</h1>
      <p>This is the discription of the React App</p>
      <button onClick={this.showThePerson}>Switch Names</button>
      {person}
       </div>
  );
  }
  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'A O A this is my First React Application'));
}

export default App;
