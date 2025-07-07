import { useReducer } from 'react'
import './App.css'


function App() {
  const reducer = () =>{

  }
  useReducer(reducer, 10);

  return (
    <div>
      <button> Increment </button>
      <button> Decrement </button>
    </div>
  )
}

export default App
