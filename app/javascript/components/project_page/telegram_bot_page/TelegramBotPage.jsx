import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../../common_assets/NavBar'
import Footer from '../../common_assets/Footer'
import Background from '../../common_assets/Background'

const TelegramBotPage = () => {
  return(
    <div>
    <NavBar/>
    <div class='telegram-bot-page body-container'>
    <Background/>
    <div class='description-container'>
    <h1>Telegram Bot: Tracking Finances and Man Hour</h1>
    <div class='text-container'>
    <p>This was a personal project i worked on in February of 2022</p>
    <p>It started as a wish to create an administration bot to help with various tasks</p>
    <p>The bot now helps to record expenses as well as how i spend my time each day</p>
    <p>It's functions are run by a Google Apps Script and the data are stored in a Google Docs sheet</p>
    <p>I have also created a separate Google Apps Script to generate the Google Doc Sheets required to work with the Telegram Bot</p>
    <a href="https://github.com/BryanL2303/man-hour-and-finance-tracking-telegram-bot">Click here to check out the repository in github</a>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default TelegramBotPage