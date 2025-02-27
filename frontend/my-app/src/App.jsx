import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTask from './components/add_task'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <AddTask />
    </div>
    </>
  )
}

export default App
