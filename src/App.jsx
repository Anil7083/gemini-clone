import React, { useContext } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { getAuth } from "firebase/auth";
import { app } from "./firebase/firebase";
import LandingPage from "./landingPage/landing";
import { UserContext } from "./UserContext";

const App = () => {
  const user =useContext(UserContext);

if (user === null){
  return(<LandingPage/>)
}
  return (
    <>
      <Sidebar />
      <Main />
    </>
  )
}
export default App;