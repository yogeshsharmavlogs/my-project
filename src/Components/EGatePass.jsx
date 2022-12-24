import React from "react";
import { Link } from "react-router-dom";

const EGatePass = () => {
  return (
    <div className="mainPage">
      <img src="gate-pass-under.png" alt="e-gate-pass-image" />
      <h1 className="text-4xl font-bold  text-[#201352] pl-56 pt-10">
        e Gate Pass
      </h1>
      <p className="pl-56 pr-56 pt-4 text-justify">
        Uttarakhand eGatePass is an initiative by the Government of Uttarakhand
        to facilitate the common man. Uttarakhand eGatePass facility enables the
        citizens to have a smooth and simple process of making an appointment.
        It will bridge the gap between the Government and the common man and
        will enhance the opportunity of a common man to meet a government
        officer, hassle free. It has advanced features of eliminating all the
        cumbersome and tedious procedure of making a request for an appointment
        and then visiting the premises. Uttarakhand eGatePass is a cloud-based
        application software developed by ITDA with an easy-to-use graphical
        interface and embedded with comprehensive security features. This is a
        unified and centralized application and can be easily implemented in any
        Uttarakhand Government offices with minimum customization efforts. It
        assists in maintaining all-relevant information about the visitor, which
        is automatically saved in a database. In the 2nd Phase ITDA is planning
        to integrate this application with visitors’ Aadhaar card facility.
        Uttarkhand Secretariat e-Gatepass Portal is a Digital India Initiative
        By ITDA, Uttarkhand which is perfectly suited for Visitors.
        <br /><br />
         Visit: <Link className="hover:underline font-semibold" to="https://egatepass.uk.gov.in/apply_e_pass.php">https://egatepass.uk.gov.in/apply_e_pass.php</Link>
      </p>
    </div>
  );
};

export default EGatePass;
