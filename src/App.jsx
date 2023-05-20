import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './components/Device/Device' 
import DeviceDetails from './components/DeviceDetails/DeviceDetails'
import Watch from './components/watch/Watch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Device name="iPhone" price="130000"></Device>
    <Device name="Readmi-Note pro Max" price="24000"></Device>
   <Watch></Watch>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
    </>
  )
}

export default App
