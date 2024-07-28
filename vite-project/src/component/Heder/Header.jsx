import React from 'react'
import LandSup from '../Login and SignUp/LandSup'
import Logo from '../../assets/imge/logoLandin.svg'
function Header() {
  return (
  <>
  <section id='header'>
  <div id='LoginB'><LandSup/></div>
    <div id='Meno'></div>
    <div id='Logo'><img src={Logo} alt="" /></div>
  </section>
  </>
  )
}

export default Header
