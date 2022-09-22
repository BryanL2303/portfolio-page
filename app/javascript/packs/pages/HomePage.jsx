import React from 'react'
import Footer from './home_page/Footer'
import SummaryComponent from './home_page/SummaryComponent'
import DescriptionComponent from './home_page/DescriptionComponent'
import ProjectList from './home_page/ProjectList'

const HomePage = () => {
  return(
    <div className='homepage__container'>
      <SummaryComponent/>
      <DescriptionComponent/>
      <ProjectList/>
      <Footer/>
    </div>
  )
}

export default HomePage