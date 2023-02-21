import { Card, CardContent, Typography, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
  const containerStyle = {
    maxWidth: 600,
    margin: 'auto',
    marginTop: 32,
    marginBottom: 32,
  };

  const cardStyle = {
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    height: '100%',
  };

  const linkStyle = {
    margin: '8px',
  };

  return (
    <div style={containerStyle}>
      <Card variant="outlined" sx={cardStyle}>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            You can reach me anytime at any of the links below for further discussions or information.
          </Typography>
          <div>
            <Link href="mailto:oscar.nunezcaba@gmail.com" color="secondary" style={linkStyle}>
              <EmailIcon style={{ color: 'gold' }} />
            </Link>
            <Link href="https://www.linkedin.com/in/oscarnunez34/" color="secondary" style={linkStyle}>
              <LinkedInIcon style={{ color: '#0072B1' }} />
            </Link>
            <Link href="https://github.com/oscarnunez1" color="secondary" style={linkStyle}>
              <GitHubIcon style={{ color: 'black' }} />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Contact;

