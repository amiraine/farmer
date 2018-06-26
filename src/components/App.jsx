import React from 'react'
import Header from './Header'
import HeroBanner from './Hero'
import MasterMarket from './MarketSchedule'
import ReturnTop from './Top'
import MasterProduce from './SeasonalProduce'
// function

function App(){
  return(
    <div>
      <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            list-style-type: none;
          }
          div {
            font-family: sans-serif;
          }
          h1 {
            text-align: center;
            padding: 40px;
          }
          `}
      </style>
      <Header/>
      <HeroBanner/>
      <MasterMarket/>
      <MasterProduce/>
      <ReturnTop/>
    </div>
  )
}

export default App
