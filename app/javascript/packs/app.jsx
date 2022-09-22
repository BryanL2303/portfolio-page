import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import OwnerPage from './pages/OwnerPage'
//import BryanLee from './images/bryan-lee.jpg'
//import TelegramBot from './images/telegram-bot-screenshot.jpg'
//import TaskApp from './images/task-management-app-screenshot.jpg'
//import axios from 'axios'

/*axios.post('/project/1/update_project', {
  id: 1,
  image: TaskApp
})
.then(resp => {
})
.catch(resp => console.log(resp))
*/

ReactDOM.render(
  <Router>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/bryanlzy" element={<OwnerPage/>}/>
  </Routes>
  </Router>,
  document.body.appendChild(document.createElement('div')),
)
