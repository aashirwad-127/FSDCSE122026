import React from 'react'

function Card({movies}) {
    
  
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
            src={movies.pic}
            height={200}
            width={200}
            style={{ borderRadius: '50%',marginTop:'25opx' }}></img>
            
          
    
         
          <h2>name:{movies.name}</h2>
           <h2>rating:{movies.rating}</h2>
           <h2>genre:{movies.genre}</h2>
           <h2>year:{movies.year}</h2>
           <h2>director:{movies.director}</h2>
        
          
    
        </div>
  ) 
}

export default Card