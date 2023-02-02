import { Link } from "react-router-dom";

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
            <Link to={`/projects/${props.project.title}`}>
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