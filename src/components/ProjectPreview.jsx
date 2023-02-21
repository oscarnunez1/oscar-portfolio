import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import hyphenateWords from '../utilties/hyphenateWords';

function ProjectPreview(props) {
  return (
    <Card>
      <CardMedia
        component="img"
        width="100%"
        height="300px"
        image={props.project.image}
        alt={props.project.title}
      />
      <CardContent>
        <Typography variant="h6" component="h3">
          {props.project.title}
        </Typography>
        <Button
          variant="contained"
          component={Link}
          to={hyphenateWords(props.project.title)}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProjectPreview;
