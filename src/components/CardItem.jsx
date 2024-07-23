import React, { useState } from 'react'

const CardItem = ({link, number}) => {
    const [active, setActive] = useState(false)

    const handleFlip = (e) => {
        e.preventDefault()
        setActive(!active)
    }
    
  return (
    <button className={`cards ${active ? 'cardFlip' : ''}`} onClick={handleFlip}>
        <div className='front'><img src={link} alt={number} className='cardImage'/></div>
        <div className='back'>
          <div className='backImage'>
            <p className='backText'>Memory</p>
          </div>
        </div>
    </button>
  )
}

export default CardItem