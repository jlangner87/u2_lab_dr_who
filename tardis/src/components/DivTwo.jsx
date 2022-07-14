import DivThree from "./DivThree"


const DivTwo = (props) => {
return (
  <div>
  <DivThree handleChange={props.handleChange} lowerName={props.lowerName} name={props.name}></DivThree>
  <DivThree handleChange={props.handleChange} lowerName={props.lowerName} name={props.name}></DivThree>
  </div>
)

}

export default DivTwo