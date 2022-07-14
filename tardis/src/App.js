import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import tardis from './tardis'
import DivOne from './components/DivOne'
import DivTwo from './components/DivTwo'
import DivThree from './components/DivThree'

function App() {
  const [caps, setCaps] = useState(false)
  const [lowerName, setName] = useState('')
  const handleChange = (event) => {
    setCaps((current) => !current)
    if (setCaps !== true) {
      console.log(tardis.name.toUpperCase())
    } else if (setCaps !== false) {
      console.log(tardis.name)
    }

    console.log('The button has been clicked! Caps state is:', caps)
  }

  return (
    <div className="App">
      <div>
        <DivOne
          handleChange={handleChange}
          lowerName={lowerName}
          name={tardis.name}
        ></DivOne>
      </div>
    </div>
  )
}

export default App

// {tardis.name.toUpperCase()}

//https://bobbyhadz.com/blog/react-toggle-boolean-state
