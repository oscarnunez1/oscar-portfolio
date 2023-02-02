import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav>
        <Link 
            to='/'
        >
            Oscar Nunez
        </Link>

        <ul>
            <li>
                <Link
                    to='/projects'
                >
                    Projects
                </Link>
            </li>

            <li>
                <Link
                    to='/resume'
                >
                    Resume
                </Link>
            </li>

            <li>
                <Link
                    to='/contact'
                >
                    Contact
                </Link>
            </li>

            <li>
                <Link
                    to='/about'
                >
                    About
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar