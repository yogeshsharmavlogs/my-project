import React from "react";
import { Link } from "react-router-dom";

const Ukswan = () => {
  return (
    <div className="mainPage">
      <img src="uk-swan-under.png" alt="uk-swan-image" />
      <h1 className="text-4xl font-bold  text-[#201352] pl-56 pt-10">UKSWAN</h1>
      <p className="pl-56 pr-64 pt-4 text-justify">
        A State Wide Area Network (SWAN) is one of the core infrastructure
        components under the National e-Governance Plan of the Government of
        India. The main purpose of this network is to create a dedicated Closed
        User Group (CUG) network and provide a secured and high-speed
        connectivity for Government functioning and connecting State
        Headquarters, District Headquarters, Blocks Headquarters.
        <br />
        Information Technology Development Agency (ITDA) is the agency of the
        state working towards promotion & implementation of IT and e-Governance.
        It is the single-point of access to any IT business opportunity in
        Uttarakhand.UKSWAN is being implemented to provide connectivity up to
        Districts and Block level having a converged network with an integration
        of Voice, Data and Video services. The Network will help to the
        respective department of Govt. of Uttarakhand to use UKSWAN as a common
        infrastructure for integrating their offices thus help in effective
        means of communication. Presently, entire UKSWAN network is managed by
        the ITDA FMS Team (Network Operator) also involved for end level
        support.
        <br />
        It is a reliable network for vertical and horizontal connectivity
        throughout the State and will reduce the cost of communication between
        government departments at different locations and will provide secure
        network infrastructure to enable electronic transfer of sensitive data,
        payments etc. with improved capacity for disaster management. The UKSWAN
        is a highway of connectivity between G2G, G2C, G2B providing round the
        clock connectivity between districts and blocks/tehsils. The key
        highlights of SWAN are:
      </p>

      <ul className="pl-60 pt-4 list-disc text-justify pr-64">
        <li>
          Data Communication, Voice over Internet Protocol (VoIP), Video
          Conferencing (VC) and selective Internet available at all Locations.
        </li>
        <li> Last mile connectivity through Lease line or ISDN.</li>
        <li> Guaranteed uptime at blocks/tehsils.</li>
        <li> Power backup at all locations.</li>
      </ul>
    </div>
  );
};

export default Ukswan;
