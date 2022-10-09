import React from "react";
import { Images } from "../../Assets/Images";

function Footer() {
  return (
    <footer>
      <div className="mx-auto mt-5 w-11/12">
        <div className="order-first flex flex-wrap text-center md:text-left">
          <div className="w-full px-4 md:w-1/2 lg:w-1/5">
            <h2 className="title-font text-md mb-10 font-semibold tracking-widest">Home Page</h2>
            <nav className="mb-10 list-none">
              <li className="p-3">
                <a className="cursor-pointer hover:text-primaryLight">Popular Now</a>
              </li>
              <li className="p-3">
                <a className="cursor-pointer hover:text-primaryLight">Coming Soon</a>
              </li>
              <li className="p-3">
                <a className="cursor-pointer hover:text-primaryLight">Weekly Movies</a>
              </li>
              <li className="p-3">
                <a className="cursor-pointer hover:text-primaryLight">News</a>
              </li>
              <li className="p-3">
                <a className="cursor-pointer hover:text-primaryLight">About Us</a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/5">
            <h2 className="title-font text-md mb-10 font-semibold tracking-widest">Resources</h2>
            <nav className="mb-10 list-none">
              <li className="p-3">
                <a className="cursor-pointer hover:text-primaryLight">Instalation Manual</a>
              </li>
              <li className="p-3">
                <a className="cursor-pointer hover:text-primaryLight">Release Note</a>
              </li>
              <li className="p-3">
                <a className="cursor-pointer hover:text-primaryLight">Comminity Help</a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/5">
            <h2 className="title-font text-md mb-10 font-semibold tracking-widest">Company</h2>
            <nav className="mb-10 list-none">
              <li className="p-3">
                <a className="cursor-pointer hover:text-primaryLight">About Us</a>
              </li>
              <li className="p-3">
                <a className="cursor-pointer hover:text-primaryLight">Career</a>
              </li>
              <li className="p-3">
                <a className="cursor-pointer hover:text-primaryLight">Press</a>
              </li>
              <li className="p-3">
                <a className="cursor-pointer hover:text-primaryLight">Support</a>
              </li>
            </nav>
          </div>
          {/* NewsLetter */}
          <div className="w-full px-4 md:w-1/2 lg:w-2/5">
            <h2 className="title-font text-md mb-10 font-semibold tracking-widest">Newsletter</h2>
            <div className="flex flex-wrap items-end justify-center md:flex-nowrap md:justify-start lg:flex-wrap xl:flex-nowrap">
              <div className="relative">
                <label htmlFor="footer-field" className="text-sm leading-7">
                  Get contact
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  placeholder="Enter your email"
                  className="w-full border border-primaryDark bg-transparent py-1 px-3 text-base leading-8 outline-none transition-colors duration-200 ease-in-out focus:bg-transparent focus:ring-2"
                />
              </div>
              <button className="inline-flex flex-shrink-0 cursor-pointer bg-primaryDark py-2 px-6 hover:bg-indigo-600 focus:outline-none lg:mt-2 xl:mt-0">
                Send
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="w-full">
                Follow Us:
                <span className="text-md mx-4 cursor-pointer rounded-full bg-primaryDark p-2">
                  <i className="fab fa-facebook-f"></i>
                </span>
                <span className="text-md mx-4 cursor-pointer rounded-full bg-primaryDark p-2">
                  <i className="fab fa-twitter"></i>
                </span>
                <span className="text-md mx-4 cursor-pointer rounded-full bg-primaryDark p-2">
                  <i className="fab fa-instagram"></i>
                </span>
              </div>
              <div>
                <img src={Images.gifLogo} alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
