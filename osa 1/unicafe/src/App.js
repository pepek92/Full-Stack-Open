import React, { useState } from 'react'
import './App.css';

const Header = (props) => {
  return (
  <div>
    <h1>{props.header}</h1>
  </div>
  )
}

const StatisticLine = (props) => {
  if (props.text === "positive") {
    return (
      <div>
      <tr>
      <td width="60">{props.text}</td>
      <td>{props.value} %</td>
      </tr>
      </div>
    )
  } else {
  return (
    <div>
    <tr>
      <td width="60">{props.text}</td>
      <td>{props.value}</td>
    </tr>
    </div>
  )
  }
}

const Statistics = (props) => {
  if (props.all > 0) {
  return (
    <div>
      <tbody>
        <table>
          <StatisticLine text="good" value ={props.good} />
          <StatisticLine text="neutral" value ={props.neutral} />
          <StatisticLine text="bad" value ={props.bad} />
          <StatisticLine text="average" value ={props.avg} />
          <StatisticLine text="positive" value ={props.pos} />
        </table>
      </tbody>
    </div>
  )
  }
  else {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const avg = (good - bad) / all
  const pos = good / (all / 100)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <div>
        <Header header="give feedback"></Header>
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
        <Header header="statistics"></Header>
        <Statistics good={good} bad={bad} neutral={neutral} all={all} avg={avg} pos={pos}/>
      </div>
    </div>
  )
}

export default App