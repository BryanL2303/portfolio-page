import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../common_assets/NavBar'
import Footer from '../common_assets/Footer'
import Background from '../common_assets/Background'
import PortfolioImage from '../images/bryan-lee.jpg'
import TelegramBotImage from '../images/telegram-bot-screenshot.jpg'

const ProjectsPage = () => {
  return(
    <div>
    <NavBar/>
    <div class="projects body-container">
      <Background/>
      <div class='text'>
      <h1>Projects</h1>
      <p>The following are all projects that i have worked on!</p>
      </div>
      <div class="project-container">
        <a href="/projects/portfolio_project">
          <img class="project-image" src={PortfolioImage} alt="Error loading image"></img>
          <h2 class="project-title">Portfolio Page</h2>
          <p class="project-description">This page you are currently viewing is actually one of my first projects</p></a>
        <a href="/projects/telegram_bot_project">
          <img class="project-image" src={TelegramBotImage} alt="Error loading image"></img>
          <h2 class="project-title">Assistant Telegram Bot</h2>
          <p class="project-description">Creating a telegram bot with an excel spreadsheet to document expenditure and how i spend my time</p></a>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default ProjectsPage