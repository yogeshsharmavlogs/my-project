import React from "react";
import { Link } from "react-router-dom";

const Uidai = () => {
  return (
    <div className="mainPage">
      <img src="uidai-under.png" alt="uidai-image" />
      <h1 className="text-4xl font-bold  text-[#201352] pl-56 pt-20">
        UIDAI Aadhar
      </h1>
      <p className="pl-56 pr-40 pt-4 text-justify">
        Department Name : Information Technology Development Agency (ITDA),
        Department of Information Technology Government of Uttarakhand
        <br />
        Vision:“To empower residents of India with a unique identification and a
        digital platform to authenticate anytime and anywhere.”
        <br />
        Aadhaar number is a 12 digit random number issued to an individual after
        a process of verification laid down by the authority. Aadhaar number is
        issued irrespective of age, gender, cast, and religion, only requirement
        is that the individual should be resident of India.
        <br />
        With an easy process of minimal demographic and biometric information an
        individual Indian citizen can get the Aadhaar number at the time of
        enrollment process. It cost nothing to enroll and register for Aadhaar.
        <br />
        Aadhaar identity platform with its inherent features of uniqueness,
        Authentication, Financial address and e-KYC, enable the Government of
        India to directly reach residents of the country in delivery of various
        subsidies, benefits and services by using the resident Aadhaar number
        only.
      </p>
    </div>
  );
};

export default Uidai;
