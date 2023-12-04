import Web3 from "web3";
import Abi from "../abi/VotingAbi.json";

const ContractAddress = "0xaF6826c370A30D55148E2189Dfce1DE1122cb170";

export const web3 = new Web3("HTTP://127.0.0.1:7545");
export const ContractInstance = new web3.eth.Contract(Abi, ContractAddress);
