import React from 'react';
function Links(){
  const linkStyles = {
    display: 'flex'
  }
  const linkUnit = {
    marginLeft: '8px',
    marginRight: '8px',
    fontFamily: 'sans-serif',
    textTransform: 'uppercase'
  }
  return(
    <div style={linkStyles}>
      <p style = {linkUnit}>About</p>
      <p style = {linkUnit}>News</p>
      <p style = {linkUnit}>Farm tours</p>
      <p style = {linkUnit}>Speaking</p>
      <p style = {linkUnit}>Education</p>
      <p style = {linkUnit}>Food sales</p>
      <p style = {linkUnit}>Contact</p>
    </div>
  );
}

export default Links
