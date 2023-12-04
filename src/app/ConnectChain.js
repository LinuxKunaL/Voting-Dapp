import Web3 from "web3";
import Abi from "../abi/VotingAbi.json";

const ContractAddress = "0xE0744E03e368f12569deF56ad5E50b7853959024";

export const web3 = new Web3("HTTP://127.0.0.1:7545");
export const ContractInstance = new web3.eth.Contract(Abi, ContractAddress);
