import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/login/Login";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/dashboard/Dashboard";
import Test from "./components/Test";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route index element={<Test />}/>
        </Route>
      </Routes>
    </Router>
  );
}
