import React from "react";
import { Link } from "react-router-dom";

const ApuniSarkar = () => {
  return (
    <div className="mainPage">
      <img src="apuni-sarkar-under.png" alt="apuni-sarkar-image" />
      <h1 className="text-4xl font-bold  text-[#201352] pl-56 pt-20">
        e-Services (Apuni Sarkar): Citizen Centric Services
      </h1>
      <p className="pl-56 pr-40 pt-4">
        in view the challenges faced by the citizens and the Government in
        citizen centric service delivery, ITDA, Department of information and
        Science Technology, Government of Uttarakhand has introduced Citizen
        Centric Service delivery platform eServices “Apuni Sakar” to enable all
        citizen centric services under one umbrella.
        <br /> <br />
         “Apuni Sakar” with a vision
        to transform state into a digitally empowered society delivery of
        citizen centric services with the “Faceless, Paperless, Cashless” manner
        under one umbrella. Ultimately, the goal is to introduce transparent and
        efficient system covering all facet of Govt. sectors, State, District
        and Tahsil HQ.
        <br /> <br />
         “Apuni Sakar” Project intend to provide Government
        services to citizens through e-District Center, Common Service Centers
        (CSC) and Individual User. Services from different departments are
        brought under one umbrella. It utilizes backend computerization to
        e-enable the delivery of services and ensures transparency and uniform
        application of rules. The project involves integrated and seamless
        delivery of services to public by automation. In a nutshell “Apuni
        Sakar” is a tailor-made program for minimizing effort and time to
        provide prompt and effective services to the public.
        <br />
        <br />
         Visit: <Link className="hover:underline font-semibold" to="https://eservices.uk.gov.in">https://eservices.uk.gov.in</Link>
      </p>
    </div>
  );
};

export default ApuniSarkar;
