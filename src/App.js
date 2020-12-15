import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons : [
      {id:'01', name:'Sandesh', age:31},
      {id:'02', name:'Mayuri', age:29},
      {id:'03', name:'Gaurav', age:26}
    ]
  }

  /*switchNameHandler = () => {
    //console.log("Was Clicked!");
    this.setState({
      persons : [
        {name:'Sandy', age:31},
        {name:'Mayu', age:29},
        {name:'Gau', age:26}
      ],
      showPersons : false
    })
  }*/
 
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

    /*this.setState({
      persons : [
        {name:'Sandy', age:31},
        {name:event.target.value, age:29},
        {name:'Gau', age:26}
      ]
    })*/
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
    const style = {
      backgroundColor : 'green',
      color : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '10px',
      cursor : 'pointer',
      ':hover' : {
        backgroundColor : 'lightgreen',
        color : 'black'
      }
    }

    let persons = null;
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
      style.backgroundColor = 'red';
      style[':hover'] ={
        backgroundColor :'salmon',
        color : 'black'
      }
    }
    /*<Person name={this.state.persons[0].name} age={this.state.persons[0].age} click = {this.switchNameHandler}>Hobby : Quizing</Person>
    <Person name={this.state.persons[1].name}age={this.state.persons[1].age} changed = {this.nameChangedHandler}/>
    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    */

    //let classes = ['red','bold'].join(' ');

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red'); //classes = ['red'];
    }
    if(this.state.persons.length <=1){
      classes.push('bold'); //classes = ['red', 'bold'];
    }


    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi, I'm React</h1>
        <p className={classes.join(' ')}>This is really Working!</p>
        <button 
        style = {style}
        onClick = {this.togglePersonsHandler
        }>Toggle Persons</button>
      {persons}
      </div>
      </StyleRoot>
    );

  //return React.createElement('div', { className:'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);

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