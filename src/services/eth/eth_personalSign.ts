import { stringToHex } from "../../utils";
import { ICall, Method } from "./types";

const eth_personalSign = () => {
  const message = "";
  const encodedMessage = stringToHex(message);

  const data = {
    method: Method.PERSONAL_SIGN,
    params: [encodedMessage, "address", "password"],
  };

  window.ethereum.handleEvent(JSON.stringify(data));
};

const call: ICall = {
  name: "Personal sign",
  exec: eth_personalSign,
};

export default call;
