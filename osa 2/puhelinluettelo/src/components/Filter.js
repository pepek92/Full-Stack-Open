import React from 'react'

const Filter = props => (
    <div>
      filter shown with <input onChange={props.onChange} value={props.value}></input>
    </div>
  )

export default Filter