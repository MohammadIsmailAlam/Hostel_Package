import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Login from "./auth/Login";
import Signup from "./auth/SignUp";
import Contacts from "./Pages/Contact";
import RoomDetails from './Pages/RoomDetails';

export const userContext = React.createContext(null);
function App() {
  const [userEmail, setUserEmail] = useState("");
  return (
    <>
      <userContext.Provider value={{ userEmail, setUserEmail }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/contact" element={<Contacts />} />
            <Route exact path="/room-details" element={<RoomDetails />} />
            <Route exact path="/contact" element={<Contacts />} />
          </Routes>
        </Router>
      </userContext.Provider>
    </>
  );
}
export default App;