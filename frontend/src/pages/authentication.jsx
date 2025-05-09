// // import * as React from 'react';
// // import Avatar from '@mui/material/Avatar';
// // import Button from '@mui/material/Button';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import TextField from '@mui/material/TextField';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Checkbox from '@mui/material/Checkbox';
// // import Link from '@mui/material/Link';
// // import Paper from '@mui/material/Paper';
// // import Box from '@mui/material/Box';
// // import Grid from '@mui/material/Grid';
// // import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// // import Typography from '@mui/material/Typography';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import { AuthContext } from '../contexts/AuthContext';
// // import { Snackbar } from '@mui/material';






// // const defaultTheme = createTheme();

// // export default function Authentication() {

    

// //     const [username, setUsername] = React.useState();
// //     const [password, setPassword] = React.useState();
// //     const [name, setName] = React.useState();
// //     const [error, setError] = React.useState();
// //     const [message, setMessage] = React.useState();


// //     const [formState, setFormState] = React.useState(0);

// //     const [open, setOpen] = React.useState(false)


// //     const { handleRegister, handleLogin } = React.useContext(AuthContext);

// //     let handleAuth = async () => {
// //         try {
// //             if (formState === 0) {

// //                 let result = await handleLogin(username, password)


// //             }
// //             if (formState === 1) {
// //                 let result = await handleRegister(name, username, password);
// //                 console.log(result);
// //                 setUsername("");
// //                 setMessage(result);
// //                 setOpen(true);
// //                 setError("")
// //                 setFormState(0)
// //                 setPassword("")
// //             }
// //         } catch (err) {

// //             console.log(err);
// //             let message = (err.response.data.message);
// //             setError(message);
// //         }
// //     }


// //     return (
// //         <ThemeProvider theme={defaultTheme}>

 
    
// //             <Grid container component="main" sx={{ height: '100vh' }}>
// //                 <CssBaseline />
// //                 <Grid
// //                     item
// //                     xs={false}
// //                     sm={4}
// //                     md={7}
                 
// //                 />
// //                 <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
// //                     <Box
// //                         sx={{
// //                             my: 8,
// //                             mx: 4,
// //                             display: 'flex',
// //                             flexDirection: 'column',
// //                             alignItems: 'center',
// //                         }}
// //                     >
// //                         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
// //                             <LockOutlinedIcon />
// //                         </Avatar>


// //                         <div>
// //                             <Button variant={formState === 0 ? "contained" : ""} onClick={() => { setFormState(0) }}>
// //                                 Sign In
// //                             </Button>
// //                             <Button variant={formState === 1 ? "contained" : ""} onClick={() => { setFormState(1) }}>
// //                                 Sign Up
// //                             </Button>
// //                         </div>

// //                         <Box component="form" noValidate sx={{ mt: 1 }}>
// //                             {formState === 1 ? <TextField
// //                                 margin="normal"
// //                                 required
// //                                 fullWidth
// //                                 id="username"
// //                                 label="Full Name"
// //                                 name="username"
// //                                 value={name}
// //                                 autoFocus
// //                                 onChange={(e) => setName(e.target.value)}
// //                             /> : <></>}

// //                             <TextField
// //                                 margin="normal"
// //                                 required
// //                                 fullWidth
// //                                 id="username"
// //                                 label="Username"
// //                                 name="username"
// //                                 value={username}
// //                                 autoFocus
// //                                 onChange={(e) => setUsername(e.target.value)}

// //                             />
// //                             <TextField
// //                                 margin="normal"
// //                                 required
// //                                 fullWidth
// //                                 name="password"
// //                                 label="Password"
// //                                 value={password}
// //                                 type="password"
// //                                 onChange={(e) => setPassword(e.target.value)}

// //                                 id="password"
// //                             />

// //                             <p style={{ color: "red" }}>{error}</p>

// //                             <Button
// //                                 type="button"
// //                                 fullWidth
// //                                 variant="contained"
// //                                 sx={{ mt: 3, mb: 2 }}
// //                                 onClick={handleAuth}
// //                             >
// //                                 {formState === 0 ? "Login " : "Register"}
// //                             </Button>

// //                         </Box>
// //                     </Box>
// //                 </Grid>
// //             </Grid>

// //             <Snackbar

// //                 open={open}
// //                 autoHideDuration={4000}
// //                 message={message}
// //             />

// //         </ThemeProvider>
// //     );
// // }



 


// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { AuthContext } from '../contexts/AuthContext';
// import { Snackbar, Typography } from '@mui/material';

// const defaultTheme = createTheme();

