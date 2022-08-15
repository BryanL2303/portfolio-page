import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../components/home_page/Home'
import ProjectsPage from '../components/project_page/ProjectsPage'
import TelegramBotPage from '../components/project_page/telegram_bot_page/TelegramBotPage'
import PortfolioPage from '../components/project_page/portfolio_page/PortfolioPage'
import AboutMePage from '../components/about_me_page/AboutMePage'

ReactDOM.render(
  <Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route exact path="/projects" element={<ProjectsPage/>}/>
    <Route exact path="/projects/telegram_bot_project" element={<TelegramBotPage/>}/>
    <Route exact path="/projects/portfolio_project" element={<PortfolioPage/>}/>
    <Route exact path="/about_me" element={<AboutMePage/>}/>
  </Routes>
  </Router>,
  document.body.appendChild(document.createElement('div')),
)
