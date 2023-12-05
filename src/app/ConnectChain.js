import Web3 from "web3";
import Abi from "../abi/VotingAbi.json";

const ContractAddress = "0x5D34172042F2324B757cfC59d5D137bed94894C7";

export const web3 = new Web3("HTTP://127.0.0.1:7545");
export const ContractInstance = new web3.eth.Contract(Abi, ContractAddress);
