import axios from "axios";
import { BASE_URL, COIN_HISTORY_URL } from "./constants";

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

export const getCoinHistory = async (id: string) => {
  const endDate = Math.floor(Date.now() / 1000); // 현재 시간 -> 초
  const startDate = endDate - 60 * 60 * 24 * 7 * 1; // 현재 시간 - 1주일// 현재 시간 - 1주일

  const res = await axios(
    `${COIN_HISTORY_URL}?coinId=${id}&start=${startDate}&end=${endDate}`
  );

  return res.data;
};
