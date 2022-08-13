import React from 'react'
import ReactDOM from 'react-dom'

function DescriptionComponent(){
	return(
		<div class="description-container">
			<a id="page-description"></a>
			<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            <h1>Projects</h1>
			<p>The following are all projects that i have worked on!</p>
			<div class="project-container">
				<a>
					<img class="project-image"></img>
					<h2 class="project-title">Portfolio Page</h2>
					<p class="project-description">This page you are currently viewing is actually one of my first projects</p></a>
				<a href="telegram-bot-project">
					<img class="project-image"></img>
					<h2 class="project-title">Assistant Telegram Bot</h2>
					<p class="project-description">Creating a telegram bot with an excel spreadsheet to document expenditure and how i spend my time</p></a>
			</div>
    		</div >			
		</div>
	)
}

export default DescriptionComponent