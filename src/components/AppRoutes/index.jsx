import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayouts";
import AuthLayout from "../../layouts/AuthLayout";
import AdminLayout from "../../layouts/AdminLayout";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import PostDetail from "../../pages/PostDetail";
import Contact from "../../pages/Contact";
import Privacy from "../../pages/Privacy";
import ScrollToTop from "../ScrollToTop";

import Login from "../../pages/Login";
import Register from "../../pages/Register";
import ForgotPassword from "../../pages/ForgetPassword";

import Dashboard from "../../pages/Dashboard";
import UserManage from "../../pages/Users";
import Settings from "../../pages/Settings";

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-manage" element={<UserManage />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}
