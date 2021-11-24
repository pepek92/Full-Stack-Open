/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import personService from "./services/persons"
import './index.css';
import Personform from './components/Personform';
import Filter from './components/Filter'
import ListPersons from './components/ListPersons';
import Notification from './components/Notification';

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState("")
  const [ newNumber, setNewNumber ] = useState("")
  const [ filter, setFilter ] = useState("")
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
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
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const personToChange = persons.find(n => n.name === newName)
        const changedPerson = { ...personToChange, number: newNumber }

        personService
        .update(personToChange.id, changedPerson)
        .then(response => {
        console.log(response)
        setPersons(persons.map(person => person.id !== changedPerson.id ? person : response.data))
        setNotification(
          `${newName} number changed`
        )
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
      .catch(error => {
        setNotification(
          `Information of ${nameObject.name} has already been removed from the server`
        )
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
    }
    }
    else {
      personService
        .create(nameObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
          setNotification(
            `Added ${newName}`
          )
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
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

  const handleDeleteButton = (person) => {
    if (window.confirm(`Delete ${person.name} ?`)) {
    const deletedPerson = persons.find(n => n.id === person.id)
    personService
      .deletePerson(person.id, deletedPerson)
      .then(response => {
        setPersons(persons.filter(p => p.id !== person.id))
        setNotification(
          `Deleted ${deletedPerson.name}`
        )
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
      .catch(error => {
        alert(
          `${deletedPerson.name} was already removed from the server`
        )
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification}/>
      <Filter onChange={handleFilterChange} value={filter}/>
      <h2>Add a new</h2>
      <Personform onSubmit={addName} onNameChange={handleNameChange} onNumberChange={handleNumberChange} name={newName} number={newNumber}/>
      <h2>Numbers</h2>
      <ListPersons persons={persons} filter={filter} deleteName={handleDeleteButton} />
    </div>
  )
}

export default App