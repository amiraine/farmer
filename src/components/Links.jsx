import React from 'react'
function Links(){
  const linkStyles = {
    display: 'flex'
  }
  const linkUnit = {
    marginLeft: '8px',
    marginRight: '8px',
    fontFamily: 'sans-serif',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: 'inherit'
  }
  return(
    <div style={linkStyles}>
      <p><a href="#market" style = {linkUnit}>Market schedule</a></p>
      <p><a href="#available" style = {linkUnit}>available produce</a></p>
    </div>
  )
}

export default Links
