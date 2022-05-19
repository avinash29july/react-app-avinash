import React from "react";
import { Route, Routes } from "react-router-dom";
import EditableLayout from "../EditableLayout/EditableLayout";
import Home from "../Home/Home";

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editableTable" element={<EditableLayout />} />
      </Routes>
    </>
  );
};

export default Dashboard;
