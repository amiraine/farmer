import React from 'react'
import PropTypes from 'prop-types'

function Market(props){
  const gridItem = {
    borderLeft: '2px solid rgb(215, 239, 170)'
  }
  const titleStyle = {
    backgroundColor: '#639900',
    padding: '10px',
    margin: '0px',
    textAlign: 'center'
  }
  const bodyStyle = {
    backgroundColor: 'rgba(215, 239, 170,.8)',
    height: '170px',
    padding: '10px'
  }
  return(
    <div style={gridItem}>
      <h3 style = {titleStyle}>{props.day}</h3>
      <div style = {bodyStyle}>
        <h3>{props.location} - Booth: {props.booth}</h3>
        <p>{props.hours}</p>
      </div>
    </div>
  )
}


Market.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  issue: PropTypes.string
}

export default Market
