import { Typography, Button } from '@mui/material';
import { React, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {

    const [loggedin, setLoggedin] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
    // CHECKING:  IF USER IS LOGGEDIN THEN REDIRECT TO DASHBOARD
    if(localStorage.getItem("token")) {
        navigate("/dashboard");
    }
    });


    const handleLogin = () => {

        localStorage.setItem("token", "123456789");

        if(localStorage.getItem("token")) {
            setLoggedin(true);
            navigate("/dashboard");
        }
    
    }

    return (

       

        <Typography>
            Press <Button variant="text" onClick={handleLogin}>Login</Button> to start your session
            </Typography>
    );
}

export default Login;