import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyButton from './MyButton'
import Sign from './Sign'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Sign title='STEM'> </Sign>
        <p class="text-5xl text-gray-900 dark:text-white italic">Made Simple</p>
        <br></br>
        <br></br>
        <MyButton title="Book Now"></MyButton>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
