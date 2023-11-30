'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {ThemeProvider } from '@mui/material/styles';

import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';


export default function Page() {

	


  async function runDBCallAsync(url) {
    const res = await fetch(url); // actually calls it
    
    
    const data = await res.json();

    if(data.data== "valid"){ 
      console.log("login is valid!")
    } else {
        console.log("not valid ") }
    }



  const handleSubmit = (event) => {  
    
    console.log("handling submit");
  
    event.preventDefault();
  
  
  
  
    const data = new FormData(event.currentTarget);
    let email = data.get('email')
  
  
    let pass = data.get('pass')

    let dob = data.get('dob')
  
  
  console.log("Sent email:" + email) 
  console.log("Sent pass:" + pass)
  runDBCallAsync(`http:api/register?email=${email}&pass=${pass}&dob=${dob}`)
  }; // end handler

  
  const theme = createTheme({
    palette: {
     
      secondary: {
        main: green[500],
      },
    },
  });
  



  
  return (
    <ThemeProvider theme={theme}>
    <Container component="main"  maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{
mt: 1 }}>

<TextField
          margin="normal"
          required
          fullWidth
          name="email"
          label="email"
          type="email"
          id="email"
          autoComplete="current-password"
          />
          <TextField
          margin="normal"
          required
          fullWidth
          name="pass"
          label="Pass"
          type="pass"
          id="pass"
          autoComplete="current-password"
          />

        <TextField
        margin="normal"
        required
        fullWidth
        name="dob"
        label="dob"
        type="text"
        id="dob"
        autoComplete=""
        />
         
        <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
        />
        <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        >
        Register
        </Button>



          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </Container>

    </ThemeProvider>

  );
}