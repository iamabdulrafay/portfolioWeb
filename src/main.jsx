import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Call from "./components/Call/Call.jsx";
import Layout from "../Layout.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Blog from "./components/Blog/Blog.jsx";
import BlogDetails from "./components/BlogDetails/BlogDetails.jsx";

const router = (
  <HashRouter>
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Call />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:userid" element={<BlogDetails />} />
    </Route>
  </HashRouter>
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>
);
