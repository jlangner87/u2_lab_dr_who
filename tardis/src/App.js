import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import tardis from './tardis'
import DivOne from './components/DivOne'
import DivTwo from './components/DivTwo'

function App() {
  const [capsState, setCaps] = useState('')

  const handleChange = (event) => {
    console.log('The click is working')
  }

  return (
    <div className="App">
      <div>
        <h3 onClick={handleChange}>{tardis.name}</h3>
      </div>
    </div>
  )
}

export default App
