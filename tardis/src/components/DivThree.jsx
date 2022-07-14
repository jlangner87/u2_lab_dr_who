

const DivThree = (props) => {
  return (
    <div><h3 onClick={() => props.handleChange()}>{props.name} </h3></div>
  )
  
  }
  
  export default DivThree