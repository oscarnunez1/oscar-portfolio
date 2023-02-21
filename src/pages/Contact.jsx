import { Card, CardContent, Typography, Link } from '@mui/material';

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
  };

  return (
    <div style={containerStyle}>
      <Card variant="outlined" sx={cardStyle}>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            You can reach me anytime via{' '}
            <Link href="mailto:oscar.nunezcaba@gmail.com" color="secondary">
              email
            </Link>{' '}
            or{' '}
            <Link href="https://www.linkedin.com/in/oscarnunez34/" color="secondary">
              LinkedIn
            </Link>{' '}
            for further discussions or information, and here's a link to my{' '}
            <Link href="https://github.com/oscarnunez1" color="secondary">
              GitHub
            </Link>
            . I look forward to connecting with you.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Contact;
