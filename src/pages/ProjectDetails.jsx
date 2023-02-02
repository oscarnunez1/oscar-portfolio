import { useParams } from "react-router-dom"
import findProject from "../utilties/findProject.js"

function ProjectDetails() {
  const { projectDetails } = useParams()
  const projectData = findProject(projectDetails)
  console.log(projectData.description);
  return (
    <>
      <h1>{projectData.title}</h1>
      <p>{projectData.description}</p>
      <img src={projectData.image} alt={projectData.title} />
      <a href={projectData.repositoryLink}><button>GitHub Repo</button></a>
      <a href={projectData.deploymentLink}><button>Test The App</button></a>
    </>
  )
}

export default ProjectDetails