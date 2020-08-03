import React  from 'react'

const progress =({done})=>{
  
     
    return (
    <div class="progress">
      <div class="progress-done">
        {done}%
    </div>
      </div>
    )
  }
  export default progress 