

import React from 'react'
import pic from '../images/butterfly.jpg'

function Icard({data}) {
  

  return (
    <div
      style={{
        border: '10px solid black',
        height:'500px',
        width: '500px',
        textAlign: 'center'
      }}
    >
      <img
        src={data.pic}
        height={200}
        width={200}
        style={{ borderRadius: '50%',marginTop:'25opx' }}></img>
        
      

     
      <h2>Name:{data.name}</h2>
       <h2>Roll:{data.roll}</h2>
       <h2>Branch:{data.branch}</h2>
       <h2>College:{data.college}</h2>
    
      

    </div>
  )
}

export default Icard


