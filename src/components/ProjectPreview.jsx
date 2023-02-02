import { Link } from "react-router-dom"
import hyphenateWords from "../utilties/hyphenateWords"

function ProjectPreview (props) {
  return (
    <>
      <div>
        <section>
          <div>
            <img 
                src={props.project.image} 
                alt={props.project.title}
            />
            <br/>
            <Link to={hyphenateWords(props.project.title)}>
              <button>
                Learn more
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProjectPreview