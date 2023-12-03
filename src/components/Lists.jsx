import React from "react";
import LoadingBar from "react-top-loading-bar";
import man_2HandUps from "../assets/images/man_2HandUps.png";

function Lists() {
  return (
    <section className="bg-white dark:bg-gray-900 flex justify-between flex-col flex-wrap gap-2 items-center">
      <LoadingBar color="#08daf1" progress={100} />
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-semibold tracking-tight leading-auto text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-cyan-300 from-sky-400">
            {" "}
            Candidates <span className="dark:text-white text-gray-900">
              /{" "}
            </span>{" "}
            Voters{" "}
          </span>
          list's
        </h1>
      </div>
      <div className="flex justify-around gap-2 items-center flex-wrap w-full">
        <div className="flex gap-2 flex-col">
          <h4 class="text-xl font-semibold dark:text-white">
            Candidates Lists
          </h4>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Party
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Gender
                  </th>
                  <th scope="col" class="px-6 py-3">
                    age
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="px-6 py-4">1</td>
                  <td class="px-6 py-4">kunal lokhande</td>
                  <td class="px-6 py-4">BJP</td>
                  <td class="px-6 py-4">male</td>
                  <td class="px-6 py-4">20</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="px-6 py-4">2</td>
                  <td class="px-6 py-4">satyam shinde</td>
                  <td class="px-6 py-4">BJP-pune</td>
                  <td class="px-6 py-4">male</td>
                  <td class="px-6 py-4">18</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="px-6 py-4">3</td>
                  <td class="px-6 py-4">Divya lokhande</td>
                  <td class="px-6 py-4">Congras</td>
                  <td class="px-6 py-4">female</td>
                  <td class="px-6 py-4">18</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <img
          src={man_2HandUps}
          height={420}
          width={340}
          style={{ filter: "drop-shadow(0px 30px 40px #5ec4f840)" }}
          alt=""
        />
        <div className="flex gap-2 flex-col">
          <h4 class="text-xl font-semibold dark:text-white">Voters Lists</h4>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Party
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Gender
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="px-6 py-4">1</td>
                  <td class="px-6 py-4">kunal lokhande</td>
                  <td class="px-6 py-4">BJP</td>
                  <td class="px-6 py-4">male</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="px-6 py-4">2</td>
                  <td class="px-6 py-4">satyam shinde</td>
                  <td class="px-6 py-4">BJP-pune</td>
                  <td class="px-6 py-4">male</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="px-6 py-4">3</td>
                  <td class="px-6 py-4">Divya lokhande</td>
                  <td class="px-6 py-4">Congras</td>
                  <td class="px-6 py-4">female</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lists;
