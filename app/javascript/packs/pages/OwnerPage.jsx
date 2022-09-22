import React, {useState,useEffect} from 'react'
import axios from 'axios'

const OwnerPage = () => {
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

  function updateName(e) {
    axios.post('/project/1/update_project', {
      id: e.target.id,
      name: e.target.value
    })
    .then(resp => {
    })
    .catch(resp => console.log(resp)) 
  }

  function updateImage(e) {
    axios.post('/project/1/update_project', {
      id: e.target.id,
      image: e.target.value
    })
    .then(resp => {
    })
    .catch(resp => console.log(resp)) 
  }

  function updateShortDescription(e) {
    axios.post('/project/1/update_project', {
      id: e.target.id,
      shortDescription: e.target.value
    })
    .then(resp => {
    })
    .catch(resp => console.log(resp)) 
  }

  function updateLongDescription(e) {
    axios.post('/project/1/update_project', {
      id: e.target.id,
      longDescription: e.target.value
    })
    .then(resp => {
    })
    .catch(resp => console.log(resp)) 
  }

  function deleteProject(e) {
    axios.delete('/project/' + e.target.id)
    .then(resp => {
      fetchProjects()
    })
    .catch(resp => console.log(resp)) 
  }

  function addNewProject(e) {
    axios.post('/project/1/create_project', {
      name: e.target[0].value,
      image: e.target[1].value,
      shortDescription: e.target[2].value,
      longDescription: e.target[3].value
    })
    .then(resp => {
      fetchProjects()
    })
    .catch(resp => console.log(resp))
  }

  return(
    <div className='ownerpage__container'>
      {projects.map(project => {
        return(
          <div key={project.id}>
            <input id={project.id} className='project__name' type='text' onBlur={updateName} defaultValue={project.attributes.name}></input>
            <input id={project.id} className='project__image' type='text' onBlur={updateImage} defaultValue={project.attributes.image}></input>
            <textarea id={project.id} className='project__short-description' type='text' onBlur={updateShortDescription} defaultValue={project.attributes.shortDescription}></textarea>
            <textarea id={project.id} className='project__long-description' type='text' onBlur={updateLongDescription} defaultValue={project.attributes.longDescription}></textarea>
            <button id={project.id} className='project__delete--button' onClick={deleteProject}>X</button>
          </div>
        )
      })}
      <form className='project--form' onSubmit={addNewProject}>
        <input className='form__name' type='text' placeholder='Project Name'></input>
        <input className='form__image' type='text' placeholder='Project Image URL'></input>
        <textarea className='form__short-description'></textarea>
        <textarea className='form__long-description'></textarea>
        <button className='form__submit--button'>Add Project</button>
      </form>
    </div>
  )
}

export default OwnerPage