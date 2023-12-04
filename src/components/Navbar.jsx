import React, { useEffect, useState } from "react";
import userDefaultLogo from "../assets/images/userDefaultLogo.jpg";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaEthereum } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ToastSuccess, ToastFailure } from "../app/Toast";

import { useDispatch } from "react-redux";
import { setAddress } from "../app/stateRedux";

import Web3 from "web3";

function Navbar() {
  const Dispatch = useDispatch();
  const [account, setAccount] = useState({
    metamask: false,
    account: "0x0000000000000",
    balance: "10 ETH",
  });
  const [Counter, setCounter] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("metamask") == "true") {
      const web3 = new Web3(window.ethereum);
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then(async (account) => {
          const balanceWei = await web3.eth.getBalance(account[0]);
          const balanceEth = web3.utils.fromWei(balanceWei, "ether");
          setAccount({
            metamask: true,
            account: account[0],
            balance: balanceEth.toString().slice(0, 5),
          });
          Dispatch(setAddress(account[0]))
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setAccount({ metamask: false });
    }
  }, [Counter]);

  const HandleConnectMetamask = async () => {
    if (window.ethereum) {
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((account) => {
          localStorage.setItem("metamask", true);
          ToastSuccess("metamask connected ! 🎉");
          setCounter(Counter + 1);
        })
        .catch((error) => {
          ToastFailure(error.message + " 💔");
        });
    } else {
      ToastFailure("Metamask is not install ! 💔");
    }
  };

  const logoutMetamask = () => {
    localStorage.setItem("metamask", false);
    setCounter(Counter + 1);
    ToastSuccess("disconnected ! 🎉");
  };

  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800/70 backdrop-blur-10 dark:border-gray-700 rounded-xl mt-4 sticky top-0">
      <Toaster position="left" />
      <div className="flex relative flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Vote{" "}
            <span className="text-cyan-500 text-sm font-light">by kunal</span>
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <Link
                className="block py-2 px-3 md:p-0 text-white bg-cyan-700 rounded md:bg-transparent md:text-cyan-700 md:dark:text-cyan-500 dark:bg-cyan-600 md:dark:bg-transparent"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/vote"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Vote
              </Link>
            </li>
            <li>
              <Link
                to="/lists"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Lists
              </Link>
            </li>
            <li>
              <Link
                to="/electionCommission"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Election Commission
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          {account.metamask ? (
            <>
              <img
                className="w-10 h-10 rounded-full"
                src={userDefaultLogo}
                alt=""
              />
              <div className="font-medium dark:text-white flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  {account.balance} ETH <FaEthereum />
                  <button
                    type="button"
                    onClick={() => logoutMetamask()}
                    className="text-cyan-700 border cursor-pointer border-cyan-700 hover:bg-cyan-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded text-sm p-1 text-center inline-flex items-center dark:border-cyan-500 dark:text-cyan-500 dark:hover:text-white dark:focus:ring-cyan-800 dark:hover:bg-cyan-500"
                    title="LogOut"
                  >
                    <RiLogoutCircleRLine />
                  </button>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {account.account.slice(0, 7) +
                    "..." +
                    account.account.slice(37)}
                </div>
              </div>
            </>
          ) : (
            <button
              onClick={HandleConnectMetamask}
              className="inline-flex gap-2 justify-center items-center py-2 px-2 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <img
                height="30"
                width="30"
                src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                alt=""
              />
              <span className="flex gap-1 items-center">Connect</span>
            </button>
          )}
        </div>
        <div className="flex gap-1 flex-row absolute top-20 border-gray-200 p-3 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 rounded-xl mt-5 left-0">
          <p className="tracking-tighter text-xl text-cyan-500 md:text-sm dark:text-cyan-400 ">
            Vote Status
          </p>
          <p className="tracking-tighter text-xl text-gray-500 md:text-sm dark:text-gray-400">
            : Closed
          </p>
        </div>
        <div className="flex gap-1 flex-row absolute top-20 border-gray-200 p-3 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 rounded-xl mt-5 right-0">
          <p className="tracking-tighter text-xl text-cyan-500 md:text-sm dark:text-cyan-400 ">
            Winner is
          </p>
          <p className="tracking-tighter text-xl text-gray-500 md:text-sm dark:text-gray-400">
            : None
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
