import React from 'react'
import Logo from './Logo'
import Links from './Links'

function Header(){
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    color: '#23c100',
    height: '150px',
    borderBottom: '5px solid #abe273'
  }
  return (
    <div style={headerStyle}>
      <Logo/>
      <Links/>
    </div>
  )
}

export default Header
