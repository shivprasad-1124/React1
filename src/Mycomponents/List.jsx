import React from 'react'

function List() {
    let FET = ["HTML","CSS","JS","ReactJs"]
  return (
    <div>
        <ul>
            {
            FET.map((x)=>{
                return <li>{x}</li>
            })
        }
        </ul>
      
    </div>
  )
}

export default List
