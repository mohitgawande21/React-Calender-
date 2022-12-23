import React from 'react'

export default function Holiday() {

  const dot = {
    height: '5px',
    width: '5px',
    backgroundColor: '#bbb',
    borderRadius: '50%',
    display: 'inline-block'
  }
  return (
    <div>
      <span style={dot}></span>
    </div>
  )
}
