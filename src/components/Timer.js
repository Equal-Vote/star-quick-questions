import React from 'react'

const Timer = ({millis}) => {
  return (
    <div className="timer">
        <h2>{`${String(Math.floor(millis/(60*1000))).padStart(2, '0')}:${String(Math.floor(millis/1000)%60).padStart(2, '0')}.${String(Math.floor((millis%1000)/10)).padStart(2, '0')}`}</h2>
    </div>
  )
}

export default Timer
