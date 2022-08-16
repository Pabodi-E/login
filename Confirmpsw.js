import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from './boardima.jpeg';
import img2 from './Group 59642.svg';






const useStyles = makeStyles((theme) => ({
  root: {
    
    height:'100vh',
   backgroundColor:'white',
   fontFamily:'Poppins-Regular'
    
  },
  
  paper: {
    //  margin: theme.spacing(10,6),
    margin:'10px',
     margintop: '80px',
     marginRight:'30px',
     marginLeft:'30px',
    display: 'flex',
    flexDirection: 'column',
   
    height:'100%',
    alignitems:'center'
  
  },
  
  avatar:{
    marginLeft:'30px'
  },
  
  form: {
    width: '100%', 
    margintop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    bgcolor:'primary',
    
  },
  forget:{
    textAlign:'right',
  },
  get:{
    textAlign:'center',
  },
  
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container component="main"  alignItems="center" justifyContent="center" >
      <CssBaseline />
      <Grid item xs={12} sm={4} md={8} >
        <img src={logo} width="100%" alt=""  margintop="30px" height="100%" elevation={0}  backgroundrepeat= 'no-repeat' backgroundsize='cover'
    backgroundposition='center'/>
      </Grid>
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={0}  square>
          <img src={img2} alt=''className={classes.avatar} height={50} />
        <div className={classes.paper} >
        
          
          {/* <Typography component="h1" variant="h4" color='primary' textalign='right' >
            Boadima Protal
          </Typography> */}
          <Typography component="h2" variant='h5' color='primary' >
            Confirm Password
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember"  color="primary"/>}
              label="Remember me"
              
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              className={classes.submit}
              textalign="left"
            >
              Confirm Password
            </Button>
            <Grid container className={classes.forget}>
              <Grid item xs  >
                <Link href="/dashboard" variant="body2" >
                  {"Forgot password?"}
                </Link>
              </Grid>
              <Grid container className={classes.get}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
              </Grid>
            </Grid>
            
          </form>
         
        </div>
      </Grid>
    </Grid>
    </div>
    

  );
}