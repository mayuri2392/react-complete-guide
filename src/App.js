import React, { Component } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons : [
      {name:'Sandesh', age:31},
      {name:'Mayuri', age:29},
      {name:'Gaurav', age:26}
    ]
  }

  switchNameHandler = () => {
    //console.log("Was Clicked!");
    this.setState({
      persons : [
        {name:'Sandy', age:31},
        {name:'Mayu', age:29},
        {name:'Gau', age:26}
      ],
      showPersons : false
    })
  }
 
 nameChangeHandler = (event) => {
    //console.log("Was Clicked!");
    this.setState({
      persons : [
        {name:'Sandy', age:31},
        {name:event.target.value, age:29},
        {name:'Gau', age:26}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

 
  render() {
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '10px',
      cursor : 'pointer'
    }

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
            name = {person.name}
            age = {person.age}
            />
          })}
         
        </div> 
      );
    }
    /*<Person name={this.state.persons[0].name} age={this.state.persons[0].age} click = {this.switchNameHandler}>Hobby : Quizing</Person>
    <Person name={this.state.persons[1].name}age={this.state.persons[1].age} change = {this.nameChangeHandler}/>
    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    */
    return (
      <div className="App">
        <h1>Hi, I'm React</h1>
        <p>This is really Working!</p>
        <button style = {style}
        onClick = {this.togglePersonsHandler
        }>Switch Name</button>
      {persons}
      </div>
    );

  //return React.createElement('div', { className:'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

/*import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = () => {
  const [personState, setPersonState] = useState({
    persons : [
      {name:'Sandesh', age:31},
      {name:'Mayuri', age:29},
      {name:'Gaurav', age:26}
    ],
    otherState : "Some other values"
  });

  console.log(personState);

  const switchNameHandler = () => {
    //console.log("Was Clicked!");
    setPersonState({
      persons : [
        {name:'Sandy', age:31},
        {name:'Mayu', age:29},
        {name:'Gau', age:26}
      ],
      otherState : personState.otherState
    })
  }

    return (
      <div className="App">
        <h1>Hi, I'm React</h1>
        <p>This is really Working!</p>
        <button onClick = {switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}>Hobby : Quizing</Person>
        <Person name={personState.persons[1].name}age={personState.persons[1].age}/>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );
}

export default app;*/