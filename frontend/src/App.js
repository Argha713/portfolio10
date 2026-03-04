import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <ParallaxProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Layout>
      </ParallaxProvider>
    </BrowserRouter>
  );
}

export default App;
