import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
      persons: [
        {name: "Max", age: 82},
        {name: "Manu", age: 22},
        {name: "Pat", age: 25}
      ],
      otherState: 'some other value'
    });

    console.log(personsState);
    

    const switchNameHandler = () => {
      console.log('was clicked')
      setPersonsState({persons: [
        {name: "testing", age: 82},
        {name: "Manu", age: 22},
        {name: "Pat", age: 30}
      ]
    })
    }

    return (
      <div className="App">
        <h1>Hello</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My Hobbies: Racing</Person>
      </div>
    );
  }

export default app;

