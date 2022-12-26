import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Tenders from "../pages/Tenders";
import Carrers from "../pages/Carrers";
import Contacts from "../pages/Contacts";
import CmHelpline from "./CMHELPLINE";
import Who from "../pages/Who";
import Policy from "../pages/Policy";
import DataCenter from "./DataCenter";
import EGatePass from "./EGatePass";
import ApuniSarkar from "./ApuniSarkar";
import Unnati from "./Unnati";
import Uidai from "./Uidai";
import Darc from "./Darc";
import Ukswan from "./Ukswan";
import Eoffice from "./Eoffice";
import DigiLocker from "./DigiLocker";
import NegpProjects from "./NegpProjects";
import MmpProjects from "./MmpProjects";

const AllRoutes = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/tenders" element={<Tenders />} />
          <Route exact path="/carrers" element={<Carrers />} />
          <Route exact path="/who" element={<Who />} />
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/policy" element={<Policy />} />
          <Route exact path="/cmHelpline" element={<CmHelpline />} />
          <Route exact path="/dataCenter" element={<DataCenter />} />
          <Route exact path="/eGatePass" element={<EGatePass />} />
          <Route exact path="/apuniSarkar" element={<ApuniSarkar />} />
          <Route exact path="/unnati" element={<Unnati />} />
          <Route exact path="/uidai" element={<Uidai />} />
          <Route exact path="/darc" element={<Darc />} />
          <Route exact path="/ukswan" element={<Ukswan />} />
          <Route exact path="/eoffice" element={<Eoffice />} />
          <Route exact path="/digiLocker" element={<DigiLocker />} />
          <Route exact path="/negpProjects" element={<NegpProjects />} />
          <Route exact path="/mmpProjects" element={<MmpProjects />} />


          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default AllRoutes;
