import React from 'react'
import ReactDOM from 'react-dom'

function NavBar(){
	return(
		<nav class="navbar">
		<a id="page-top"></a>
		<div class="navbar-container">
			<a href="#page-top">Home</a>
			<a href="#page-description">Projects</a>
			<a href="#page-summary">About Me</a>
			<a href="#page-footer">Contacts</a>	
		</div>
		</nav>
	)
}

export default NavBar