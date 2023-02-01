import projectsData from "../data/projects"

function Projects() {
  console.log(projectsData)
  return (
    <>
      <h1>Projects</h1>
      <ul>
        {projectsData.map(project =>
          <li key={project.id}>
            {project.title}
          </li>
        )}
      </ul>
    </>
  )
}

export default Projects