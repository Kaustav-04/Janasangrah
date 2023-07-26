import React from "react";
import Navbar from "./Navbar";
import crowdfunding from "../img/crowdfunding.png";
import { FaSpaceShuttle, FaTwitter, FaLinkedin } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Tabs = (props) => {
  return (
    <div
      className={`text-white bg-[${props.bg}] mr-3 w-1/2 flex flex-col justify-between items-start p-3 h-[150px] rounded-lg`}
    >
      <span className="text-xl">{props.text}</span>
      <span className="flex items-center">
        Learn More
        <BsArrowRight className="ml-2" />
      </span>
    </div>
  );
};

const Home = () => {
  return (
    <section className="section home" id="home">
      <Navbar />
      <div className="flex items-center justify-around h-[80vh] ">
        <div className="text-[#07133B] flex flex-col items-center justify-center text-7xl gap-y-10 min-h-[350px] ">
          <span className="before:content-[''] before:w-full h-1 before:absolute before:left-0 before:mt-3 bg-[#07133B] mb-10">
            jana
          </span>
          <span className=" text-[#1AD079]before:content-[''] before:w-full h-1 before:absolute before:left-0 before:mt-3 bg-[#07133B]">
            san<span className="text-[#1AD079]">g</span>rah
          </span>
        </div>
        <div className="w-1/3 flex flex-col items-center gap-y-9 ">
          <div className="text-4xl font-semibold">
            Unleashing the Potential of Decentralized Crowdfunding across
            Blockchains
          </div>
          <div className="text-xl font-light opacity-80">
            Janasangrah harnesses the power of blockchain technology to create a
            transparent, secure, and efficient fundraising experience for both
            project creators and backers.
          </div>
          <div className="flex justify-between item-center w-full">
            <div
              className={`text-white bg-[#1AD079] mr-3 w-1/2 flex flex-col justify-between items-start p-3 h-[150px] rounded-lg`}
            >
              <span className="text-xl">{'Start a Project'}</span>
              <span className="flex items-center">
                Learn More
                <BsArrowRight className="ml-2" />
              </span>
            </div>
            <Tabs text={"Ongoing Project"} bg={"#07133B"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
