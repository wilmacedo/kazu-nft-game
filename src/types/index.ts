import { ICall } from "../services/eth/types";

export enum Provider {
  ETHEREUM = "ethereum",
  TRON = "tronWeb",
}

export enum ConnectionStatus {
  CONNECTED = "connected",
  WAITING = "waiting",
  UNAVAILABLE = "unavailable",
}

export interface ProviderData {
  [key: string]: string | string[] | undefined;
}

export interface ProviderInfo {
  name: string;
  status: ConnectionStatus;
  data: ProviderData;
  handleConnect?: () => void;
  call: ICall;
}

export interface Kazu {
  frontImg: string;
  backImg: string;
  fliped: boolean;
  hash: string;
}
