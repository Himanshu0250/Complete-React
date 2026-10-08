import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "himanshu",
    age: 20
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4
      rounded'>Himanshu Gangwar</h1>
      <Card username = "HimanshuGangwar" btnText="click me" />
      <Card username="Himanshu" />
    </>
  )
}

export default App
