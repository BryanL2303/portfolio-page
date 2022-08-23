import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../common_assets/NavBar'
import Footer from '../common_assets/Footer'
import Background from '../common_assets/Background'
import Resume from './Resume'
import DescriptionComponent from './DescriptionComponent'


const AboutMePage = () => {
  return(
    <div>
    <NavBar/>
    <div class="about-me body-container">
    <Background/>
    <Resume/>
    <DescriptionComponent/>
    </div>
    <Footer/>
    </div>
  )
}

export default AboutMePage