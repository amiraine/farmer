import React from 'react'

function LogoTitle(){
  const textStyle = {
    fontFamily: 'sans-serif',
    marginBottom: '0px',
    marginTop: '5px',
    padding: '0'
  }
  return(
    <div style={textStyle}>
      <h1 style={textStyle}>AVERY'S ORGANICS</h1>
      <h2 style={textStyle}>Growing above and beyond</h2>
    </div>
  )
}

export default LogoTitle
