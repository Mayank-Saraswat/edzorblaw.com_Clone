import MainPage from "./MainPage";
import SignUpForm from "./SignUpForm/SignUpPage";
import Blogs from "./Blogs";
import Premium from "./Premium";
import { Route, Routes } from "react-router-dom";
import Podcast from "./Podcast";
import React from "react";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/premium" element={<Premium />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/podcast" element={<Podcast />} />
    </Routes>
  );
};

export default AppRoutes;
