import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
 import { Navigate, useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, TextField } from '@mui/material';

 const Login = () => {

    let navigate = useNavigate();

    const validationSchema = yup.object({
      email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
      password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    });

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        // alert(JSON.stringify(values, null, 2));
        localStorage.setItem("token", "123456789");

        if(localStorage.getItem("token")) {
          navigate("/dashboard");
        }
      },
    });

   return (
    <div xs={{mt:3}}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          size="small"
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          size="small"
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button  color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
   )
 }
 
 export default Login;