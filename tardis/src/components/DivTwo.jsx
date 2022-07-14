import DivThree from "./DivThree"


const DivTwo = (props) => {
return (
  <div>
  <DivThree handleChange={props.handleChange} handleChange2={props.handleChange2} name={props.name}></DivThree>
  <DivThree handleChange={props.handleChange} handleChange2={props.handleChange2} name={props.name}></DivThree>
  </div>
)

}

export default DivTwo