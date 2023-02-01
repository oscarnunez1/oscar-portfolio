import projectsData from "../data/projects"
import ProjectsList from "../components/ProjectsList"

function Projects() {
  console.log(projectsData)
  return (
    <>
      <h1>Projects</h1>
      <ul>
        <ProjectsList projects={projectsData}/>
      </ul>
    </>
  )
}

export default Projects