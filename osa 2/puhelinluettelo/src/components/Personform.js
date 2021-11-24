import React from 'react'

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

  export default Personform