import { Card, CardContent, Typography } from "@mui/material";

function About() {
  return (
    <Card style={{ maxWidth: 600, margin: "auto", marginTop: 32, marginBottom: 32 }}>
      <CardContent style={{ padding: 16 }}>
        <Typography variant="h5" component="h1" style={{ marginBottom: 16 }}>
          About
        </Typography>
        <img src="https://i.imgur.com/VegtFwc.png" alt="Oscar Nunez" style={{ width: "100%", height: "auto", marginBottom: 16 }} />
        <Typography variant="body1" component="p" style={{ marginBottom: 16 }}>
          I am a full stack developer with a strong foundation in JavaScript, HTML, CSS, Node.js, Express, and MongoDB, coming from a diverse background in architectural and construction photography, journalism, drone operations, and social media management. I am excited to bring my unique perspective and skills to web development and build innovative and user-friendly applications.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default About;