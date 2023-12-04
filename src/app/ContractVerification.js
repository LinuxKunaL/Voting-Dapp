import { web3, ContractInstance } from "./ConnectChain";

export async function AccountVerification(address) {
  const listOfVoter = await ContractInstance.methods.VoterList().call();
  const listOfCandidate = await ContractInstance.methods.CandidateList().call();

  return (
    listOfCandidate.some((item) =>
      item.Address.toUpperCase().includes(address.toUpperCase())
    ) ||
    listOfVoter.some((item) =>
      item.Address.toUpperCase().includes(address.toUpperCase())
    )
  );
}
