import React from 'react'
import ReactDOM from 'react-dom'
import MyImage from './images/bryan-lee.jpg'

function ImageComponent(){
	return(
		<div class="image-container">
			<img src={MyImage} alt="LMAO feels bad"></img>		
		</div>
	)
}

export default ImageComponent