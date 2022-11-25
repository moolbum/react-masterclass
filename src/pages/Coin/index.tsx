import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 10px;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CoinItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CoinItem = styled.li`
  padding: 20px;
  border-radius: 15px;
  background: ${({ theme }) => theme.backgroundColorReversal};

  & > a {
    color: ${({ theme }) => theme.textColorReversal};
  }
`;

const Title = styled.h1`
  font-size: 42px;
  color: ${({ theme }) => theme.accentColor};
`;

const coins = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "usdt-tether",
    name: "Tether",
    symbol: "USDT",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "token",
  },
  {
    id: "usdc-usd-coin",
    name: "USD Coin",
    symbol: "USDC",
    rank: 4,
    is_new: false,
    is_active: true,
    type: "token",
  },
];

function Coin() {
  return (
    <Container>
      <Header>
        <Title>Coin</Title>
      </Header>
      <CoinItemList>
        {coins.map(({ id, name, symbol }) => {
          return (
            <CoinItem key={id}>
              <Link to={name}>
                {name} ({symbol}) &rarr;
              </Link>
            </CoinItem>
          );
        })}
      </CoinItemList>
    </Container>
  );
}

export default Coin;
