import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 82},
      {name: "Manu", age: 22},
      {name: "Pat", age: 25}
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   console.log('was clicked')
  //   this.setState({persons: [
  //     {name: newName, age: 82},
  //     {name: "greg", age: 22},
  //     {name: "paul", age: 30}
  //   ]})
  // }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
      {name: 'Max', age: 82},
      {name: event.target.value, age: 22},
      {name: "paul", age: 30}
    ]})
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.name}
            />
          })}
        {/* <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'timmy')}
        changed={this.nameChangeHandler}/>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}>My Hobbies: Racing
        </Person> */}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hello</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
