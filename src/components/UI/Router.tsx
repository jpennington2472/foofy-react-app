import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "../pages/Blog.tsx";
import Contact from "../pages/ContactComponent/Contact.tsx";
import Welcome from "../pages/WelcomeComponent/Welcome.tsx";
import NavigationBar from "./NavigationBar.tsx";
import Pricing from "../pages/Pricing.tsx";
import About from "../pages/About.tsx";
import CostContainer from "../pages/CostsComponent/CostContainer.tsx";
import HouseCard from "../pages/HouseCardComponent/HouseCard.tsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Welcome />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
          <Route path="costs" element={<CostContainer />} />
          <Route path="listing" element={<HouseCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;