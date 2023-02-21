import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Button, IconButton, Box } from "@mui/material";
import { Home } from "@mui/icons-material";

function NavBar() {
  const location = useLocation();

  return (
    <AppBar position="fixed" style={{ zIndex: 1000, backgroundColor: '#49516F' }}>
      <Toolbar>
        <IconButton component={Link} to="/" style={{ color: "white" }}>
          <Home />
        </IconButton>

        <Box sx={{ marginLeft: "auto" }}>
          <Button
            variant="contained"
            component={Link}
            to="/projects"
            style={{
              marginLeft: "1rem",
              textDecoration: "none",
              color: "white",
              backgroundColor:
                location.pathname === "/projects" ? "#E06552" : "transparent",
            }}
          >
            Projects
          </Button>

          <Button
            variant="contained"
            component={Link}
            to="/resume"
            style={{
              marginLeft: "1rem",
              textDecoration: "none",
              color: "white",
              backgroundColor:
                location.pathname === "/resume" ? "#E06552" : "transparent",
            }}
          >
            Resume
          </Button>

          <Button
            variant="contained"
            component={Link}
            to="/contact"
            style={{
              marginLeft: "1rem",
              textDecoration: "none",
              color: "white",
              backgroundColor:
                location.pathname === "/contact" ? "#E06552" : "transparent",
            }}
          >
            Contact
          </Button>

          <Button
            variant="contained"
            component={Link}
            to="/about"
            style={{
              marginLeft: "1rem",
              textDecoration: "none",
              color: "white",
              backgroundColor:
                location.pathname === "/about" ? "#E06552" : "transparent",
            }}
          >
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar
