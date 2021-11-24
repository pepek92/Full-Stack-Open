import React from 'react'

const ListPersons = (props) => {

  const handleClick = (nameObject) => {
    props.deleteName(nameObject)
  }
  
  return (
    <div>
      {props.persons.map((x, i) => 
        x.name.toLowerCase().includes(props.filter.toLowerCase()) ? 
        <li key={i}>{x.name} {x.number}
        <button onClick={() => handleClick(x)}>delete</button>
        </li> : console.log("Numeroa ei löydy"))}
    </div>
  )
}

export default ListPersons