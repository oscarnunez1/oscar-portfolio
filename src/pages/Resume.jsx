import { Typography, Card, CardContent, CardActions, IconButton } from '@mui/material';
import { GetApp } from '@mui/icons-material';

function Resume() {
  const containerStyle = {
    maxWidth: 600,
    margin: 'auto',
    marginTop: 32,
    marginBottom: 32,
  };

  const cardStyle = {
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
    overflow: 'hidden',
  };

  return (
    <div style={containerStyle}>
      <Card variant="outlined" sx={cardStyle}>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom>
            Resume
          </Typography>
          <Typography variant="body1" component="p">
            <CardActions>Click the
              <IconButton href="./oscar-nunez-resume.pdf" download aria-label="Download resume">
                <GetApp />
              </IconButton>to download a copy of my resume.
            </CardActions>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Resume;