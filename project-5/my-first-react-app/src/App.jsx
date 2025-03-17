import { useState } from 'react'
import './App.css'
import Services from './components/Services/Services';
import ExploreDyData from './components/ExploreDynamicData/ExploreDyData';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Services/>
        <ExploreDyData name='Abul' age='20' profession = 'developer'/>
        <ExploreDyData name='Rony' age='30' profession = 'developer'/>
        <ExploreDyData name='jakir' age='50' profession = 'developer'/>
        <ExploreDyData name='Hasib' age='15' profession = 'developer'/>
    </>
  )
}

export default App;
