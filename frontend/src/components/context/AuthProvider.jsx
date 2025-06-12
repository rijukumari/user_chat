import React, { createContext, useState } from "react";
import { useContext } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const initialUserState =
    Cookies.get("jwt") || localStorage.getItem("messenger");
  const [authUser, setAuthUser] = useState(
    initialUserState ? JSON.parse(initialUserState) : undefined
  );
  return <AuthContext.Provider value={{authUser,setAuthUser}}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
