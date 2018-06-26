import React from 'react';

function HeroBanner(){
  const heroStyles = {
    background: 'url("https://www.cropscience.bayer.com/static/fields-of-the-world/en/images/content/1_wheat/1-03_2048.jpg")',
    backgroundSize: '100vw',
    backgroundPosition: 'center',
    height: '50vh',
    fontFamily: 'sans-serif',
    color: 'white',
    fontSize: '2.5em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textShadow: '#000 1px 1px 10px',
    borderBottom: '5px solid #abe273'
  }
  const buttonStyle = {
    padding: '15px 40px 15px 40px',
    borderRadius: '5px',
    border: '1px #00cbff solid',
    background: '#59ddff',
    color: 'white',
    fontSize: '.6em'
  }
  return(
    <div style={heroStyles}>
      <h1>Fresh, Local, Sustainable</h1>
      <button style ={buttonStyle}>Our Mission</button>
    </div>
  );
}

export default HeroBanner;
