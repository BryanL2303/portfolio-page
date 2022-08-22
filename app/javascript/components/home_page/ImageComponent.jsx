import React from 'react'
import ReactDOM from 'react-dom'
import MyImage from '../images/bryan-lee.jpg'

const ImageComponent = () => {
	return(
		<div class="home image-container">
			<img src={MyImage} alt="Error loading image"></img>		
		</div>
	)
}

export default ImageComponent