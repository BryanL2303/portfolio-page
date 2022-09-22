import React from 'react'

const ProjectDescription = ({project}) => {
  if (project != null) {
      return(
      <div className='project__container'>
      <h1 className='project__name'>{project.attributes.name}</h1>
      <textarea className='project__long-description' readOnly value={project.attributes.longDescription}></textarea>
      </div>
    )    
  }
  else {
    return(
      <div></div>
    )
  }
}

export default ProjectDescription