import React from 'react'
import PropTypes from 'prop-types'

function Produce(props){
  const monthHeader = {
    backgroundColor: 'rgb(99, 153, 0)',
    padding: '5px'
  }
  const produce = {
    backgroundColor: 'rgb(215, 239, 170)',
    padding: '5px',
    minHeight: '370px'
  }
  return(
    <div>
      <h3 style={monthHeader}>{props.month}</h3>
      <div style={produce}>
        <ul>
          {props.selection}
        </ul>
      </div>
    </div>
  )
}


Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
}

export default Produce
