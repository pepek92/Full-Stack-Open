import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  const random = Math.floor(Math.random() * anecdotes.length);
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotes.map(x => 0))

  const setRandom = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  let bestIndex = 0;

  console.log(votes)

  const voteAnecdote = () => {
    const copy = [...votes]
    copy[random] += 1
    setVotes(copy)
    setSelected(selected + 1)
  }

  const mostVotes = () => {
    let mostVotes = 0;

    for(let i = 0; i < votes.length; i++) {
        if(votes[i] > mostVotes) {
            mostVotes = votes[i];
            bestIndex = i;
        }
    }
    return anecdotes[bestIndex];
}

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[random]}
      <p>has {votes[random]} votes</p>
      <Button handleClick={voteAnecdote} text="Vote"/>
      <Button handleClick={setRandom} text="Next anecdote"/>
      <h1>Anecdote with most votes</h1>
      {mostVotes()}
      <p>has {votes[bestIndex]} votes</p>
    </div>
  )
}

export default App