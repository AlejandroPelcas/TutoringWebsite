import React from 'react'

function MyButton({title}) {
  return (
    <button className="btn btn-moving-gradient btn-moving-gradient--green"> 
        {title}
    </button>
  )
}

export default MyButton