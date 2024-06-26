import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout.jsx";
import Login from "./Component/Login.jsx";
import Signup from "./Component/Signup.jsx";
import ContactUs from "./Component/ContactUs.jsx";
import Home from "./Component/Home.jsx";
import Student from "./Component/Student.jsx";
import CForm from "./Component/Createform.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./Component/ProtectedRoute.jsx";
import Result from "./Component/Result.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/quiz" element={<CForm />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/student/:pin" element={<Student />} />
        <Route path="" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
