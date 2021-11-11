import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Filter from './components/Filter'

const App = () => {
  const [ filter, setFilter ] = useState('')
  const [ countries, setCountries] = useState([]) 

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <Filter onChange={handleFilterChange} input={filter}/>
      <Countries countriesList={countries} filter={filter}></Countries>
    </div>
  );
}

export default App;
