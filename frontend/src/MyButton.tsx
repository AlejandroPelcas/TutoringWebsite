import React from 'react'

function MyButton({title, link}) {
    const handleClick = () => {
        window.location.href = link; // can be internal or external
      };
  return (
    <button onClick={handleClick} className="btn btn-moving-gradient btn-moving-gradient--green"> 
        {title}

    </button>
  )
}

export default MyButton