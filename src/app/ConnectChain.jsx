import Web3 from "web3";
import Abi from "../abi/VotingAbi.json";

const ContractAddress = "0xF7Ae7527d6E712273177215c6faf0c5A040B28ee";

export const web3 = new Web3("HTTP://127.0.0.1:7545");
export const ContractInstance = new web3.eth.Contract(Abi, ContractAddress);
