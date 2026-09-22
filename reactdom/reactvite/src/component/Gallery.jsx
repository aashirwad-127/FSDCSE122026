import React from 'react'
import Icard from './Icard'
function Gallery() {
    const student=[{
        pic:'https://haydensanimalfacts.files.wordpress.com/2015/12/blue-morpho-butterfly.jpg',
        name:"Rahul Kumar",
        roll:'909090',
        branch:'cse AIML',
        college:'Abes Engineering '
    },
    {
        pic:"https://haydensanimalfacts.files.wordpress.com/2015/12/blue-morpho-butterfly.jpg",
        name:"Rahul Kumar",
        roll:'909090',
        branch:'cse AIML',
        college:'Abes Engineering '
    },
    {
        pic:"https://haydensanimalfacts.files.wordpress.com/2015/12/blue-morpho-butterfly.jpg",
        name:"Rahul Kumar",
        roll:'909090',
        branch:'cse AIML',
        college:'Abes Engineering '
    },
    {
        pic:"https://haydensanimalfacts.files.wordpress.com/2015/12/blue-morpho-butterfly.jpg",
        name:"Rahul Kumar",
        roll:'909090',
        branch:'cse AIML',
        college:'Abes Engineering '
    }]
  return (
    <div style={{border:'2px solid red',display:'flex'}}>
        {/*<Icard name="ajhihi" roll="232772t" branch="cse" college="dgdigkadi" ></Icard>
        <Icard name="aigskab" roll="234555" branch="cseai" college="xypm" ></Icard>*/}
       { /*<Icard data={student[1]}/>*/}
       {
        student.map((ele)=>(
            <div>
                <Icard data={ele}/>
            </div>

        ))

       }

    </div>
        
  )
}

export default Gallery