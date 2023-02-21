import React from "react";
import { Typography, Grid, Paper, Card, CardMedia, CardContent } from "@mui/material";

function Home() {
  return (
    <div>
      <Grid container spacing={5} direction="column" alignItems="center" justifyContent="center">
        <Grid item>
          <Typography variant="h2" component="h1" align="center" style={{ padding: '20px'}}>
            Full Stack Software Developer
          </Typography>
        </Grid>
        <Grid item>
          <Card>
            <CardMedia
              id="home-image"
              component="img"
              width="100%"
              height="auto"
              image="https://i.imgur.com/VegtFwc.png"
              alt="Oscar Nunez"
            />
            <CardContent>
              <Typography variant="h4" component="h2" align="center">
                Oscar Nunez
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
