import React from 'react'

const Filter = (props) => (
    <div>
      <p>Find countries <input onChange={props.onChange} value={props.input}></input></p>
    </div>
  )

  export default Filter