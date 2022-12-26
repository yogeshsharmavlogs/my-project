import React from "react";
import { Link } from "react-router-dom";

const MmpProjects = () => {
  return (
    <div className="mmpProjects">
      <h1 className="text-4xl font-bold font text-[#201352] pl-56 pr-40 pt-10">
        MMP Projects
      </h1>

      <p className="pl-56 pr-40 pt-4 text-justify">
        A mission mode project (MMP) is an individual project within the
        National e-Governance Plan (NeGP) that focuses on one aspect of
        electronic governance, such as banking, land records or commercial taxes
        etc. Within NeGP 2.0, “mission mode” implies that projects have clearly
        defined objectives, scopes, and implementation timelines and milestones,
        as well as measurable outcomes and service levels.
      </p>

      <h1 className="text-4xl font-bold font text-[#201352] pl-56 pr-40 pt-10">
        Components of Mission Mode Projects
      </h1>

      <ul className="pl-60 pt-4 list-disc">
        <li>Capacity building scheme – The scheme envisions</li>
        <li>
          Establishment of Institutional Framework for State Level Strategic
          decision- making including setting-up of State e-Governance Mission
          Team (SeMT).
        </li>
        <li>
          Imparting of specialized training, Orientation program for SeMTs and
          decision makers.
        </li>
        <li>
          Setting up of a central Capacity Building Management Cell for
          coordination and implementation of the scheme.
        </li>
        <li>
          Awareness and communication – The main objectives of the scheme are
        </li>
        <li>Build NeGP as an umbrella brand</li>
        <li>
          Create awareness about e-Governance services and service delivery
          points
        </li>
        <li>Build ownership/ stake of implementers in NeGP</li>
        <li>
          Impact and outcomes – Besides assessment of projects, MeitY also
          undertakes e-Readiness Assessment of States and Union Territories.
        </li>
        <li>
          Standards and Policies – Standards in e-Governance are a high priority
          activity, which will help ensure sharing of information and seamless
          interoperability of data across e-Governance applications.
        </li>
      </ul>

      <h1 className="text-4xl font-bold font text-[#201352] pl-56 pr-40 pt-10">
        Status of Mission Mode Projects
      </h1>

      <p className="pl-56 pr-40 pt-4 text-justify">
        NeGP comprises of 44 Mission Mode Projects encompassing 15 central MMPs,
        17 state MMPs and 12 integrated MMPs. MMPs are owned and spearheaded by
        various line ministries. State Governments are responsible for
        implementing State MMPs, under the overall guidance of respective Line
        Ministries in cases where Central Assistance is also required. MeitY
        acts as the facilitator and catalyst for the implementation of NeGP and
        provides technical assistance to various Ministries / Departments and
        State Governments.
      </p>
    </div>
  );
};

export default MmpProjects;
