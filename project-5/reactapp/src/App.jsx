import { useEffect, useState } from 'react'
import './App.css'
import Singleuserdata from './components/Singleuserdata/Singleuserdata'

function App() {

  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setAllData(data))
  }, [])

  return (
    <div className='grid grid-cols-3'> 
          {
             allData.map(singleData => <Singleuserdata  key = {singleData.id} singleData={singleData}></Singleuserdata>)
          }
    </div>
  )
}

export default App
