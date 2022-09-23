import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ProjectDisplay from './projectlist/ProjectDisplay'
import ProjectDescription from './projectlist/ProjectDescription'

const ProjectList = () => {
  const [displayedProject, setDisplayedProject] = useState()
  const [projects, setProjects] = useState([])

  useEffect(() =>{
    fetchProjects()
  }, [])

  function fetchProjects() {
    axios.get('/project')
    .then(resp => {
      setProjects(resp.data.data)
      sessionStorage.setItem("projects", JSON.stringify(resp.data.data))
    })
    .catch(resp => console.log(resp))
  }

  useEffect(() =>{
    let projectDisplays = document.getElementsByClassName('project__display')
    if (projectDisplays.length > 0) {
      let projectList = document.getElementsByClassName('projects__list')[0]
      if (screen.width > 900) {
        projectList.style['height'] = `${320 + ((projectDisplays.length
         - 1 - ((projectDisplays.length - 1) %3))/3)*320}px`
        let x = 0
        for (x = 0; x < projectDisplays.length; x++) {
          let displayStyle = projectDisplays[x].style
          let y = x + 1
          let left = ((y % 3) * 30) - 20
          let top = projectList.offsetTop + ((x - (x % 3)) / 3) * 320
          if (left == -20) {
            left = 70
          }
          displayStyle['left'] = `${left}%`
          displayStyle['top'] = `${top}px`
        }
      }
      else {
        projectList.style['height'] = `${270 + ((projectDisplays.length
        - 1  - ((projectDisplays.length-1)%2))/2)*270}px`
        let x = 0
        for (x = 0; x < projectDisplays.length; x++) {
          let displayStyle = projectDisplays[x].style
          let y = x + 1
          let left = 52 - ((y % 2) * 48)
          let top = projectList.offsetTop + ((x - (x % 2)) / 2) * 270
          displayStyle['left'] = `${left}%`
          displayStyle['top'] = `${top}px`
        } 
      }
    }
  }, [projects])

  return(
    <div className='projects__container'>
      <div className='projects__segment-header'>
        <h1>Projects</h1>
        <p>The following are all projects that i have worked on!</p>
      </div>

      <div className='projects__list'>
        {projects.map(project => {
          return(
            <ProjectDisplay key={project.id} project={project} setDisplayedProject={setDisplayedProject}/>
          )
        })}
      </div>

      <ProjectDescription project={displayedProject}/>
    </div>
  )
}

export default ProjectList