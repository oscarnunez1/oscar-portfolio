import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Button, IconButton, Box, ButtonGroup } from "@mui/material";
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
          <ButtonGroup variant="outlined" color="warning">
            <Button
              component={Link}
              to="/projects"
              style={{
                textDecoration: "none",
                color: "white",
                backgroundColor:
                  location.pathname === "/projects" ? "#E06552" : "transparent",
              }}
            >
              Projects
            </Button>

            <Button
              component={Link}
              to="/resume"
              style={{
                textDecoration: "none",
                color: "white",
                backgroundColor:
                  location.pathname === "/resume" ? "#E06552" : "transparent",
              }}
            >
              Resume
            </Button>

            <Button
              component={Link}
              to="/contact"
              style={{
                textDecoration: "none",
                color: "white",
                backgroundColor:
                  location.pathname === "/contact" ? "#E06552" : "transparent",
              }}
            >
              Contact
            </Button>

            <Button
              component={Link}
              to="/about"
              style={{
                textDecoration: "none",
                color: "white",
                backgroundColor:
                  location.pathname === "/about" ? "#E06552" : "transparent",
              }}
            >
              About
            </Button>
          </ButtonGroup>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
