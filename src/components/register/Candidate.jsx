import React from "react";
import standingMan from "../../assets/images/Candidate_man.png";

function Candidate() {
  return (
    <section className="bg-white dark:bg-gray-900 ">
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
            <form class="max-w-sm flex flex-col">
              <div class="mb-5">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  class="shadow-sm bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="ex. kunal lokhande"
                  required
                />
              </div>
              <div class="mb-5">
                <label
                  for="Party"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Party
                </label>
                <input
                  type="text"
                  id="Party"
                  class="shadow-sm bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="ex. BJP"
                  required
                />
              </div>
              <div class="mb-5">
                <label
                  for="age"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your age
                </label>
                <input
                  type="number"
                  id="age"
                  class="shadow-sm bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="ex. 19"
                  required
                />
              </div>
              <div class="mb-5">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your gender
                </label>
                <input
                  type="text"
                  id="gender"
                  class="shadow-sm bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="ex. female"
                  required
                />
              </div>
              <label
                for="terms"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                You data are store in blockchain ⛓
              </label>
              <button
                type="submit"
                class="text-white bg-blue-700 mt-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
