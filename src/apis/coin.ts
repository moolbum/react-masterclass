import axios from "axios";

export const getCoinList = async () => {
  const res = await axios("https://api.coinpaprika.com/v1/coins");

  return res.data;
};

export const getCoinInfo = async (id: string) => {
  const res = await axios(`https://api.coinpaprika.com/v1/coins/${id}`);

  return res.data;
};

export const getCoinPrice = async (id: string) => {
  const res = await axios(`https://api.coinpaprika.com/v1/tickers/${id}`);

  return res.data;
};
