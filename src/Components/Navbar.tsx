import React from "react";
import { Link } from "react-router-dom";
import DropDownAbout from "./DropDownAbout";
import DropDownPolicy from "./DropDownPolicy";

const Navbar = () => {
  return (
    <div className="h-40 sticky shadow-md z-30 w-full scroll-smooth top-0 bg-white">
      <nav className="navigation1 flex px-40 pt-3 h-9 shadow-xl justify-end">
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
        <a
          href="#"
          className="text-xs pr-6 font-semibold text-green-400 hover:font-bold"
        >
          Hindi
        </a>
        <a
          href="#"
          className="text-xs font-semibold text-green-400 hover:font-bold"
        >
          English
        </a>
      </nav>
      <nav className="navigation2 flex h-28">
        <img
          className="h-24 pl-16 inline-block mt-3"
          src="itda-logo.png"
          alt="itda-logo"
        />
        <p className="font-bold text-xl font-sans pt-8">
          INFORMATION TECHNOLOGY <br />
          DEVELOPMENT AGENCY (I.T.D.A)
        </p>
        <div className="pt-12">
          <Link
            className="font-sans font-medium pr-4 pl-10 text-gray-600 hover:underline"
            to="/"
          >
            Home Page
          </Link>

          <button
            className="font-sans font-medium pr-4 text-gray-600 hover:underline"
            id="about-btn"
          >
            <a href="/about">
              <DropDownAbout />
            </a>
          </button>

          <Link className="font-sans font-medium pr-4 text-gray-600 hover:underline" to="/who">
            Who's Who
          </Link>

          <Link
            className="font-sans font-medium pr-4 text-gray-600 hover:underline"
            to="/tenders"
          >
            Tenders
          </Link>

          <Link
            className="font-sans font-medium pr-4 text-gray-600 hover:underline"
            to="/policy"
          >
            <DropDownPolicy />
          </Link>

          <Link
            className="font-sans font-medium pr-4 text-gray-600 hover:underline"
            to="/contacts"
          >
            Contact Us
          </Link>

          <Link
            className="font-sans font-medium pr-4 text-gray-600 hover:underline"
            to="/carrers"
          >
            Carrers
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
