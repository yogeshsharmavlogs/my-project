import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx"
import { Link } from "react-router-dom"
import Footer from "../Components/Footer";
import Policy from "./Policy";
import Marquee from "react-fast-marquee";
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '100%',
  width: '100%',
  color: '#fff',
  // lineHeight: '160px',
  textAlign: 'center',

};

const Home = () => {
  return (
    <div className="mt-2">
      <Carousel autoplay>
        <div>
          <div style={contentStyle}><img className="object-fit w-full h-[600px]" src="/cyber-security.png" alt="cyber-security" /></div>
        </div>
        <div>
          <div style={contentStyle}><img className="object-fit w-full h-[600px]" src="/apuni-sarkar.png" alt="apuni-sarkar" /></div>
        </div>
        <div>
          <div style={contentStyle}><img className="object-fit w-full h-[600px]" src="/itda.png" alt="itda-logo" /></div>
        </div>
        <div>
          <div style={contentStyle}><img className="object-fit w-full h-[600px]" src="/drone.png" alt="drone-logo" /></div>
        </div>
        <div>
          <div style={contentStyle}><img className="object-fit w-full h-[600px]" src="/cm.png" alt="cm-logo" /></div>
        </div>
      </Carousel>

      <div className="ml-44 mt-14 h-[381px] w-[900px] shadow-xl rounded-md">
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
          <Link to="/cmHelpline"> <div className="h-[110px] w-[150px] ml-64 rounded-xl border text-center shadow-md hover:shadow-2xl"><img className="h-12 ml-12 mt-3" src="Group-one.png" alt="cm-helpline" /> <p className="text-[#1507A2] font-medium text-xs pt-1">CM Help Line <br /> "1905"</p></div></Link> 
          <Link to="/dataCenter"> <div className="h-[110px] w-[150px] ml-10 rounded-xl border text-center shadow-md hover:shadow-2xl"><img className="h-12 ml-12 mt-3" src="Group-two.png" alt="data-center" /> <p className="text-[#1507A2] font-medium text-xs pt-1">Uttarakhand State <br /> Data Centre </p></div></Link>
          <Link to="/eGatePass"> <div className="h-[110px] w-[150px] ml-10 rounded-xl border text-center shadow-md hover:shadow-2xl"><img className="h-12 ml-11 mt-4" src="Group-three.png" alt="e-gate-pass" /> <p className="text-[#1507A2] font-medium text-xs pt-2">eGate Pass</p></div></Link>
          <Link to="/apuniSarkar"> <div className="h-[110px] w-[150px] ml-10 rounded-xl border text-center shadow-md hover:shadow-2xl"><img className="h-12 ml-11 mt-5" src="Group-four.png" alt="apuni-sarkar" /> <p className="text-[#1507A2] font-medium text-xs pt-1">Apuni Sarkar</p></div></Link>
        </div>

        <div className="second-row flex pt-6">
          <Link to="/unnati"> <div className="h-[110px] w-[150px] ml-64 rounded-xl border text-center shadow-md hover:shadow-2xl"><img className="h-12 ml-12 mt-4" src="Group-five.png" alt="unnati-logo" /> <p className="text-[#1507A2] font-medium text-xs pt-1 pr-3">Unnati</p></div></Link> 
          <Link to="/uidai"> <div className="h-[110px] w-[150px] ml-10 rounded-xl border text-center shadow-md hover:shadow-2xl"><img className="h-12 ml-10 mt-4" src="Group-six.png" alt="uidai-logo" /> <p className="text-[#1507A2] font-medium text-xs pt-2">UIDAI (Aadhar)</p></div></Link>
          <Link to="/darc"> <div className="h-[110px] w-[150px] ml-10 rounded-xl border text-center shadow-md hover:shadow-2xl"><img className="h-12 ml-5 mt-4" src="Group-seven.png" alt="darc-logo" /> <p className="text-[#1507A2] font-medium text-xs pt-2">DARC</p></div></Link>
          <Link to="/ukswan"> <div className="h-[110px] w-[150px] ml-10 rounded-xl border text-center shadow-md hover:shadow-2xl"><img className="h-12 ml-12 w-10 mt-5" src="Group-eight.png" alt="uk-swan-logo" /> <p className="text-[#1507A2] font-medium text-xs pt-1 pr-3">UKSWAN</p></div></Link>
        </div>

        <div className="third-row flex pt-6">
          <Link to="/eoffice"> <div className="h-[110px] w-[150px] ml-64 rounded-xl border text-center shadow-md hover:shadow-2xl"><img className="h-12 ml-12 mt-4" src="Group-nine.png" alt="e-office-logo" /> <p className="text-[#1507A2] font-medium text-xs pt-2">e-Office</p></div></Link> 
          <Link to="/digiLocker"> <div className="h-[110px] w-[150px] ml-10 rounded-xl border text-center shadow-md hover:shadow-2xl"><img className="h-12 ml-12 mt-4" src="Group-ten.png" alt="digi-locker-logo" /> <p className="text-[#1507A2] font-medium text-xs pt-2"> DigiLocker</p></div></Link>
          <Link to="/negpProjects"> <div className="h-[110px] w-[150px] ml-10 rounded-xl border text-center shadow-md hover:shadow-2xl"><img className="h-12 ml-12 mt-4" src="Group-eleven.png" alt="negp-projects-logo" /> <p className="text-[#1507A2] font-medium text-xs pt-2">NeGP Projects</p></div></Link>
          <Link to="/mmpProjects"> <div className="h-[110px] w-[150px] ml-10 rounded-xl border text-center shadow-md hover:shadow-2xl"><img className="h-12 ml-12 mt-5" src="Group-twelve.png" alt="mmp-projects-logo" /> <p className="text-[#1507A2] font-medium text-xs pt-1">MMP Projects</p></div></Link>
        </div>
      </div>

      <div className="webLinks mt-10 flex">
        <Marquee>
        <span> <a href="https://www.makeinindia.com/"><img className="h-36" src="make-in-india.png" alt="make-in-india-logo" /> </a> </span>
        <span> <a href="https://www.skillindia.gov.in/"><img className="h-36" src="skill-india.png" alt="skill-india-logo" /> </a> </span>
        <span> <a href="https://www.mygov.in/"><img className="h-36" src="my-gov.png" alt="my-gov-logo" /> </a> </span>
        <span> <a href="https://etaal.gov.in/"><img className="h-36" src="taal.png" alt="taal-logo" /> </a> </span>
        <span> <a href="https://nsdcindia.org/"><img className="h-36" src="nsdc.png" alt="nsdc-logo" /> </a> </span>
        <span> <a href="https://www.indiacode.nic.in/"><img className="h-36" src="india-core.png" alt="india-core-logo" /> </a> </span>
        <span> <a href="https://www.digilocker.gov.in/"><img className="h-36" src="digi-locker.png" alt="digi-locker-logo" /> </a> </span>
        <span> <a href="https://www.india.gov.in/"><img className="h-36" src="india-gov.pngs" alt="india-gov-logo" /> </a> </span>
         
      <span> <a href="https://negd.gov.in/"><img className="h-36" src="negd.png" alt="negd-logo" /> </a> </span>
      <span> <a href="https://gem.gov.in/"><img className="h-36" src="gem-e-gov.png" alt="gem-e-gov-logo" /> </a> </span>
      <span> <a href="https://www.makeinindia.com/"><img className="h-36" src="ras-system.png" alt="ras-system-logo" /> </a> </span>
      <span> <a href="https://data.gov.in/"><img className="h-36" src="data-gov.png" alt="data-gov-logo" /> </a> </span>
      <span> <a href="https://mgov.gov.in/"><img className="h-36" src="mobile-seva.png" alt="mobile-seva-logo" /> </a> </span>
      <span> <a href="https://web.umang.gov.in/"><img className="h-36" src="umang.png" alt="umang-logo" /> </a> </span>
      </Marquee>
      </div>
    </div>
  )
};
export default Home;
