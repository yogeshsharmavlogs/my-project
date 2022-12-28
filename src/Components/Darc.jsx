import React from "react";
import { Link } from "react-router-dom";

const Darc = () => {
  return (
    <div className="mainPage">
      <img src="drone-under.png" alt="darc-drone-image" />
      <h1 className="text-4xl font-bold  text-[#201352] pl-56 pt-20">
        Drone Application And Research Center (DARC):
      </h1>
      <p className="pl-56 pr-40 pt-4 text-justify">
        Drone Application and Research Centre (DARC) is a joint initiative of
        Information Technology Development Agency (ITDA) and Govt. of
        Uttarakhand established on july,2018 The center has been raised with the
        intent to promote and nurture research and development in the field of
        drone technology. DARC provides a platform where experts in drone
        technology can share their knowledge and skill on design, utilization
        and applications of Unmanned Aerial Systems (UAS). Its objective is to
        help government officials, on field officers, individuals and
        organizations understand the revolutionary benefits of UAV technology,
        and gain the skills to implement drone (UAV) technology safely and
        effectively in their workplaces and wider enterprises.
      </p>
    <div className="buttons flex pt-6">
        <div className="first-button rounded-lg hover:bg-green-100 border-[#AABCEC] border-solid border-2 w-32 h-12 ml-56">     
         <button className="text-[#201352] pl-5 pt-2 font-bold border-black">DARC Lake</button>
        </div>
        <div className="second-button rounded-lg hover:bg-green-100 border-[#AABCEC] border-solid border-2 w-32 h-12 ml-20">
          <button className="text-[#201352] pl-7 pt-2 font-bold">Calender</button>
        </div>
    </div>

    <h1 className="text-4xl font-bold  text-[#201352] pl-56 pt-10">
    MISSION AND VISION
    </h1>

    <ul className="pl-60 pt-4 list-disc text-justify pr-40">
        <li>To encourage research and development, innovation, entrepreneurship, competition and build infrastructure capabilities.</li>
        <li>To provide drone training to government officials and students and enhance the drone ecosystem.</li>
        <li>To provide solutions to the problems of various sectors such as mining, agriculture, forest. Etc</li>
        <li>To attract technology advancements and investment, both domestic and foreign.</li>
      </ul>
      <h1 className="text-4xl font-bold  text-[#201352] pl-56 pt-10">
      OBJECTIVE
      </h1>
      <ul className="pl-60 pt-4 list-disc text-justify pr-40">
       <li> Establishment of State of Art Centre for Drone Application & Research.</li>
      <li>  Establishment of a High-Tech Training facility for training of Drone pilots.</li>
       <li> For the enhancement of technical capability and aims to provide solutions to technical challenges and training for future leaders in the UAV industry.</li>
       <li>  Its objective is to help government officials, on field officers, individuals and organizations understand the revolutionary benefits of UAS technology, and gain the skills to implement drone (UAV) technology safely and effectively in their workplaces and wider enterprises. </li> 
       <li> To support outstanding research in the advancement and application of this Unmanned Technology.</li>
       <br />
       <li>DARC Helpline Number (+91) (6397687637) </li>
       <br />
       <li> Email: ukdarc@gmail.com</li>
      </ul>
    </div>
  );
};

export default Darc;
