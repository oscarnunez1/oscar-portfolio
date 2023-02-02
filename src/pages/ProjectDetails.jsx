import { useParams } from "react-router-dom"
import findProject from "../utilties/findProject.js"

function ProjectDetails() {
  const { projectDetails } = useParams()
  const projectData = findProject(projectDetails)
  return (
    <>
      <h1>{projectData.title}</h1>
      <img src={projectData.image} alt={projectData.title}></img>
      <p>{projectData.description}</p>
      <a href={projectData.repoLink}><button>View the code</button></a>
      <a href={projectData.deploymentLink}><button>Explore App</button></a>
    </>
  )
}

export default ProjectDetails