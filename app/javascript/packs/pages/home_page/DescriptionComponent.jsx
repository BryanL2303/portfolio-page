import React from 'react'
import resume from './images/resume.jpg'

function DescriptionComponent(){
	return(
		<div className="description__container">
      <img className="resume--image" src={resume} alt="error loading image"></img>
      <div className='description'>
        <h1>Have a look at my resume on the left and my projects below!</h1>
        <br></br>
        <p>I have just started studying and trying to explore more regarding programming</p>
        <br></br>
        <p>The projects that i have worked on so far are just personal projects that i created for my own sake</p>
        <p>I put them up on Github as well as this page merely to showcase some of the work i have done and to document my practise</p>
        <br></br>
        <p>I will also be working on more software engineering projects as well as trying to create programs to work out problems on my own</p>
        <br></br>
        <a href="https://github.com/BryanL2303">Github Page</a>
    	</div>
    </div>		
	)
}

export default DescriptionComponent