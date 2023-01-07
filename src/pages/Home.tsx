import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx"
import { Link } from "react-router-dom"
import Footer from "../Components/Footer";
import Policy from "./Policy";
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '450px',
  width: '100%',
  color: '#fff',
  // lineHeight: '160px',
  textAlign: 'center',

};

const Home = () => {
  return (
    <div className="">
      <Carousel autoplay>
        <div>
          <div style={contentStyle}><img className="object-contain w-full h-[450px]" src="/cyber-security.png" alt="cyber-security" /></div>
        </div>
        <div>
          <div style={contentStyle}><img className="object-contain w-full h-[450px]" src="/apuni-sarkar.png" alt="apuni-sarkar" /></div>
        </div>
        <div>
          <div style={contentStyle}><img className="object-contain w-full h-[450px]" src="/itda.png" alt="itda-logo" /></div>
        </div>
        <div>
          <div style={contentStyle}><img className="object-contain w-full h-[450px]" src="/drone.png" alt="drone-logo" /></div>
        </div>
        <div>
          <div style={contentStyle}><img className="object-contain w-full h-[450px]" src="/cm.png" alt="cm-logo" /></div>
        </div>
      </Carousel>

      <div className="ml-44 mt-14 h-[381px] w-[900px] shadow-2xl rounded-md">
        <h1 className="pt-8 text-3xl font-bold text-center text-[#201352]">
          Official Website of ITDA
        </h1>
        <br />
        <p className="ml-36 pr-36 mb-24 text-center font-semibold text-[14px]">
          Government of Uttarakhand had registered a society named “Uttaranchal
          eGovernance Initiative Project Management Unit” which now functions as
          State's Nodal Agency for Information Technology Development Agency
          (ITDA). The ITDA is an independent and autonomous body to guide and
          monitor various projects and provide expert inputs, monitor, evaluate
          and execute State's IT initiatives and projects under the National
          e-Governance Plan
          <br /> (NeGP). <br />
          The Government of Uttarakhand intends to
          harness the full power of Information and Communication Technology
          (ICT) for improving the quality of life of its citizens, bring in
          accelerated social and economic development, ensure transparency in
          the Government decisions, accelerate the IT adoption amongst various
          user segments - all leading to an ideal e-society model through
          efficient, Service oriented, cost-effective, information networked,
          eco-conscious, and with year-on-year growth approach.
        </p>
      </div>
      <div className="image-link">
        <div className="first-row flex pt-20">
          <div className="h-10 rounded-2xl border"><img src="" alt="" /></div>
          <Link to="/cmHelpline"><img className="h-32 ml-56 hover:shadow-2xl" src="cm-helpline.png" alt="cm-helpline" /> </Link>
          <Link to="/dataCenter"><img className="h-32 ml-10 hover:shadow-2xl" src="data-center.png" alt="data-center" /></Link>
          <Link to="/eGatePass"><img className="h-32 ml-10 hover:shadow-2xl" src="e-gate-pass.png" alt="e-gate-pass" /></Link>
          <Link to="/apuniSarkar"><img className="h-32 ml-10 hover:shadow-2xl" src="apuni-sarkar-link.png" alt="apuni-sarkar-logo" /></Link>
        </div>

        <div className="second-row flex pt-6">
          <Link to="/unnati"><img className="h-32 ml-56 hover:shadow-2xl" src="unnati-logo.png" alt="unnati-logo" /> </Link>
          <Link to="/uidai"><img className="h-32 ml-10 hover:shadow-2xl" src="uidai-logo.png" alt="uidai-logo.png" /></Link>
          <Link to="/darc"><img className="h-32 ml-10 hover:shadow-2xl" src="darc-logo.png" alt="darc-logo" /></Link>
          <Link to="/ukswan"><img className="h-32 ml-10 hover:shadow-2xl" src="uk-swan-logo.png" alt="uk-swan-logo" /></Link>
        </div>

        <div className="third-row flex pt-6">
          <Link to="/eoffice"><img className="h-32 ml-56 hover:shadow-2xl" src="e-office-logo.png" alt="e-office-logo" /> </Link>
          <Link to="/digiLocker"><img className="h-32 ml-10 hover:shadow-2xl" src="digi-locker-logo.png" alt="digi-locker-logo" /></Link>
          <Link to="/negpProjects"><img className="h-32 ml-10 hover:shadow-2xl" src="negp-logo.png" alt="negp-projects-logo" /></Link>
          <Link to="/mmpProjects"><img className="h-32 ml-10 hover:shadow-2xl" src="mmp-logo.png" alt="mmp-projects-logo" /></Link>
        </div>
      </div>

      <div className="webLinks mt-10 flex">
        <a href="https://www.makeinindia.com/"><img className="h-36 hover:shadow-2xl" src="make-in-india.png" alt="make-in-india-logo" /> </a>
        <a href="https://www.skillindia.gov.in/"><img className="h-36 hover:shadow-2xl" src="skill-india.png" alt="skill-india-logo" /> </a>
        <a href="https://www.mygov.in/"><img className="h-36 hover:shadow-2xl" src="my-gov.png" alt="my-gov-logo" /> </a>
        <a href="https://etaal.gov.in/"><img className="h-36 hover:shadow-2xl" src="taal.png" alt="taal-logo" /> </a>
        <a href="https://nsdcindia.org/"><img className="h-36 hover:shadow-2xl" src="nsdc.png" alt="nsdc-logo" /> </a>
        <a href="https://www.indiacode.nic.in/"><img className="h-36 hover:shadow-2xl" src="india-core.png" alt="india-core-logo" /> </a>
        <a href="https://www.digilocker.gov.in/"><img className="h-36 hover:shadow-2xl" src="digi-locker.png" alt="digi-locker-logo" /> </a>
        <a href="https://www.india.gov.in/"><img className="h-36 hover:shadow-2xl" src="india-gov.png" alt="india-gov-logo" /> </a>
      </div>
      <div className="webLinks mt-10 flex">
        <a href="https://negd.gov.in/"><img className="h-36 hover:shadow-2xl" src="negd.png" alt="negd-logo" /> </a>
        <a href="https://gem.gov.in/"><img className="h-36 hover:shadow-2xl" src="gem-e-gov.png" alt="gem-e-gov-logo" /> </a>
        <a href="https://www.makeinindia.com/"><img className="h-36 hover:shadow-2xl" src="ras-system.png" alt="ras-system-logo" /> </a>
        <a href="https://data.gov.in/"><img className="h-36 hover:shadow-2xl" src="data-gov.png" alt="data-gov-logo" /> </a>
        <a href="https://mgov.gov.in/"><img className="h-36 hover:shadow-2xl" src="mobile-seva.png" alt="mobile-seva-logo" /> </a>
        <a href="https://web.umang.gov.in/"><img className="h-36 hover:shadow-2xl" src="umang.png" alt="umang-logo" /> </a>
      </div>
    </div>
  )
};
export default Home;
