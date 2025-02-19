import React, {useEffect, useState} from 'react';

function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(()=> {
    document.title = count;

    setTimeout(()=> {
        setCount(count + 1)
    }, 1000)

    })
  return (
    <div>
        <p>Lorem ipsum dolor sit amet {count} consectetur adipisicing elit. Necessitatibus, maiores?</p>
    </div>
  )
}

export default UseEffect