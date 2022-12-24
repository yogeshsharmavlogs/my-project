import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx"
import { Link } from "react-router-dom"
import Footer from "./Footer";

const Home = () => {
  const slides = [
    {
      url: "/apuni-sarkar.png",
    },
    {
      url: "/drone.png",
    },
    {
      url: "cyber-security.png",
    },
    {
      url: "itda.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
    <div>
    <div className="max-w-[1200px]  w-full m-auto px-4 group">
      <div
        style={{backgroundImage: `url(${slides[currentIndex].url})`}}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        {" "}
      </div>
      {/* {Left Arrow} */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* { Right Arrow} */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>

      <br /><br />

      <div className="ml-36 h-[381px] w-[900px] shadow-2xl rounded-md">
        <h1 className="pt-8 text-3xl font-bold text-center text-[#201352]">
          Official Website of ITDA
        </h1>
        <br />
        <p className="pl-36 pr-36 mb-24 text-center font-semibold text-[14px]">
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
              <Link to="/cmHelpline"><img className="h-32 pl-44" src="cm-helpline.png" alt="cm-helpline" /> </Link>
              <Link to="/dataCenter"><img className="h-32 pl-10" src="data-center.png" alt="data-center" /></Link>
              <Link to="/eGatePass"><img className="h-32 pl-10" src="e-gate-pass.png" alt="e-gate-pass" /></Link>
              <Link to="/apuniSarkar"><img className="h-32 pl-10" src="apuni-sarkar-link.png" alt="apuni-sarkar-logo" /></Link>
            </div>

            <div className="second-row flex pt-6">
              <Link to="/unnati"><img className="h-32 pl-44" src="unnati-logo.png" alt="unnati-logo" /> </Link>
              <Link to="/uidai"><img className="h-32 pl-10" src="uidai-logo.png" alt="uidai-logo.png" /></Link>
              <Link to="/darc"><img className="h-32 pl-10" src="darc-logo.png" alt="darc-logo" /></Link>
              <Link to="/ukswan"><img className="h-32 pl-10" src="uk-swan-logo.png" alt="uk-swan-logo" /></Link>
            </div>

            <div className="third-row flex pt-6">
              <Link to="/eoffice"><img className="h-32 pl-44" src="e-office-logo.png" alt="e-office-logo" /> </Link>
              <Link to="/digiLocker"><img className="h-32 pl-10" src="digi-locker-logo.png" alt="digi-locker-logo" /></Link>
              <Link to="/negpProjects"><img className="h-32 pl-10" src="negp-logo.png" alt="negp-projects-logo" /></Link>
              <Link to="/mmpProjects"><img className="h-32 pl-10" src="mmp-logo.png" alt="mmp-projects-logo" /></Link>
            </div>
         </div>
    </div>
    </div>
    </>
  );
};

export default Home;
