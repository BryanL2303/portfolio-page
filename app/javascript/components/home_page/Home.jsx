import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../common_assets/NavBar'
import Footer from '../common_assets/Footer'
import SummaryComponent from './SummaryComponent'
import ImageComponent from './ImageComponent'

const Home = () => {
  return(
    <div>
    <NavBar/>
    <div class="body-container">
    <SummaryComponent/>
    <ImageComponent/>
    </div>
    <Footer/>
    </div>
  )
}

export default Home