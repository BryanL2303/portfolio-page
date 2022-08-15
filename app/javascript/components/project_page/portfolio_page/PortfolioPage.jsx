import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../../common_assets/NavBar'
import Footer from '../../common_assets/Footer'
import Background from '../../common_assets/Background'

const PortfolioPage = () => {
  return(
    <div>
    <NavBar/>
    <div class='portfolio-page body-container'>
    <Background/>
    <div class='description-container'>
    <h1>Portfolio Page</h1>
    <div class='text-container'>
    <p>This is the first project i have completed related to software engineering</p>
    <p>The page that you are looking at now was created using Ruby on Rails with a React webpack</p>
    <p>While working on this page i learnt and practised alot of basic programming skills as well as organising code neatly</p>
    <p>Other than the stylesheet code for the background animation that was taken from another source everything else in this site was coded myself</p>
    <a href="https://codepen.io/vaibhavarora/pen/xmpxjp">Click here to see the source of the background animation code</a>
    <br></br>
    <a href="https://github.com/BryanL2303/portfolio-page">Click here to check out the repository in github</a>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default PortfolioPage