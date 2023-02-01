import { Link } from "react-router-dom"

function NavBar() {
  return (
      <nav>
          <Link 
              to='/'
          >
              Your Name
          </Link>

          <ul>
              <li>
                  <Link
                      to='/about'
                  >
                      About
                  </Link>
              </li>

              <li>
                  <Link
                      to='/contact'
                  >
                      Contact
                  </Link>
              </li>
          </ul>
      </nav>
  )
}

export default NavBar