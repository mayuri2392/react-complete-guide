import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons : [
      {id:'01', name:'Sandesh', age:31},
      {id:'02', name:'Mayuri', age:29},
      {id:'03', name:'Gaurav', age:26}
    ]
  }
 
 nameChangedHandler = (event, id) => {
    //console.log("Was Clicked!");
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons : persons } );

  }

  deletePersonHandler = (personIndex) => {
   // const persons = this.state.persons.slice();
   const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons});
  }

   togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

 
  render() {
    let persons = null;
    let btnClass = '';

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click = {() => this.deletePersonHandler(index)}
            name = {person.name}
            age = {person.age}
            key = {person.id}
            changed = {(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div> 
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red); //classes = ['red'];
    }
    if(this.state.persons.length <=1){
      assignedClasses.push(classes.bold); //classes = ['red', 'bold'];
    }


    return (
      <div className={classes.App}>
        <h1>Hi, I'm React</h1>
        <p className={assignedClasses.join(' ')}>This is really Working!</p>
        <button 
        className={btnClass}
        onClick = {this.togglePersonsHandler
        }>Toggle Persons</button>
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