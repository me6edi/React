import React, { useState } from 'react'

function ConditionalStyle() {

  const [isSpecial, setIsSpecial] = React.useState(true);

    const toggleButton = () => {
      setIsSpecial(!isSpecial);
    }

    const commonStyle = {
        padding: '10px',
        border: '1px solid black',
        margin: '5px',
        backgroundColor: isSpecial ? 'green' : 'black',
        color: isSpecial ? 'black': 'Green',
        borderRadius: isSpecial? '10px' : '0px',
        fontSize: isSpecial ? '30px' : '16'
    }

    const specialText = {
      textDecoration: 'underline',
      fontWeight: 'bold', 
      color: 'white'
    }

    const normalText = {
        fontWeight: 'bold',
        fontSize: '20px',
        color: 'white'
    }
  return (
    <div>
        <button onClick={toggleButton}>
          Make It {isSpecial ? 'Normal' : 'Special'}
          </button>
        <div style={commonStyle}>
            This is a {isSpecial ? <span style={specialText}>Special</span> : <span style={normalText}>Normal</span>} Style...
        </div>
    </div>
  )
}

export default ConditionalStyle