import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [count, SetCount] = useState(0);
  const [name, setName] = useState('Programming Shikhbo');

    useEffect(() => {
      console.log('When loaded')
    }, [])


  const updateCounter = () =>{
      const newName = name + 'Coding';
      setName(newName)
  }
  return (
    <div> 
          <h1>Steps: {count}</h1>
          <button onClick={updateCounter}>Steps</button>
    </div>
  )
}

export default App
