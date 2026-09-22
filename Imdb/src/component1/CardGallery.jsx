import React from 'react'
import Card from './Card';

function CardGallery() {
    const movies = [
  {
    pic: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    name: "Deadpool & Wolverine",
    rating: 7.6,
    genre: "Action, Comedy",
    year: 2024,
    director: "Shawn Levy"
  },
  {
    pic: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    name: "The Batman",
    rating: 7.8,
    genre: "Action, Crime",
    year: 2022,
    director: "Matt Reeves"
  },
  {
    pic: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    name: "The Dark Knight",
    rating: 9.0,
    genre: "Action, Crime",
    year: 2008,
    director: "Christopher Nolan"
  },
  {
    pic: "https://image.tmdb.org/t/p/w500/6ELJEzQJ3Y45HczvreC44X2jZPy.jpg",
    name: "Avengers: Endgame",
    rating: 8.4,
    genre: "Action, Adventure",
    year: 2019,
    director: "Anthony Russo, Joe Russo"
  }
];
  return (
    <div style={{border:'2px solid red',display:'flex'}}>
      {
        movies.map((ele)=>(
            <div>
                <Card movies={ele}/>
            </div>

        ))

       }
        
       

    </div>
        
    
  )
}

export default CardGallery