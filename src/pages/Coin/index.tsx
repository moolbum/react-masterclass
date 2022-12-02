import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getCoinList } from "../../apis/coin";
import Typo from "../../components/atoms/Typo";
import { CoinInterface } from "../../interface/coin";

function Coin() {
  const { isLoading, data } = useQuery<CoinInterface[]>(
    "coinList",
    getCoinList,
    {
      select: (data) => data.slice(0, 30),
    }
  );

  return (
    <Container>
      <Header>
        <Title>
          <Typo size="h1" color="accentColor">
            Coin
          </Typo>
        </Title>
      </Header>
      {isLoading ? (
        "...loading"
      ) : (
        <CoinItemList>
          {data?.map(({ id, name, symbol }) => {
            return (
              <CoinItem key={id}>
                <Link to={id} state={{ name, id }}>
                  <img
                    src={`https://coinicons-api.vercel.app/api/icon/${symbol.toLocaleLowerCase()}`}
                    alt="coin-icon"
                  />
                  <Typo size="b4" color="backgroundColor">
                    {name} ({symbol}) &rarr;
                  </Typo>
                </Link>
              </CoinItem>
            );
          })}
        </CoinItemList>
      )}
    </Container>
  );
}

export default Coin;

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
    color: ${({ theme }) => theme.textColorReversal};

    &:hover {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`;

export const Title = styled.h1`
  font-size: 42px;

  a {
    color: ${({ theme }) => theme.accentColor};
  }
`;
