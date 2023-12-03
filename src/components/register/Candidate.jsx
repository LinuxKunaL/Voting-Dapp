import React from "react";
import standingMan from "../../assets/images/Candidate_man.png";
import LoadingBar from "react-top-loading-bar";

function Candidate() {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <LoadingBar color="#08daf1" progress={100} />

      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 flex flex-col gap-4 justify-center items-center">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight leading-auto text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-cyan-300 from-sky-400">
            {" "}
            Candidate{" "}
          </span>
          Register
        </h1>
        <div className="flex gap-10 justify-around flex-wrap w-full items-center">
          <img
            src={standingMan}
            style={{ filter: "drop-shadow(0px 30px 40px #5ec4f840)" }}
            alt="man"
          />
          <div className="border border-[#1f2937] p-8 rounded-md w-fit hover:shadow-2xl h-min">
            <form className="max-w-sm flex flex-col">
              <div className="mb-5">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 dark:shadow-sm-light"
                  placeholder="ex. kunal lokhande"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  for="Party"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Party
                </label>
                <input
                  type="text"
                  id="Party"
                  className="shadow-sm bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 dark:shadow-sm-light"
                  placeholder="ex. BJP"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  for="age"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your age
                </label>
                <input
                  type="number"
                  id="age"
                  className="shadow-sm bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 dark:shadow-sm-light"
                  placeholder="ex. 19"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your gender
                </label>
                <input
                  type="text"
                  id="gender"
                  className="shadow-sm bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500 dark:shadow-sm-light"
                  placeholder="ex. female"
                  required
                />
              </div>
              <label
                for="terms"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your data are store in blockchain ⛓
              </label>
              <button
                type="submit"
                className="text-white bg-cyan-700 mt-5 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Candidate Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Candidate;
