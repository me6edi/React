import React,{useState} from 'react'

function AppHome() {
    const [Toggler, SetToggler] = useState()
  return (
    <div>
        <h1>Hello World!</h1>
        <button className='btn btn-primary' onClick={()=>{
            SetToggler(!Toggler)
        }}>
            {Toggler ? "Hide":"Show"}
        </button>
        { Toggler &&
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed natus, debitis neque obcaecati doloribus error ex atque ea, deserunt nobis aperiam tenetur, suscipit explicabo fuga at expedita facilis est?
            </p>
         }

    </div>
  )
}

export default AppHome