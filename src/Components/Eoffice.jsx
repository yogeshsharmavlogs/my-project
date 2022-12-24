import React from "react";
import { Link } from "react-router-dom";

const Eoffice = () => {
  return (
    <div className="mainPage">
      <img src="e-office-under.png" alt="e-office-image" />
      <h1 className="text-4xl font-bold  text-[#201352] pl-56 pt-10">
        e-Office
      </h1>
      <p className="pl-56 pr-40 pt-4 text-justify">
        The eOffice product aims to support governance by ushering in more
        effective and transparent inter and intra-government processes. The
        vision of e-Office is to achieve a simplified, responsive, effective and
        transparent working of all government offices. The Open Architecture on
        which eOffice has been built, makes it a reusable framework and a
        standard reusable product amenable to replication across the
        governments, at the central, state and district levels. The product
        brings together the independent functions and systems under a single
        framework.
        <br />
         e-Office aims at creating an office environment that
        minimizes the use of paper documents and files, and by streamlining
        office workflow helps reduce process delays. Its main objectives are:
      </p>

      <ul className="pl-60 pt-4 list-disc text-justify pr-64">
        <li>
        Enhance transparency – files can be tracked and their status is known to all at all times
        </li>
        <li>Increase accountability – the responsibility of quality and speed of decision making is easier to monitor.</li>
        <li> Assure data security and data integrity.</li>
        <li> Provide a platform for re-inventing and re-engineering the government.</li>
        <li>Promote innovation by releasing staff energy and time from unproductive procedures.</li>
        <li>Transform the government work culture and ethics.</li>
        <li>Promote greater collaboration in the work place and effective knowledge management.</li>
      </ul>

      <h1 className="text-4xl font-bold  text-[#201352] pl-56 pt-20">
      Uttarakhand Status:
      </h1>

      <ol className="pl-60 pt-4 list-decimal text-justify pr-64">
        <li>
        Secretariat: 55 Department/ 147 Sections approx.
        </li>
        <li>Personnel Trained: more than 2391 Officers</li>
        <li>eFiles Created -18,984</li>
        <li> eReceipt Created-62,845</li>
        <li>Active Users- 2551</li>
      </ol>
    </div>
  );
};

export default Eoffice;
