import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Typo from "../../components/atoms/Typo";

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export const Container = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 0px 20px;
`;

export const Header = styled.header`
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoinItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CoinItem = styled.li`
  border-radius: 15px;
  background: ${({ theme }) => theme.backgroundColorReversal};

  img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }

  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.3s ease-in;
  }

  & > a {
    color: ${({ theme }) => theme.textColorReversal};
  }

  &:hover {
    a {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  color: ${({ theme }) => theme.accentColor};
`;

function Coin() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch("https://api.coinpaprika.com/v1/coins");
        const json = await res.json();
        setCoins(json.slice(0, 100));
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>
          <Typo size="h1">Coin</Typo>
        </Title>
      </Header>
      {!loading ? (
        <CoinItemList>
          {coins.map(({ id, name, symbol }) => {
            return (
              <CoinItem key={id}>
                <Link to={id} state={{ name, id }}>
                  <img
                    src={`https://coinicons-api.vercel.app/api/icon/${symbol.toLocaleLowerCase()}`}
                    alt="coin-icon"
                  />
                  <Typo size="b4">
                    {name} ({symbol}) &rarr;
                  </Typo>
                </Link>
              </CoinItem>
            );
          })}
        </CoinItemList>
      ) : (
        "...loading"
      )}
    </Container>
  );
}

export default Coin;
