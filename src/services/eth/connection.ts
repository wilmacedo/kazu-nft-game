import { ConnectionStatus, Provider, ProviderInfo } from "../../types";
import { shortenAddress } from "../../utils";
import { ICall } from "./types";

const connection = async () => {
  const provider = Provider.ETHEREUM;
  let accounts: string[] = await window[provider].enable();

  accounts = accounts.map((address) => shortenAddress(address));

  const info = {
    data: {
      "Chain ID": "0x1",
      Accounts: accounts,
      Network: window.ethereum.networkVersion,
    },
    status: ConnectionStatus.CONNECTED,
  };

  return info;
};

const call: ICall = {
  name: "Connect to chain",
  exec: connection,
};

export default call;
