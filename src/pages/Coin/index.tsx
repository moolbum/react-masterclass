import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 0px 20px;
`;

const Header = styled.header`
  height: 15vh;
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
  border-radius: 15px;
  background: ${({ theme }) => theme.backgroundColorReversal};

  a {
    padding: 20px;
    display: block;
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

const Title = styled.h1`
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
        <Title>Coin</Title>
      </Header>
      {!loading ? (
        <CoinItemList>
          {coins.map(({ id, name, symbol }) => {
            return (
              <CoinItem key={id}>
                <Link to={id}>
                  {name} ({symbol}) &rarr;
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
