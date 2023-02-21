import { Link } from "react-router-dom"
import { AppBar, Toolbar, Typography } from "@mui/material"

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>

        <Typography 
          variant="h6" 
          component={Link} 
          to="/" 
          style={{ textDecoration: 'none', color: 'white'}}
        >
          Oscar Nunez
        </Typography>

        <Typography
          variant="subtitle1" 
          component={Link} 
          to="/projects" 
          style={{ marginLeft: 'auto', textDecoration: 'none', color: 'white'}}
        >
          Projects
        </Typography>

        <Typography
          variant="subtitle1" 
          component={Link} 
          to="/resume" 
          style={{ marginLeft: '1rem', textDecoration: 'none', color: 'white'}}
        >
          Resume
        </Typography>

        <Typography
          variant="subtitle1" 
          component={Link} 
          to="/contact" 
          style={{ marginLeft: '1rem', textDecoration: 'none', color: 'white'}}
        >
          Contact
        </Typography>

        <Typography
          variant="subtitle1" 
          component={Link} 
          to="/about" 
          style={{ marginLeft: '1rem', textDecoration: 'none', color: 'white'}}
        >
          About
        </Typography>

      </Toolbar>  
    </AppBar>
  )
}

export default NavBar