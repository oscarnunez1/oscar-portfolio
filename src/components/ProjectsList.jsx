import ProjectPreview from "./ProjectPreview"

function ProjectsList(props) {
  return (
    <>
      <ul>
        {props.projects.map((project, idx) =>
          <li key={idx}>
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