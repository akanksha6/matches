import React from "react";
import {Navigate} from 'react-router-dom';
import { getAuth } from "firebase/auth";

const AuthGuard = (Component) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if(user){
        return <Component user={user}/>
    } else {
        return <Navigate to='/' />
    }
}

export default AuthGuard;
