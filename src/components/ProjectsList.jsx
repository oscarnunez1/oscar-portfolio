import projects from "../data/projects"

function ProjectsList(props) {
  console.log(props)
  return (
    <>
      <h1>Projects</h1>
      <ul>
        {projects.map(project =>
          <li key={project.id}>
            {project.title}
          </li>
        )}
      </ul>
    </>
  )
}

export default ProjectsList