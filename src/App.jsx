import React from "react";
import { Route, Routes } from "react-router";
import { Navbar, Footer, ScrollToTop } from "./components";
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
import SamplePage from "./pages/samplePage/SamplePage";
function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      {/* <SamplePage/> */}
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
      <Footer />
    </>
  );
}

export default App;
