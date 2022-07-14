import DivTwo from "./DivTwo"


const DivOne = (props) => {
return (
  <div> <DivTwo handleChange={props.handleChange} lowerName={props.lowerName} name={props.name}></DivTwo>
  </div>
)}

export default DivOne