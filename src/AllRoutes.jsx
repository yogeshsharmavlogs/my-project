import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Tenders from "./pages/Tenders";
import Carrers from "./pages/Carrers";
import Contacts from "./pages/Contacts";
import CmHelpline from "./Components/CMHELPLINE";
import Who from "./pages/Who";
import Policy from "./pages/Policy";
import DataCenter from "./Components/DataCenter";
import EGatePass from "./Components/EGatePass";
import ApuniSarkar from "./Components/ApuniSarkar";
import Unnati from "./Components/Unnati";
import Uidai from "./Components/Uidai";
import Darc from "./Components/Darc";
import Ukswan from "./Components/Ukswan";
import Eoffice from "./Components/Eoffice";
import DigiLocker from "./Components/DigiLocker";
import NegpProjects from "./Components/NegpProjects";
import MmpProjects from "./Components/MmpProjects";
import RTI from "./pages/RTI";
import GoverningBody from "./pages/GoverningBody";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import MPR from "./pages/MPR";
import ActRules from "./pages/ActRules";
import Agreement from "./pages/Agreement";
import MOM from "./pages/MOM";

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
          <Route exact path="/rti" element={<RTI />} />
          <Route exact path="/governingBody" element={<GoverningBody />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/mpr" element={<MPR />} />
          <Route exact path="/actRules" element={<ActRules />} />
          <Route exact path="/agreement" element={<Agreement />} />
          <Route exact path="/mom" element={<MOM />} />


          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default AllRoutes;
