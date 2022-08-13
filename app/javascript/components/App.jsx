import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Routes} from 'react-router-dom'
import NavBar from './NavBar'
import SummaryComponent from './SummaryComponent'
import ImageComponent from './ImageComponent'
import DescriptionComponent from './DescriptionComponent'
import Footer from './Footer'


const App = () =>{
  return(
    <>
    <Routes>
      <Route exact path="/" component={DescriptionComponent}/>
      <Route exact path="/summary" component={SummaryComponent}/>
    </Routes>
    <NavBar/>
    <div class="body-container">
    <SummaryComponent/>
    <ImageComponent/>
    <DescriptionComponent/>
    </div>
    <Footer/>
    </>
  )
}

export default App