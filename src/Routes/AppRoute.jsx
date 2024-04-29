import React from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import LoginPage from "../page/LoginPage";
import Register from "../page/Register";
import EmployeeListPage from "../page/EmployeeListPage";
import AddEmployee from "../page/AddEmployee"
import EditEmployee from "../page/EditEmployee";

const AppRoute = () => {

  function AuthenticatedRoute({ children }) {
    if (localStorage.getItem("AuthToken")) {
      return children;
    }
    return <Navigate to="/" />;
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LoginPage />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/EmployeeList" element={<AuthenticatedRoute><EmployeeListPage /></AuthenticatedRoute>}></Route>
        <Route path="/AddEmployee" element={<AuthenticatedRoute><AddEmployee /></AuthenticatedRoute>}></Route>
        <Route path="/EditEmployee" element={<AuthenticatedRoute><EditEmployee /></AuthenticatedRoute>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
