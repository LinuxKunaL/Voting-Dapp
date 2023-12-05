import Web3 from "web3";
import Abi from "../abi/VotingAbi.json";

const ContractAddress = "0x8483F1BfF3cEE6Fee3E132b904E66Fd78930CC2B";

export const web3 = new Web3("HTTP://127.0.0.1:7545");
export const ContractInstance = new web3.eth.Contract(Abi, ContractAddress);
