import React from 'react'
import { Link } from 'react-router-dom'
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Contacts = () => {
  return (
    <div className="Contacts">
        <h1 className="text-4xl font-bold font text-[#201352] pl-40 pt-6">
            Contact Us
        </h1>
        <img className="h-[400px] pl-40 pt-10" src="map.png" alt="google-map" />
        <h1 className="text-4xl font-bold font text-[#201352] pl-40 pt-6">
          Location
        </h1>
        <p className="text-[#6B7280] font-normal text-base pt-4 pl-40 pr-[350px] leading-5">
        Information Technology Development Agency (ITDA), Department of Information and Science Technology, Government of Uttarakhand
        <br /> <br />
        IT Bhawan Plot No. IT-07, Sahastradhara Rd, IT Park, Dehradun, Uttarakhand 248013
        <br /> <br />
        Telephone - 0135 2608330
        </p>
    </div>
  )
}

export default Contacts;