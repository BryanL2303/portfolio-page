import React from 'react'

const ProjectDescription = ({project}) => {
  if (project != null) {
      return(
      <div className='project__container'>
      <h1 className='project__name'>{project.attributes.name}</h1>
      <textarea className='project__long-description' readOnly value={project.attributes.longDescription}></textarea>
      {project.attributes.gitLink!=null && <a href={project.attributes.gitLink}>Click here to see the github page!</a>}
      {project.attributes.siteLink!=null && <a href={project.attributes.siteLink}>Click here to check out the website!</a>}
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