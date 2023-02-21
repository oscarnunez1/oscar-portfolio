import { useParams } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import findProject from "../utilties/findProject.js";

function ProjectDetails() {
  const { projectDetails } = useParams();
  const projectData = findProject(projectDetails);

  return (
    <Container sx={{ mt: 5 }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h2" component="h1">
          {projectData.title}
        </Typography>
        <Typography variant="body1">{projectData.description}</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={projectData.image}
              alt={projectData.title}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h5">Technologies Used:</Typography>
              <Typography variant="body1">{projectData.technologies}</Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h5">GitHub Repository:</Typography>
              <Typography variant="body1">
                <a href={projectData.repositoryLink}>{projectData.repositoryLink}</a>
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h5">Live Demo:</Typography>
              <Typography variant="body1">
                <a href={projectData.deploymentLink}>{projectData.deploymentLink}</a>
              </Typography>
            </Box>
            <Box>
              <Button variant="contained" href="/projects">
                Back to Projects
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProjectDetails;
