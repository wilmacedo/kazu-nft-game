const capitalize = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const shortenAddress = (address: string, maxSize = 24) => {
  if (address?.length <= maxSize) {
    return address;
  }

  return address.substring(1, maxSize) + "...";
};

const shortenAddressSuffix = (address: string, maxSize = 4) => {
  const prefix = address.substring(0, maxSize);
  const suffix = address.substring(address?.length - maxSize, address?.length);

  return prefix + "..." + suffix;
};

const hexToString = (data: string) => {
  const result = data
    .match(/.{1,2}/g)
    ?.map((charCode) => String.fromCharCode(parseInt(charCode, 16)));

  if (!result) {
    return "";
  }

  return result.join("");
};

const stringToHex = (data: string) => {
  const result = data
    .split("")
    .map((char) => Number(char.charCodeAt(0)).toString(16));

  return "0x" + result;
};
const getAddress = (address: string, quantity = 15) => {
  if (address?.length > 0)
    return `${address?.substring(0, quantity)}...${address?.slice(-3)}`;
};

export {
  capitalize,
  shortenAddress,
  hexToString,
  stringToHex,
  getAddress,
  shortenAddressSuffix,
};
