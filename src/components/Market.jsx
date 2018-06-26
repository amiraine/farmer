import React from 'react';
import PropTypes from 'prop-types';

function Market(props){
  return(
    <div>
      <h3>{props.day}</h3>
      <h3>{props.location} - Booth: {props.booth}</h3>
      <p>{props.hours}</p>
    </div>
  );
}


Market.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  issue: PropTypes.string
};

export default Market;
