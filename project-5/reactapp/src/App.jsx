import { useEffect, useState } from 'react'
import './App.css'
import SingleFakeData from './components/SingleFakeData/SingleFakeData';

function App() {
  const [fakeData,setFakeData] = useState([]);
  console.log(fakeData);


  useEffect(() => {
    fetch('fakeData.json')
    .then(res => res.json())
    .then(data => setFakeData(data))
  }, [])


  return (
    <div className='flex items-center justify-center grid grid-cols-3'>
      {/* <h1 className='text-3xl'>data length: {fakeData.length}</h1>  */}
      {
        fakeData.map(singleData => <SingleFakeData key = {singleData.id} singleData = {singleData}></SingleFakeData>)
      }
    </div>
  )
}

export default App
