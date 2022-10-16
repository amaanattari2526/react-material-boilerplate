import {React} from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute({children}){

    let token = localStorage.getItem("token");

    return (
        !token ? <Navigate to="/login" /> : children
    )
}