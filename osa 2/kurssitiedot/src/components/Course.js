const Header = ({ header }) => {
    return (
      <h2>{header}</h2>
    )
  }
  
  const Total = ({ parts }) => {
    const totalExercises = parts.map(part => part.exercises)
    const total = totalExercises.reduce( (previous, current) => previous + current)
    return <p><b>total of {total} exercises</b></p>
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part => 
          <Part key={part.name} part={part} />
        )}
        <Total parts={parts}/>
      </div>
    )
  }
  
  const Course = ({ course }) => {
    return (
      <div>
        <Header header={course.name}/>
        <Content parts={course.parts}/>
      </div>
    )
  }

  export default Course;