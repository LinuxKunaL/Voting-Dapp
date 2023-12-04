import React from "react";
import LoadingBar from "react-top-loading-bar";
import big_man from "../assets/images/big_man.png";

function ElectionCommission() {
  return (
    <section className="bg-white dark:bg-gray-900 flex justify-between flex-col flex-wrap gap-2 items-center">
      <LoadingBar color="#08daf1" progress={100} />

      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight leading-auto text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-cyan-300 from-sky-400">
            Election <span className="dark:text-white text-gray-900"></span>{" "}
          </span>
          commission
        </h1>
      </div>
      <div className="flex justify-around gap-2 items-center flex-wrap w-full">
        <img
          src={big_man}
          width={540}
          style={{ filter: "drop-shadow(0px 30px 40px #5ec4f840)" }}
          alt="man"
        />
        <div>
          <div className="border border-[#1f2937] p-8 rounded-md w-fit hover:shadow-2xl h-min">
            <form className="max-w-sm flex flex-col gap-3">
              <label
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor=""
              >
                Start time
              </label>{" "}
              <div className="relative max-w-sm">
                <input
                  type="datetime-local"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 outline-none focus:border-cyan-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                  placeholder="Select date"
                />
              </div>
              <label
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor=""
              >
                End time
              </label>{" "}
              <div className="relative max-w-sm">
                <input
                  type="datetime-local"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 outline-none before:focus:border-cyan-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                  placeholder="Select date"
                />
              </div>
              <label
                htmlFor="terms"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your data are store in blockchain ⛓
              </label>
              <button
                type="submit"
                className="text-white bg-cyan-700 mt-5 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Voting Start
              </button>
            </form>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="text-white bg-green-700 mt-5 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Result
            </button>
            <button
              type="submit"
              className="text-white bg-red-700 mt-5 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Emergency
            </button>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}

export default ElectionCommission;
