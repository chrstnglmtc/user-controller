import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/login/Login";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/shared/Profile";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element ={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}
