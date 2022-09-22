# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
Project.destroy_all

projects = Project.create!([{name: 'Portfolio Page', shortDescription: 'This website itself!',
 image: '/packs/media/packs/images/bryan-lee-a3940d1e766f560fd0f804c46024a4a5.jpg', longDescription: 'This is the first project i have completed related to software engineering\nThe page that you are looking at now was created using Ruby on Rails with a React webpack\nWhile working on this page i learnt and practised alot of basic programming skills as well as organising code neatly\nOther than the stylesheet code for the background animation that was taken from another source everything else in this site was coded myself\nClick here to see the source of the background animation code: https://codepen.io/vaibhavarora/pen/xmpxjp\nClick here to check out the repository in github: https://github.com/BryanL2303/portfolio-page'},
 {name: 'Telegram Bot for Finance and Man Hour', shortDescription: 'Telegram bot with Google Spreadsheet to record finances',
 image: '/packs/media/packs/images/telegram-bot-screenshot-9d6c275391506849de2d9f0756e4ff9c.jpg', longDescription: 'This was a personal project i worked on in February of 2022\nIt started as a wish to create an administration bot to help with various tasks\nThe bot now helps to record expenses as well as how i spend my time each day\nIts functions are run by a Google Apps Script and the data are stored in a Google Docs sheet\nI have also created a separate Google Apps Script to generate the Google Doc Sheets required to work with the Telegram Bot\nClick here to check out the repository in github: https://github.com/BryanL2303/man-hour-and-finance-tracking-telegram-bot'},
 {name: 'Task Management App', shortDescription: 'For planning out daily tasks and keeping track of projects!',
 image: '/packs/media/packs/images/task-management-app-screenshot-053c3b8f0fc8365e528fa0377c74f305.jpg', longDescription: 'Check out the website through this link: https://scheduler-site.herokuapp.com/'}])