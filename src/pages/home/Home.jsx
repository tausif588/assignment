import React from 'react'
import Expert from './Components/Experts/Expert'
import HomeBanner from './Components/HomeBanner/HomeBanner'
import ExpertRevers from './Components/Experts/ExpertReverse'
import Missions from './Components/Missions/Missions'
import Functionalties from './Components/Functionalties/Functionalties'

function Home() {
  return (
    <>
     <HomeBanner />
     <Missions />
     <Functionalties />
    <Expert />
   <ExpertRevers />
   
    </>
  )
}

export default Home