import React from 'react'
import Header from '../../component/Heder/Header'
import LandSup from '../../component/Login and SignUp/LandSup'
import SectionNumber1OnHomePage from '../../component/section number 1 info/Section number1onHomepage'
import Faselee from '../../component/fasele/fasele'
import CardsSec from '../../component/sectione info cards/CardsSec'
import PCDSection from '../../component/posht pardee campin digital sectione/PCDSection'


function Home() {
  return (
    <div>
     
      <Header/>
      <SectionNumber1OnHomePage/>
      <Faselee />
      <CardsSec/>
      <PCDSection/>
    </div>
  )
}

export default Home
