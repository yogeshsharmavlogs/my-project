import React from "react";
import { Link } from "react-router-dom";

const DigiLocker = () => {
  return (
    <div className="mainPage">
      <img src="digi-locker-under.png" alt="digi-locker-image" />
      <h1 className="text-4xl font-bold  text-[#201352] pl-56 pt-10">
        Digi Locker
      </h1>
      <p className="pl-56 pr-40 pt-4 text-justify">
        DigiLocker is a flagship initiative of Ministry of Electronics & IT
        (MeitY) under Digital India programme. DigiLocker aims at ‘Digital
        Empowerment’ of citizen by providing access to authentic digital
        documents to citizen’s digital document wallet. The issued documents in
        DigiLocker system are deemed to be at par with original physical
        documents as per Rule 9A of the Information Technology (Preservation and
        Retention of Information by Intermediaries providing Digital Locker
        facilities) Rules, 2016 notified on
        <br />
        <br />
        February 8, 2017 vide G.S.R. 711(E).
      </p>

      <h1 className="text-4xl font-bold  text-[#201352] pl-56 pt-10">
        Benefits to Citizens
      </h1>

      <ul className="pl-60 pt-4 list-disc text-justify pr-64">
        <li>Important Documents Anytime, Anywhere!</li>
        <li> Authentic Documents, Legally at Par with Originals.</li>
        <li> Digital Document Exchange with the consent of the citizen. </li>
        <li>
          Faster service Delivery- Government Benefits, Employment, Financial
          Inclusion, Education, Health.
        </li>
      </ul>

      <h1 className="text-4xl font-bold  text-[#201352] pl-56 pt-10">
        Benefits to Agencies
      </h1>

      <ul className="pl-60 pt-4 list-disc text-justify pr-64">
        <li>
          Reduced Administrative Overhead: Aimed at the concept of paperless
          governance. It reduces the administrative overhead by minimizing the
          use of paper and curtailing the verification process.
        </li>
        <li> Digital Transformation: Provides trusted issued documents. Issued Documents available via DigiLocker are fetched in real-time directly from the issuing agency. </li>
        <li> Secure Document Gateway: Acts as a secure document exchange platform like payment gateway between trusted issuer and trusted Requester/Verifier with the consent of the citizen. </li>
        <li>
        Real Time Verification: Provides a verification module enabling government agencies to verify data directly from issuers after obtaining user consent.
        </li>
      </ul>

      <h1 className="text-4xl font-bold  text-[#201352] pl-56 pt-10">
      Uttarakhand Status:
      </h1>

      <ul className="pl-60 pt-4 list-disc text-justify pr-64">
        <li>
        Individual: 4.2 Lacs 
        </li>
        <li> Issued Certificate: 18.37 Lacs </li>
        <li>AIIMS Rishikesh, Uttarakhand is the first medical college is integrated with DigiLocker </li>
        <li>
        Uttarakhand state is in the 10th position all India based on digital documents certificate available by DigiLocker for the citizen
        </li>
        <li>
          Visit: <Link className="hover:underline font-semibold" to="https://digilocker.gov.in/statistics">https://digilocker.gov.in/statistics</Link>
        </li>
      </ul>
    </div>
  );
};

export default DigiLocker;
