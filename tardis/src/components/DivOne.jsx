import DivTwo from "./DivTwo"


const DivOne = (props) => {
return (
  <div> <DivTwo handleChange={props.handleChange} handleChange2={props.handleChange2} name={props.name}></DivTwo>
  </div>
)}

export default DivOne