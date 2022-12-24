import React from "react";

const DataCenter = () => {
  return (
    <div className="mainPage">
      <img src="data-center-under.png" alt="data-center-image" />
      <h1 className="text-4xl font-bold  text-[#201356] pl-56 pt-20">
        Uttarakhand State Data Center
      </h1>
      <p className="pl-56 pr-40 pt-4 text-justify">
        Government of Uttarakhand is committed to deploy IT as an effective tool
        for catalyzing accelerated economic growth, efficient governance and
        human resource development.
        <br />
        The Government of Uttarakhand recognized the potential of Information
        and Communication Technology (ICT) for rapid and all round development
        in general and transforming governance in particular. It was envisioned
        to make Government services accessible to the common man in his
        locality, through common service delivery outlets and ensure efficiency,
        transparency & reliability of such services at affordable costs to
        realize the basic needs of the common man.
        <br />
        To meet this objective, ITDA has set up a State Data Centre to provide
        efficient electronic service delivery of G2G, G2C and G2B services, to
        enable various State departments to host their services/applications on
        a common infrastructure leading to ease of integration and efficient
        management, ensuring that computing resources and the support
        connectivity infrastructure is adequately and optimally used.
        <br />
        The State Data Centre is a key-supporting element of e-Government
        Initiatives & businesses for delivering services to the citizens and
        Business with greater reliability, availability and serviceability with
        following Vision and Mission.
      </p>

      <h1 className="text-4xl font-bold  text-[#201356] pl-56 pt-10">
      Vision
      </h1>
      <p className="pl-56 pr-40 pt-4">
      To facilitate safe, secure and resilient hosting environment of the State of Uttarakhand and enable provisioning of trusted hosting infrastructure to fulfil the growing demand and facilitate state of the art service delivery to citizens.
      </p>

      <h1 className="text-4xl font-bold  text-[#201356] pl-56 pt-10">
      Mission
      </h1>
      <ol className="list-decimal pl-60 pt-4">
        <li>Ensure sustainable and trusted Data Centre capacity in the Uttarakhand State.</li>
        <li>Facilitating establishment of state-of-the-art Data Centres.</li>
      </ol>

      <h1 className="text-4xl font-bold  text-[#201356] pl-56 pt-10 pr-40">
      State Data Centre provides many functionalities
      and some of the key functionalities are: 
      </h1>
      <ul className="pl-60 pt-4 list-disc">
        <li>Hosting services thru Virtual Machine</li>
        <li>Secured accessibility to hosted applications</li>
        <li>SSL certificate provisioning for *.uk.gov.in sites</li>
        <li>Data repository with Secure Data Storage</li>
        <li>Online Delivery of Services</li>
        <li>Citizen Information/ Services Portal’</li>
        <li>DR functionality for Mission critical applications</li>
      </ul>
    </div>
  );
};

export default DataCenter;
