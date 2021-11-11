/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Person = props => (
  <p>{props.name} {props.number}</p>
)

const Filter = props => (
  <div>
    filter shown with <input onChange={props.onChange} value={props.value}></input>
  </div>
)

const Personform = props => (
  <div>
    <form onSubmit={props.onSubmit}>
        <div>
          name: <input value={props.newName}
          onChange={props.onNameChange}/>
        </div>
        <div>
          number: <input value={props.newNumber}
          onChange={props.onNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  </div>
)

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState("")
  const [ newNumber, setNewNumber ] = useState("")
  const [ filter, setFilter ] = useState("")

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
  
    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilterChange} value={filter}/>
      <h2>Add a new</h2>
      <Personform onSubmit={addName} onNameChange={handleNameChange} onNumberChange={handleNumberChange} name={newName} number={newNumber}/>
      <h2>Numbers</h2>
      <div>
      {persons
        .filter(person => {
          if (person.name.toLowerCase().includes(filter.toLowerCase())) {
            return true
          }
        })
        .map(item => (
          <div>
            <Person key={item.name} name={item.name} number={item.number}/>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default App