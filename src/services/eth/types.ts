export enum Method {
  PERSONAL_SIGN = "personal_sign",
  SIGN = "eth_sign",
  CHAIN_ID = "eth_chainId",
}

export interface ICall {
  name: string;
  exec: () => any;
}
