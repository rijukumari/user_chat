import React from "react";
import Left from "./components/Left/Left";
import Right from "./components/right/Right";
import Logout from "./components/Logout/Logout";
import { Singup } from "./components/Singup";
// import Login from "./components/Login";
import { useAuth } from "./components/context/AuthProvider";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Loading from "./components/Loading";

function App() {
  const { authUser, setAuthUser } = useAuth();
  console.log(authUser);
  return (
    <>
    {/* <Loading/> */}
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen">
                <Logout />
                <Left />
                <Right />
              </div>
            ) : (
              <Navigate to={ "/login"} />
            )
          }
        />
        <Route path="/login" element = { authUser?<Navigate to = "/"/> : <Login/>}/>
        <Route path="/singup" element = {authUser?<Navigate to = "/"/> : <Singup/>}/>
      </Routes>
    </>
  );
}

export default App;
