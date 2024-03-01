import { useState } from 'react'
import './App.css'
import Profile from './Components/Profile'
import neenopalData from './Components/NeenopalJsonData'

function App() {
  const [payload, setPayload] = useState(neenopalData)

  return (
    <>
    <div className='profile-grid'>
    {payload.map((data, index) => {
      return <Profile data = {data} payload={payload} setPayload={setPayload} index={index}/>
    })}
    </div>
    </>
  )
}

export default App