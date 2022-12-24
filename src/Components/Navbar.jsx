import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  //   <>
  //   window.addEventListener('DOMContentLoaded', ()
  //   => {
  //       const aboutBtn = document.querySelector
  //       ('#about-btn')
  //       const dropdown = document.querySelector
  //       ('dropdown')

  //       aboutBtn.addEventListener('click', ()=> {
  //          if(dropdown.classList.contains
  //            ('hidden')){
  //                 dropdown.classList.remove
  //                 ('hidden');
  //                 dropdown.classList.add('flex');
  //            }else{
  //              dropdown.classList.remove('flex')
  //              dropdown.classList.add('hidden')
  //            }

  //          dropdown.classsList.toggle('hidden')
  //          dropdown.classList.toggle('flex')
  //       })

  //   })
  return (
    <div className="h-40">
      <nav className="navigation1 flex justify-end px-40 pt-3 h-9 shadow-2xl">
        <a href="#">
          <img className="h-3 pr-6" src="/sitemap.png" alt="" />
        </a>
        <a href="#">
          <img className="h-3 pr-6" src="/facebook.png" alt="" />
        </a>
        <a href="#">
          <img className="h-3 pr-6" src="/twitter.png" alt="" />
        </a>
        <a href="#">
          <img className="h-3 pr-6" src="/youtube.png" alt="" />
        </a>
        <a href="#" className="text-xs pr-6 font-semibold text-green-400">
          {" "}
          Hindi{" "}
        </a>
        <a href="#" className="text-xs font-semibold text-green-400">
          {" "}
          English{" "}
        </a>
      </nav>
      <nav className="navigation2 flex h-28 shadow-xl">
        <img
          className="h-24 pl-16 inline-block mt-2"
          src="itda-logo.png"
          alt="itda-logo"
        />
        <p className="font-bold text-xl font-sans pt-6">
          INFORMATION TECHNOLOGY <br />
          DEVELOPMENT AGENCY (I.T.D.A){" "}
        </p>
        <div className="pt-10">
            <Link className="font-sans font-medium pr-4 pl-10 text-gray-600" to="/">Home Page </Link>

          <button
            className="font-sans font-medium pr-4 text-gray-600" id="about-btn">
            <Link to="/about">About Us</Link>
          </button>
          {/* <div className="bg-gray-200 flex flex-col rounded text-sm w-32" id="dropdown">
           <Link className="px-2 py-1 hover:bg-blue-300 rounded" to="/"> Objectives </Link>
           <Link className="px-2 py-1 hover:bg-blue-300 rounded" to="/"> Functions </Link>
           <Link className="px-2 py-1 hover:bg-blue-300 rounded" to="/"> Governing Body </Link>
           <Link className="px-2 py-1 hover:bg-blue-300 rounded" to="/"> Recents Updates </Link>
           <Link className="px-2 py-1 hover:bg-blue-300 rounded" to="/">State Projects</Link>
           <Link className="px-2 py-1 hover:bg-blue-300 rounded" to="/">NeGP Projects</Link>
           <Link className="px-2 py-1 hover:bg-blue-300 rounded" to="/">Gallery</Link>
       </div> */}

            <Link
              className="font-sans font-medium pr-4 text-gray-600" to="/who">Who's Who</Link>

            <Link className="font-sans font-medium pr-4 text-gray-600" to="/tenders"> Tenders </Link>
           
            <Link className="font-sans font-medium pr-4 text-gray-600" to="#">Policy & Guidelines </Link> 
          
            <Link className="font-sans font-medium pr-4 text-gray-600" to="/contacts">Contact Us </Link>
          
            <Link className="font-sans font-medium pr-4 text-gray-600" to="/carrers"> Carrers</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
