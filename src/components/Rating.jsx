import React from 'react'

export const Rating = ({rating}) => {

    let ratingArray = Array(5).fill(false)
    for(let i=0; i<rating; i++){
        ratingArray[i] = true
    }
  return (
   <>
    {
         ratingArray.map((value, index)=>(
    
                value?(<i className="bi bi-star-fill" key={index} style={{fontSize:'25', color:"yellow"}}></i>
                ):(<i className="bi bi-star" key={index} style={{fontSize:'25', color:"yellow"}}></i>)
            
         ))
    }
   </>
  )
}

