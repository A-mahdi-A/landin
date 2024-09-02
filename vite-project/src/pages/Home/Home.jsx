import React from 'react'
import Header from '../../component/Heder/Header'
import LandSup from '../../component/Login and SignUp/LandSup'
import SectionNumber1OnHomePage from '../../component/section number 1 info/Section number1onHomepage'
import Faselee from '../../component/fasele/fasele'
import CardsSec from '../../component/sectione info cards/CardsSec'
import PCDSection from '../../component/posht pardee campin digital sectione/PCDSection'
import SDCsectione from '../../component/start whit digital campian/SDCsectione'
import DCsectione from '../../component/drup click/DCsectione'


function Home() {
  return (
    <div>
     
      <Header/>
      <SectionNumber1OnHomePage/>
      <Faselee />
      <CardsSec/>
      <SDCsectione/>
      <PCDSection/>
      <DCsectione/>
    </div>
  )
}

export default Home
