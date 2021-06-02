import React, { useState, useEffect, createContext } from "react";
import { auth } from '../firebase';

export const UserContext = createContext({ user: null });

export default  ({children}) => {
    const [user, setUser] = useState(null);
    const [inicioSesion, setInicioSesion] = useState(false)
  
     useEffect(() => {
      auth.onAuthStateChanged((usuario) => {
        if (usuario) {
          const { displayName, email } = usuario;
          setUser({
            displayName,
            email,
          })
          setInicioSesion(true)
        }else{
          setUser(null)
          setInicioSesion(false)
        }
      });
    }, [inicioSesion]);
  
  
    return (
      <UserContext.Provider value={{user, inicioSesion, setInicioSesion}}>
          {children}
      </UserContext.Provider>
    );
  };