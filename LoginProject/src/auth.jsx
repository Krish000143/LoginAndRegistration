import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    
    const storeTokenInls = (servertoken) => {
        return localStorage.setItem('token',servertoken);
    };

    let isLoggedIn = !!token;  // token exists if it's not null or undefined
    const LogoutUser  = () => {
        setToken("");
        return localStorage.removeItem("token");
    
     };
    

    return (
        <>

        <AuthContext.Provider value={{isLoggedIn, storeTokenInls, LogoutUser}}>
            {children}
        </AuthContext.Provider>

        </>
 )

};

export const useAuth = ()=>{
    const authContextValue =  useContext(AuthContext);
    
    if(!authContextValue){
        throw new Error("useAuth must be used within the Auth Provider");
    };
  
    return authContextValue;
};