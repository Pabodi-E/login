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
            Login
          </Typography>
          <form className={classes.form} noValidate>
            
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
              LogIn
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
// import React from 'react'
// import {
//   Button,
//   Card,
//   CardContent,
//   Grid,
//   TextField,
//   Typography,
// } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles';

// // import { Link, useNavigate } from 'react-router-dom'
//  import image from "./psw_clipart.png"
// // import { useDispatch, useSelector } from 'react-redux'
// // import { loginUser } from '../api/features/userSlice'
// // import CustomSnackBar from '../components/CustomSnackBar'
// // import CircularProgress from '@material-ui/core/CircularProgress'
// // import Cookies from 'universal-cookie'
// // import http from '../http-common'
// // import useAuth from '../auth/hooks/useAuth'


// const useStyles = makeStyles(() => ({
//     root: {
//       height: '100vh',
//       padding:'0%',
//       margin: '0%' ,
      
//     },
//   }
// )
// )

// function Login() {
//   const classes = useStyles();
// //   const { login } = useAuth()
// //   const navigate = useNavigate()
// //   const [user, setUser] = useState({
// //     email: '',
// //     pwd: '',
// //   })

// //   const [isError, seIstError] = useState(false)
// //   const [usrdata, setUsrsData] = useState([])

// // //   const dispatch = useDispatch()

// //   const { loginData, isLoing } = useSelector((state) => ({
// //     ...state.user,
// //   }))

//   const loginSubmit = async (e) => {
//     e.preventDefault()
//     try {
//     //   const response = await http.post('/login', user)
//     //   if (response.data.data != null) {
//     //     login(response.data.data)
//     //     navigate('/dashboard/home')
//     //     // localStorage.setItem('auth', response.data.data)
//     //   }
//     } catch (error) {
//       console.log(error)
//     //   seIstError(true)
//     }
//   }

//   const onChangeInput = (e) => {
//     // const { name, value } = e.target
//     // setUser({ ...user, [name]: value })
//   }

//   return (
//     <Grid
//       container
//       spacing={2}
//       style={{ minHeight: '38vh' }}
//       alignItems="center"
//       justifyContent="center"
//     >
//       <Grid item xs={12} sm={4} md={6} style={{ padding: '0px' }}>
//         <img
//           src={image}
//           style={{ width: '100%', height: '100vh', objectFit: 'cover'}}
//           alt="Hello , We'll back to you soon..."
//           elevation={0}
//         />
//       </Grid>
//       <Grid item
//         xs={12}
//         sm={6}
//         alignItems="center"
//         direction="column"
//         style={{ padding: 10 }}
//       >
//         <Grid item>
//           <Card style={{ minWidth: 500 }}>
//             <CardContent>
//               <Grid
//                 item
//                 container
//                 direction="column"
//                 alignItems="center"
//                 style={{ margin: '1em' }}
//               >
//                 <Grid item>
//                   <Typography variant="h2">Boardima</Typography>
//                 </Grid>
//                 <Grid item>
//                   <Typography variant="body2">
//                     "find a boadrim place to stay safe"
//                   </Typography>
//                 </Grid>
//               </Grid>

//               <Grid
//                 item
//                 container
//                 direction="column"
//                 justifyContent="center"
//                 alignItems="center"
//               >
//                 <form onSubmit={loginSubmit} method={'POST'}>
//                   <Grid item>
//                     <Typography variant="h3">Login</Typography>
//                   </Grid>

//                   <Grid item>
//                     <Typography variant="body1">Username</Typography>
//                     <TextField
//                       required
//                       type="email"
//                       name="email"
//                       margin="normal"
//                       variant="outlined"
//                       style={{ width: '25em' }}
//                     //   value={user.email}
//                       onChange={onChangeInput}
//                     />
//                   </Grid>
//                   <Grid item>
//                     <Typography variant="body1">Password</Typography>
//                     <TextField
//                       type="password"
//                       name="pwd"
//                       required
//                       autoComplete="on"
//                       margin="normal"
//                       variant="outlined"
//                       style={{ width: '25em' }}
//                     //   value={user.pwd}
//                       onChange={onChangeInput}
//                     />
//                   </Grid>
//                   {/* {isError ? ( */}
//                     <Grid
//                       item
//                       container
//                       alignItems="center"
//                       justifyContent="flex-start"
//                       style={{ marginBottom: '1em' }}
//                     >
//                       <Typography
//                         variant="body2"
//                         style={{ color: 'red', fontWeight: 'bold' }}
//                       >
//                         * Username or Password Incorrect !
//                       </Typography>
//                     </Grid>
//                   {/* ) : null} */}
//                   <Grid
//                     item
//                     container
//                     alignItems="center"
//                     justifyContent="center"
//                   >
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       type="submit"
//                     //   disabled={
//                     //     isLoing && Object.keys(loginData).length == 0
//                     //       ? true
//                     //       : false
//                     //   }
//                     >
//                       Login
//                     </Button>
//                   </Grid>
//                 </form>
//                 <Grid
//                   item
//                   container
//                   alignItems="center"
//                   justifyContent="flex-end"
//                 >
//                   <Button
//                     variant="text"
//                     style={{ textTransform: 'lowercase' }}
//                     // component={Link}
//                     // to="/recover"
//                   >
//                     forgot password ?
//                   </Button>
//                 </Grid>
//                 <Grid item>
//                   <Typography variant="body2">
//                     Dont't have an account
//                     <Button
//                       variant="text"
//                       style={{ color: '#0b72B9', textTransform: 'lowercase' }}
//                     //   component={Link}
//                     //   to="/signup"
//                     >
//                       Register ?
//                     </Button>
//                   </Typography>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Grid>
//   )
// }

// export default Login
// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import logo from './psw_clipart.png';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: '100vh',
//     margin: '0%',
//   },
  
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SignInSide() {
//   const classes = useStyles();

//   return (
//     <Grid container component="main" className={classes.root}>
//       <CssBaseline />
//       <Grid item xs={false} sm={4} md={7}>
//       <img src={logo}  alt=""   elevation={0}  />
//       </Grid>
//       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <form className={classes.form} noValidate>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//             <Box mt={5}>
              
//             </Box>
//           </form>
//         </div>
//       </Grid>
//     </Grid>
//   );
// }