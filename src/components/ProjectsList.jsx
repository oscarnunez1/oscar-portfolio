import { Grid } from '@mui/material';
import ProjectPreview from './ProjectPreview';

function ProjectsList(props) {
  return (
    <Grid container spacing={4} sx={{ maxWidth: 1200 }}>
      {props.projects.map((project, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <ProjectPreview project={project} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProjectsList;