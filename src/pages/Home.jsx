import React from "react";
import Blue from "../assets/images/blue_hexagonal.png";
import { FaUserTie, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight leading-auto text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Empowering Decentralized
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-cyan-300 from-sky-400">
            {" "}
            Voting{" "}
          </span>
          with Blockchain
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Explore the future of secure and transparent voting systems powered by
          blockchain technology. Your voice matters!
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link to="/voterRegister">
            <a
              href="#watch-video"
              className="inline-flex justify-center  gap-3 items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <FaUsers />
              voter register
            </a>
          </Link>
          <Link to="/candidateRegister">
            <a
              href="#watch-video"
              className="inline-flex justify-center gap-3 items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <FaUserTie />
              Candidate register
            </a>
          </Link>
        </div>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <img
            className="blue-box"
            style={{ filter: "drop-shadow(0px 30px 120px #5ec4f8)" }}
            // style={{ filter: "drop-shadow(0px 30px 120px #1749aa89)" }}
            src={Blue}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
