import ProjectPreview from "./ProjectPreview"

function ProjectsList(props) {
  return (
    <>
      <ul>
        {props.projects.map(project =>
          <li key={project.id}>
              {project.title}
              <ProjectPreview
              project={project} 
              title={project.title}
              image={project.image} />
          </li>
        )}
      </ul>
    </>
  )
}

export default ProjectsList