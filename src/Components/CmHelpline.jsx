import React from "react";
import { Link } from "react-router-dom";

const CmHelpline = () => {
  return (
    <div className="mainPage">
      <img src="cm-helpline-under.png" alt="cm-helpline-image" />
      <h1 className="text-4xl font-bold  text-[#201352] pl-56 pt-10">
        CM Helpline
      </h1>

      <p className="text-[#6B7280] font-normal text-base pt-4 pl-56 pr-60 leading-5">
        Department Name : Information Technology Development Agency (ITDA),
        Department of Information and Science Technology, Government of
        Uttarakhand
        <br />
        <br />
        This project is an important and far-reaching initiative of the state
        government towards better governance, inaugurated on 23rd Feb’19. The
        aim of this project is to provide quick information and resolution to
        the grievances raised by the citizen. Also, we have designed our portal
        in such a flexible manner wherein we make sure that citizen shall
        provide their submission in the form of demand and suggestion. This is a
        category that remains separated from actual grievances.
        <br /><br />
        <Link
          className="hover:underline font-semibold" to="https://cmhelpline.uk.gov.in/">
          https://cmhelpline.uk.gov.in/
        </Link>
      </p>
    </div>
  );
};
export default CmHelpline;
