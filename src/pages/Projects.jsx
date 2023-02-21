import React, { useMemo } from 'react';
import { Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import projectsData from '../data/projects';
import ProjectsList from '../components/ProjectsList';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function Projects() {
  const projects = useMemo(() => projectsData, []);
  const projectsList = useMemo(() => <ProjectsList projects={projects} />, [projects]);

  const descriptionStyle = {
    marginTop: '32px',
    marginBottom: '16px',
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Typography variant="body1" component="p" align="center" sx={descriptionStyle}>
          Check out some of the projects I've worked on! Click "Learn More" to see more details about each project.
        </Typography>
        {projectsList}
      </Container>
    </ThemeProvider>
  );
}

export default React.memo(Projects);
