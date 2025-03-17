import React, { useEffect, useState } from 'react';

function UseEffect() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        document.title = count;
        setCalculation(() => count * 2);
    }, [count]);

    return (
        <div>
            <p>Lorem ipsum dolor sit amet {count} consectetur adipisicing elit. Necessitatibus, maiores?</p>
            <p>Calculation: {calculation}</p>
            <button 
                className='btn btn-primary' 
                onClick={() => setCount((cal) => cal + 1)}>
                Count
            </button>
        </div>
    );
}



export default UseEffect;
