import { Link } from "react-router-dom";

function ProjectPreview (props) {
  return (
    <>
      <div>

      <section>
        <img 
            src={props.image} 
            alt={props.title}
        />
        <br/>
        <Link to={`/projects/${props.title}`}>
          <button>
            Learn more
          </button>
        </Link>
      </section>
    </div>
    </>
  )
}

export default ProjectPreview