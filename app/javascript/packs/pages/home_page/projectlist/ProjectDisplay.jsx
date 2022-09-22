import React, {useEffect} from 'react'

const ProjectDisplay = ({project, setDisplayedProject}) => {
	function showProject(e) {
		setDisplayedProject(project)
	}
	
	return(
		<div className='project__display'>
			<button id={project.id} className='project__display--button' onClick={showProject}>
		    <img className="project--image" src={project.attributes.image} alt="Error loading image"></img>
		    <h2 className="project__name">{project.attributes.name}</h2>
		    <p className="project__short-description">{project.attributes.shortDescription}</p>
		  </button>
		</div>
	)
}

export default ProjectDisplay