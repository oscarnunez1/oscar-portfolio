import React from "react"
import { Typography, Grid, Paper } from "@mui/material"

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
          <Paper elevation={16} variant="outlined">
            <img src="https://i.imgur.com/VegtFwc.png" alt="Oscar Nunez"/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home