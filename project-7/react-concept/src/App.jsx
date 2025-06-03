import { useState } from 'react'

import './App.css'
import ConditionalStyle from './components/ConditionalStyle/ConditionalStyle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <ConditionalStyle></ConditionalStyle>
    </div>
  )
}

export default App
