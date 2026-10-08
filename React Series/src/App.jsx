import { useState } from 'react'



import Tea from './tea'

function App() {
  const username = "Himanshu Gangwar"

  return (
    <>
   <Tea/>
   <h1>tea aur react {username}</h1>
   <p>Test paragraph</p>
   </>
  )
}

export default App
