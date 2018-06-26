import React from 'react';
import LogoTitle from './LogoTitle'
function Logo(){
  const logoScale = {
    height: '100px',
    width: '100px',
    marginRight: '20px'
  }
  const combinedLogo ={
    fontFamily: 'sans-serif',
    display: 'flex',
    alignItems: 'center',
    marginRight: '50px'
  }
  return(
    <div style={combinedLogo}>
      <img style={logoScale} src ="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Emojione_1F33D.svg/512px-Emojione_1F33D.svg.png" />
      <LogoTitle/>
    </div>
  );
}

export default Logo