// export default function Authentication() {
//   const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const [name, setName] = React.useState('');
//   const [error, setError] = React.useState('');
//   const [message, setMessage] = React.useState('');
//   const [formState, setFormState] = React.useState(0);
//   const [open, setOpen] = React.useState(false);
//   const { handleRegister, handleLogin } = React.useContext(AuthContext);

//   const handleAuth = async () => {
//     try {
//       if (formState === 0) {
//         await handleLogin(username, password);
//       } else {
//         const result = await handleRegister(name, username, password);
//         setUsername('');
//         setPassword('');
//         setName('');
//         setMessage(result);
//         setOpen(true);
//         setError('');
//         setFormState(0);
//       }
//     } catch (err) {
//       const msg = err.response?.data?.message || 'Something went wrong';
//       setError(msg);
//     }
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <CssBaseline />
//       <Box
//         sx={{
//           height: '100vh',
//           width: '100vw',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           background: 'linear-gradient(135deg, #667eea, #764ba2)',
//         }}
//       >
//         <Paper
//           elevation={10}
//           sx={{
//             p: 5,
//             width: { xs: '90%', sm: '400px' },
//             backgroundImage: `url(/logo3.png)`,
//             backgroundColor: 'rgba(255, 255, 255, 0.95)',
//             borderRadius: '20px',
//             boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
//             transition: 'transform 0.3s ease',
//             '&:hover': {
//               transform: 'scale(1.03)',
//               boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
//             },
//           }}
//         >
//           <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <Avatar sx={{ m: 1, bgcolor: '#764ba2' }}>
//               <LockOutlinedIcon />
//             </Avatar>

//             <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>
//               {formState === 0 ? 'Welcome Back' : 'Create an Account'}
//             </Typography>

//             <Box sx={{ mt: 2, mb: 2 }}>
//               <Button
//                 variant={formState === 0 ? 'contained' : 'outlined'}
//                 onClick={() => setFormState(0)}
//                 sx={{ mr: 1 }}
//               >
//                 Sign In
//               </Button>
//               <Button
//                 variant={formState === 1 ? 'contained' : 'outlined'}
//                 onClick={() => setFormState(1)}
//               >
//                 Sign Up
//               </Button>
//             </Box>

//             <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
//               {formState === 1 && (
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="name"
//                   label="Full Name"
//                   name="name"
//                   autoFocus
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               )}

//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="username"
//                 label="Username"
//                 name="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />

//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               {error && (
//                 <Typography variant="body2" color="error" sx={{ mt: 1 }}>
//                   {error}
//                 </Typography>
//               )}

//               <Button
//                 type="button"
//                 fullWidth
//                 variant="contained"
//                 sx={{
//                   mt: 3,
//                   mb: 2,
//                   background: '#667eea',
//                   '&:hover': {
//                     background: '#5a67d8',
//                   },
//                 }}
//                 onClick={handleAuth}
//               >
//                 {formState === 0 ? 'Login' : 'Register'}
//               </Button>
//             </Box>
//           </Box>
//         </Paper>

//         <Snackbar
//           open={open}
//           autoHideDuration={4000}
//           message={message}
//           onClose={() => setOpen(false)}
//         />
//       </Box>
//     </ThemeProvider>
//   );
// }


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/authContext';
import { Snackbar } from '@mui/material';

const defaultTheme = createTheme();

export default function Authentication() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  const handleAuth = async () => {
    try {
      if (formState === 0) {
        await handleLogin(username, password);
      } else {
        const result = await handleRegister(name, username, password);
        setUsername('');
        setPassword('');
        setName('');
        setMessage(result);
        setOpen(true);
        setError('');
        setFormState(0);
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Something went wrong';
      setError(msg);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
  sx={{
    position: 'relative',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  {/* Blurred Background Layer */}
  <Box
    sx={{
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundImage: `url('/unnamed.png')`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      filter: 'blur(5px)',
      zIndex: -1,
    }}
  />
        <Paper
          elevation={6}
          sx={{
            p: 4,
            width: { xs: '90%', sm: '400px' },
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            borderRadius: 2,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>

            <Box sx={{ mb: 2 }}>
              <Button
                variant={formState === 0 ? 'contained' : 'outlined'}
                onClick={() => setFormState(0)}
                sx={{ mr: 1 }}
              >
                Sign In
              </Button>
              <Button
                variant={formState === 1 ? 'contained' : 'outlined'}
                onClick={() => setFormState(1)}
              >
                Sign Up
              </Button>
            </Box>

            <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
              {formState === 1 && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}

              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p style={{ color: 'red' }}>{error}</p>}

              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleAuth}
              >
                {formState === 0 ? 'Login' : 'Register'}
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        message={message}
        onClose={() => setOpen(false)}
      />
    </ThemeProvider>
  );
}

