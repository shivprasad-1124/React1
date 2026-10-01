import React from 'react'

function Assign() {
    let Num = [1,2,3,4,5,6,7,8,9]
  return (
    <div>
        <ol>{
            Num.map((x)=>{
                if(x%2==0){
                return <li>{x}</li>
                }
            })          
        }
        </ol>
        <ul>{
            Num.map((x)=>{
                if(x%2!=0){
                return <li>{x}</li>
                }
            })          
        }
        </ul>

      
    </div>
  )
}

export default Assign

