import React from 'react'
import MyImage from './images/bryan-lee.jpg'

function SummaryComponent(){
	return(
		<div className="summary__container">
      <img className='summary__image' src={MyImage} alt="Error loading image"></img>
      <div className='summary__text'>
        <h2>I am currently a Year 1 Computer Science Student in NUS</h2>
        <br></br>
        <h2>I will be working on projects to expand my skillset and documenting them within this page</h2>				
      </div>
    </div>
	)
}

export default SummaryComponent