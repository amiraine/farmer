import React from 'react'

function ReturnTop(){
  const svgSize = {
    width: '16px',
    height: '16px'
  }
  const toTop = {
    background: 'rgba(0,0,0,.5)',
    display: 'flex',
    fontFamily: 'sans-serif',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    bottom: '0',
    right: '0',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    fontSize: '0.15em',
    padding: '5px',
    zIndex: '2',
  }
  return(
    <div style={toTop}>
      <a href="#">Return top</a>
      <svg style = {svgSize} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"/></svg>
    </div>
  )
}

export default ReturnTop
