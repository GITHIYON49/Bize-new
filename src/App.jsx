import React from "react";
import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import { Navbar, Footer, ScrollToTop,LinkWhatsapp } from "./components";
import {
  Home,
  About,
  Contact,
  Registration,
  Login,
  Empowerment,
  Enhancement,
  Engagement,
} from "./pages";
function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/engagement"} element={<Engagement />} />
        <Route path={"/empowerment"} element={<Empowerment />} />
        <Route path={"/enhancement"} element={<Enhancement />} />
        <Route path={"/registration"} element={<Registration />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
      <LinkWhatsapp/>
      <Toaster/>
      <Footer />
    </>
  );
}

export default App;
