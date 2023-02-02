import projectsData from "../data/projects.js"

function ProjectDetails() {
  return (
    <>
      <h1>{projectsData[0].title}</h1>
      <img src={projectsData[0].image} alt="btct-4"></img>
      <p>{projectsData[0].description}</p>
    </>
  )
}

export default ProjectDetails