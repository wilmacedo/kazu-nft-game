import { Provider } from "../types";

interface Headers {
  [key: string]: string[];
}

const headers: Headers = {
  [Provider.ETHEREUM]: ["Chain ID", "Accounts", "Network"],
  [Provider.TRON]: ["Accounts"],
};

export { headers };
