import { useState, useEffect } from "react";
import React from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [open, setOpen] = useState(window.innerWidth > 1200);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  return (
    <section className=" flex justify-between items-center w-full opacity-70 bg-white shadow-lg">
      <div className=" flex justify-end items-center w-full px-5 py-3">
        {/* <div className='nav-head'>
          <a href="/" className='nav-head-link'> </a>
        </div> */}

        <div
          onClick={() => setOpen((open) => !open)}
          className={`${isMobile ? "shown" : "hidden"}`}
        >
          <div className="nav-toggler">
            <div className="nav-toggler-icon">
              <span></span>
            </div>
          </div>
        </div>

        <div className={`${!open ? "hidden" : "shown"}`}>
          <div className="">
            <div className="flex gap-5  text-[#1AD079]">
              {/* <div><a href="/" className='nav-active'>Home</a></div> */}
              {/* <div><a href="#mission">Mission</a></div> */}
              <div className="p-2">
                <a href="#flow">How it works</a>
              </div>
              {/* <div><a href="#working">Listing</a></div> */}
              <div className="border p-3 border-[#1AD079] rounded-lg">
                <a href="#contact">Contact us</a>
              </div>
              <div className="">
                <a href="/new">
                  <button className="border p-3 border-[#1AD079] rounded-lg">
                    Get Started
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
