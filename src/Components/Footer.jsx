import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (<>
    <div className="main-Footer mt-14">
        <div className="first-Footer flex h-[290px] w-[100%] bg-[#2900C5]">
             <img className="inline-block h-[80px] pl-40 mt-10" src="footer-logo.png" alt="footer-logo" />
             <ol className="list text-white pt-10 leading-6 font-medium text-sm pl-32">
           <li><Link to="/">Home</Link></li>
           <li><Link to="/about">About Us</Link></li>
           <li><Link to="/who">Who's who</Link></li>
           <li><Link to="/tenders">Tender</Link></li>
           <li><Link to="/policies">Policy & Guidlines</Link></li>
           <li><Link to="/contacts">Contact Us</Link></li>
        </ol>

        <ol className="list text-white pt-10 leading-6 font-medium text-sm pl-60">
           <li><Link to="#">Copyright Policy</Link></li>
           <li><Link to="#">Hyperlink Policy</Link></li>
           <li><Link to="#">Privacy Policy</Link></li>
           <li><Link to="#">Accessibility Statement</Link></li>
           <li><Link to="#">Terms & Condition</Link></li>
           <li><Link to="#">Help</Link></li>
           <li><Link to="#">Disclaimer</Link></li>
           <li><Link to="#">Web Information Manager</Link></li>
           <li><Link to="#">Feedback & Suggestions</Link></li>
        </ol>
        </div>

        <div className="second-footer flex h-[180px] bg-[#F9FAFB]">
              <img className="h-20 inline-block mt-6 ml-24" src="logouk.png" alt="logo-uk" />

        <div className="mainPart text-center text-xs pl-28 pt-4">
        <p className="para1">
        Contents of this website is published and managed by Information Technology Development Agency (ITDA),  <br />
Department of Information and Science Technology, Government of Uttarakhand.
        </p>

        <p className="para2 pt-4">
        For any queries regarding this website please contact Web Information Manager.  <br /> <br />

This Website is Designed, Developed, Hosted and Maintained by ITDA, Government of Uttarakhand <br />  <br />

Copyright © 2010 - ITDA | All Rights Reserved <br />
        </p>
        </div>
        </div>
    </div>
    </>)
};

export default Footer;