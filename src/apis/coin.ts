import axios from "axios";
import { BASE_URL } from "./constants";

export const getCoinList = async () => {
  const res = await axios(`${BASE_URL}/coins`);
  return res.data;
};

export const getCoinInfo = async (id: string) => {
  const res = await axios(`${BASE_URL}/coins/${id}`);

  return res.data;
};

export const getCoinPrice = async (id: string) => {
  const res = await axios(`${BASE_URL}/tickers/${id}`);

  return res.data;
};
