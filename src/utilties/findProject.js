import projectsData from "../data/projects";
import hyphenateWords from "./hyphenateWords";

function findProjects(string) {
  const project = projectsData.filter(project => {
    return hyphenateWords(project.title) === string
  })
  return project
}
export default findProjects