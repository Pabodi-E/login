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
     marginTop: '60px',
     marginRight:'30px',
     marginLeft:'30px',
    display: 'flex',
    flexDirection: 'column',
   
    height:'100%',
    alignitems:'center'
  
  },
  
  avatar:{
    marginLeft:'30px',
    margintop: '20px'
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
          {/* <Typography>Find a place to stay safe</Typography> */}
        <div className={classes.paper} >
        
          
          {/* <Typography component="h1" variant="h4" color='primary' textalign='right' >
            Boadima Protal
          </Typography> */}
          <Typography component="h2" variant='h5' color='primary' >
            SignUp
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="first name"
              label="First Name"
              name="first name"
              autoComplete="first name"
              autoFocus
              size='small'
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="last name"
              label="Last Name"
              name="last name"
              autoComplete="last name"
              autoFocus
              size='small'
            />
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="tp"
              label="Telephone No"
              name="tp"
              autoComplete="tp"
              autoFocus
              size='small'
            /> 
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nic"
              label="NIC No"
              name="nic"
              autoComplete="nic"
              autoFocus
              size='small'
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
              size='small'
            /> 
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirm password"
              label="Confirm Password"
              type="confirm password"
              id="confirm password"
              autoComplete="current-password"
              size='small'
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
              SignUp
            </Button>
            
              
              <Grid container className={classes.get}>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {"Already have an account? Login here"}
                </Link>
              </Grid>
              </Grid>
            
            
          </form>
         
        </div>
      </Grid>
    </Grid>
    </div>
    

  );
}