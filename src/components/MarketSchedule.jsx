import React from 'react'
import Market from './Market'

const marketSchedule = [
  {
    day: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A'
  },
  {
    day: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C'
  },
  {
    day: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F'
  },
  {
    day: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E'
  },
  {
    day: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D'
  },
  {
    day: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G'
  }
]

function MasterMarket(){
  const fix = {
    height: '400px'
  }
  const scheduleGrid = {
    height: '230px',
    background: 'url(http://www.besthealthmag.ca/wp-content/uploads/2016/05/01_farmers_market.jpg)',
    backgroundPosition: 'center',
    display: 'grid',
    gridTemplateColumns: 'repeat(6,1fr)',
    gridAutoRows: '170px',
    marginLeft: '5vw',
    marginRight: '5vw'
  }
  const header = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    textDecoration: 'none',

  }
  return(
    <div style={fix}>
      <h1 style={header}><a name='market'>Market Schedule</a></h1>
      <div style={scheduleGrid}>
        {marketSchedule.map((market, index) =>
          <Market day = {market.day}
            location = {market.location}
            hours = {market.hours}
            booth = {market.booth}
            key = {index}/>
        )}
      </div>
    </div>
  )
}

export default MasterMarket
