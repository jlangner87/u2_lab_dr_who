import logo from './logo.svg'
import './App.css'
import tardis from './tardis'
import DivOne from './components/DivOne'
import DivTwo from './components/DivTwo'

function App() {
  return (
    <div className="App">
      <div>
        <h3>{tardis.name}</h3>
      </div>
    </div>
  )
}

export default App
