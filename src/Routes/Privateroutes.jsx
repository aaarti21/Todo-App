import React from 'react'
import { Navigate } from 'react-router-dom';

export default function Privateroutes({children}){
    const login=JSON.parse(localStorage.getItem('login')) ||  false;
    const reg=JSON.parse(localStorage.getItem('reg')) ||  false;

    return(
        <>
         {!reg ? (
            <Navigate to="/register"/>
         ):reg && !login ?(
            <Navigate to="/login"/>
         ): (
            reg && login && children
        )}
        </>
    );
}