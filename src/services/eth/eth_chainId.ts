import { ICall, Method } from "./types";

const eth_chainId = () => {
  const chainId = window.ethereum.chainId === "0x38" ? "0x38" : "0x1";

  const data = {
    method: Method.CHAIN_ID,
    params: [chainId],
  };

  window.ethereum.handleEvent(JSON.stringify(data));

  const info = {
    data: {
      "Chain ID": chainId,
    },
  };

  return info;
};

const call: ICall = {
  name: "Change chain Id",
  exec: eth_chainId,
};

export default call;
