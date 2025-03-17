import React, { useEffect, useState } from 'react';
import DataReturn from './DataReturn';
function FetchDate() {
    const [SaveData, Setdate] = useState(null)
    useEffect(()=>{
            setTimeout(()=> {
                fetch("https://jsonplaceholder.typicode.com/users")
                .then((res) => res.json())
                .then((data) => Setdate(data))
            }, 2000)
    }, [])
  return (
    <div>
        <div className='card'>
            {SaveData &&
                SaveData.map((data)=>{
                    return <DataReturn name={data.name} email = {data.email} id = {data.id}/>
                })
            }
        </div>
    </div>
  )
}

export default FetchDate