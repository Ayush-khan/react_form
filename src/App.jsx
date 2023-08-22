import React, { useState } from 'react'
import { useEffect } from 'react'
const url = 'http://localhost:5000/api/tasks'
const App = () => {
  const[data,setData] = useState([])
  const fetching = async()=>{
    const response = await fetch(url)
    const jsonData = await response.json()
      setData(jsonData.taskList)
  }
  useEffect(() => {
    fetching()
  }, [])
  return (
    <section>
      {data.map((item)=>{
        const {id,type,name,placeholder} = item
        return(
          <div className='container' key={id}>
            <input type={type} name={name} id="name" placeholder={placeholder} />
          </div>
        )
      })}
    </section>
    
    
  )
}

export default App