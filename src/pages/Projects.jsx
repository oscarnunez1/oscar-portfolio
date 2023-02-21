import React, { useMemo } from 'react';
import { Box, Typography } from '@mui/material';
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

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    maxWidth: 800,
    padding: '32px 16px',
  };

  const descriptionStyle = {
    marginTop: '32px',
    marginBottom: '16px',
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{containerStyle, width: '90vw'}}>
        <Box sx={descriptionStyle}>
          <Typography variant="body1" component="p" align="center">
            Check out some of the projects I've been working on. Click "Learn More" to see more details about each project.
          </Typography>
        </Box>
        <div>{projectsList}</div>
      </Box>
    </ThemeProvider>
  );
}

export default React.memo(Projects);