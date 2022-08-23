import React from 'react'
import ReactDOM from 'react-dom'

const NavBar = () =>{
	return(
		<nav class="navbar">
		<div class="navbar-container">
			<a href="/">Home</a>
			<a href="/projects">Projects</a>
			<a href="/about_me">About Me</a>
		</div>
		</nav>
	)
}

export default NavBar