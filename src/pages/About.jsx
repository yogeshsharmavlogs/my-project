import React from "react";
import { Link } from "react-router-dom";

const About = () => {

  return (
    <div>
      {/* //ABOUT US */}
      <div className="h-[450px] flex">
        <img className="h-[450px]" src="about-itda.png" alt="itda-building" />
        <div>
          <h1 className="font-bold text-4xl text-[#201352] pt-14">About Us</h1>
          <p className="text-xs font-semibold pt-6 pr-40 pl-4 text-justify">
            Government Of Uttarakhand had registered a society named
            “Uttaranchal EGovernance Initiative Project Management Unit” which
            now functions as State’s Nodal Agency for Information Technology
            Development Agency (ITDA). The ITDA is an independent and autonomous
            body to guide and monitor various projects and provide expert
            inputs, monitor, evaluate and execute State’s IT initiatives and
            projects under the National e-Governance Plan (NeGP).
            <br /> <br />
            The Government of Uttarakhand intends to harness the full power of
            Information and Communication Technology (ICT) for improving the
            quality of life of its citizens, bring in accelerated social and
            economic development, ensure transparency in the Government
            decisions, accelerate the IT adoption amongst various user segments
            – all leading to an ideal e-society model through efficient, Service
            oriented, cost-effective, information networked, eco-conscious, and
            with year-on-year growth approach. <br /> <br />
            ITDA is an independent and autonomous body under the Government of
            Uttarakhand. In order to achieve the goal of Digital Uttarakhand,
            ITDA will guide and monitor various Information and Communication
            Technology (ICT) projects for the implementation.
          </p>
        </div>
      </div>

      {/* // OBJECTIVES */}
      <div className="objectives flex pt-20">
        <div className="w-[700px]">
          <h1 className="font-bold text-4xl text-[#201352] text-right pr-16">
            Objectives
          </h1>
          <p className="text-xs font-semibold pt-6 pr-16 pl-16 text-justify">
            The ITDA shall act as an independent and autonomous body to guide
            and monitor the various projects and provide expert inputs as and
            when required and to monitor and evaluate different development
            schemes and to conduct different studies of the development
            projects.
            <br /> <br />
            The objectives of the Society would be the following:
            <br /> <br />
          </p>
          <ul className="list-disc text-xs text-justify pl-16 pr-24 font-semibold">
            <li>Implementation of the Projects relation to e-Governance;</li>
            <li>
              Take up parallel/simultaneous e-Governance and BPR projects, which
              are coterminous and complementary to the initiatives in the World
              Bank Projects;
            </li>
            <li>
              Take up initiatives of Good Governance with IT as an enabling tool
              to enhance effectiveness transparency, efficiency and
              accountability of the governmental process;
            </li>
            <li>
              To take up any other projects as per directions of State
              Government.
            </li>
          </ul>
        </div>
        <img
          className="h-[350px] w-[800px] pr-40"
          src="objective-logo.png"
          alt="logo-objective-section"
        />
      </div>

      {/* FUNCTIONS  */}
      <div className="functions flex pt-20">
        <img className="h-[450px]" src="flag.png" alt="flag-function" />
        <div>
          <h1 className="font-bold text-4xl text-[#201352] pl-10">Functions</h1>
          <p className="text-xs font-semibold pt-6 pr-40 pl-10 text-justify">
            To ensure uniformity, consistency and compatibility across various
            e-governance initiatives, it is critical to develop a holistic,
            redundant, scalable and futuristic infrastructure architecture plan
            based on defined standards with shared database across
            multi-departmental applications. This component envisages to set-up
            an IT Authority in the state to formulate overall architectural
            framework, manage and monitor state e-governance initiative. This
            has been done in the state and an Information Technology Development
            Agency (ITDA) has been constituted.
            <br /> <br />
            The Government of Uttarakhand intends to harness the full power of
            Information and Communication Technology (ICT) for improving the
            quality of life of its citizens, bring in accelerated social and
            economic development, ensure transparency in the Government
            decisions, accelerate the IT adoption amongst various user segments
            – all leading to an ideal e-society model through efficient, Service
            oriented, cost-effective, information networked, eco-conscious, and
            with year-on-year growth approach.
            <br /> <br />
            e-Governance is the buzzword of ICT that seeks to improve public
            service delivery. It enables the citizen to avail various services
            at their doorsteps, which is really the need of time. There are only
            limited examples of successful e-Governance projects. However, the
            efforts are on and various state governments in India have initiated
            a variety of e-Governance projects. The Government of Uttarakhand
            (GoU) has also planned several projects, many of which are also on
            the top priority agenda of the Government of India.
          </p>
        </div>
      </div>



    </div>
  );
};

export default About;
