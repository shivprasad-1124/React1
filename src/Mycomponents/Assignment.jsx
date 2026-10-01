import React from 'react'

function Assignment() {
    let Name = ["Nagraj","Naga","Raj","RajNaga"]
    let Number = [10,20,30,40,50]
  return (
    <div>
      <ol>
        {
            Name.map((x,i)=>{
                return <li key={i}>{x}</li>
            })
        }
      </ol>
      <ol>
        {
            Number.map((x,i)=>{
                return <li key={i}>{x}</li>
            })
        }
      </ol>
    </div>
  )
}

export default Assignment
