import React from "react";
import { Link } from "react-router-dom";

const Unnati = () => {
  return (
    <div className="mainPage">
      <img src="unnati-under.png" alt="unnati-image" />
      <h1 className="text-4xl font-bold  text-[#201352] pl-56 pt-20">Unnati</h1>
      <p className="pl-56 pr-40 pt-4 text-justify">
        “Unnati” is centralized Real Time Proposals & Projects Monitoring System
        to monitor and follow up proposals from the departments of Government of
        Uttarakhand which are pending in Government of India. This system will
        enable State Government departments to raise proposals which are pending
        in Government of India and require follow up. The present status of the
        pending proposals can be seen instantaneously and the platform provides
        seamless communication among the stakeholders.
        <br />
        “Unnati” supports Uttarakhand Government can monitor proposal requests
        from across departments, assign them to Liaison team, track their
        progress, and ensure timely closures – all while tracking the progress,
        and measuring performance to spot and open up bottlenecks that stand in
        the way of complete the proposal request.
        <br />
        “Unnati” helps Uttarakhand Government can triage issue requests from
        across departments, assign them to Liaison team, track their progress,
        and ensure timely closures – all while tracking the progress, and
        measuring performance to spot and open up bottlenecks that stand in the
        way of complete the proposal request.
        <br />
        “Unnati” Portal is being developed to monitor the desired project
        progress and track their issues for better interdepartmental
        coordination. This Portal is Accessible to:
      </p>

      <ul className="pl-60 pt-4 list-disc">
        <li>Honourable Chief Minister</li>
        <li>Chief Secretary</li>
        <li>All Departments Secretary</li>
        <li>All-District DMs</li>
        <li>All departments HODs.</li>
        <li>RO office.</li>
      </ul>
      <h1 className="text-4xl font-bold  text-[#201352] pl-56 pt-10">
        Features in Unnati Portal:
      </h1>
      <ul className="pl-60 pt-4 list-disc">
       <li> HCM and Chief Secretary can also see all the project progress and its issues. </li>
      <li>  Chief Secretary can schedule a review meeting with the department with desired Agenda. </li>
       <li> All Department’s HODs can create Project that is to be monitored.</li>
       <li>  Any Department can raise issues regarding the projects that will be seen to the assigned persons related to that issue. </li> 
       <li> RC office can also create and see the progress and issues of the project assigned to them. </li>
      </ul>
    </div>
  );
};

export default Unnati;
