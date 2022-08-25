import React, { createContext, useContext, useState } from "react";
import { headers } from "../config";
import { Ethereum } from "../services";
import { ICall } from "../services/eth/types";
import {
  ConnectionStatus,
  Provider,
  ProviderData,
  ProviderInfo,
} from "../types";

interface Props {
  children: React.ReactNode;
}

interface IData {
  [key: string]: ProviderInfo;
}

interface IProviderData {
  setupData: (provider: Provider) => void;
  providerData: IData;
  updateData: React.Dispatch<React.SetStateAction<IData>>;
  isAuthenticated: boolean;
  setIsAutheticated: Function;
  tickets: number;
  setTickets: Function;
  balance: number;
  setBalence: Function;
  address: string;
  setAddress: Function;
}

const DataContext = createContext({} as IProviderData);

const DataProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<IData>({});
  const [isAuthenticated, setIsAutheticated] = useState<boolean>(false);
  const [tickets, setTickets] = useState<number>(0);
  const [balance, setBalence] = useState<number>(0);
  const [address, setAddress] = useState<string>("");

  const setupData = (provider: Provider) => {
    let status = ConnectionStatus.WAITING;
    if (!window[provider]) {
      status = ConnectionStatus.UNAVAILABLE;
    }

    let providerData: ProviderData = {};
    headers[provider].forEach((key) => (providerData[key] = undefined));

    let call: ICall;
    switch (provider) {
      default:
        call = Ethereum.connection;
    }

    let info = { name: provider, status, data: providerData, call };

    setData((prevData) => ({ ...prevData, [provider]: info }));
  };

  const values: IProviderData = {
    setupData,
    providerData: data,
    updateData: setData,
    isAuthenticated,
    setIsAutheticated,
    tickets,
    setTickets,
    balance,
    setBalence,
    address,
    setAddress,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

const useProviderData = () => useContext(DataContext);

export { DataProvider, useProviderData };
