import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from './auth';

// const {LogoutUser} = useState()

// let isLoggedIn = !!token;


export const Logout = () => {
    const {LogoutUser} = useAuth();
    useEffect(() => {

        LogoutUser();

    }, [LogoutUser]);
    
    
    
    return (
        <>
        <Navigate to="/login" />
        </>
    );
};

