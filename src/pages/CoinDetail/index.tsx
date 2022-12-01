import React, { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useMatch,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import Typo from "../../components/atoms/Typo";
import { InfoData, PriceData } from "../../interface/coin";
import { Container, Header, Title } from "../Coin";

interface RouteState {
  state: {
    name: string;
    id: string;
  };
}

const Section = styled.section`
  margin: 20px 0;
  padding: 10px 15px;
  color: ${({ theme }) => theme.textColorReversal};
  background: ${({ theme }) => theme.backgroundColorReversal};
  border-radius: 8px;

  ul {
    display: flex;
    justify-content: space-between;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  a {
    display: block;

    padding: 10px;
    text-align: center;
    border-radius: 8px;
    color: ${({ theme }) => theme.textColorReversal};
    background: ${({ theme }) => theme.backgroundColorReversal};
  }
`;

const Tab = styled.div`
  width: 100%;
`;

function CoinDetail() {
  const { state } = useLocation() as RouteState;
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState<InfoData>();
  const [price, setPrice] = useState<PriceData>();

  const chartMatch = useMatch(`/coin/${id}/chart`);
  const priceMatch = useMatch(`/coin/${id}/price`);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const infoData = await (
          await fetch(`https://api.coinpaprika.com/v1/coins/${id}`)
        ).json();

        const priceData = await (
          await fetch(`https://api.coinpaprika.com/v1/tickers/${id}`)
        ).json();

        setInfo(infoData);
        setPrice(priceData);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  console.log("chartMatch>>>>>>", chartMatch);
  console.log("priceMatch>>>>>>", priceMatch);

  // console.log("infoData>>>>", info);
  // console.log("priceData>>>>", price);

  return (
    <Container>
      <Header>
        <Title>
          <Typo size="h1">
            {state?.name ? state?.name : !loading ? info?.name : "Loading..."}
          </Typo>
        </Title>
      </Header>
      {!loading
        ? info &&
          price && (
            <main>
              <Section>
                <ul>
                  <li>
                    <Typo size="h10">RANK:</Typo>{" "}
                    <Typo size="b4">{price.rank}</Typo>
                  </li>
                  <li>
                    <Typo size="h10">SYMBOL:</Typo>{" "}
                    <Typo size="b4">${info.symbol}</Typo>
                  </li>
                  <li>
                    <Typo size="h10">OPEN SOURCE:</Typo>
                    <Typo size="b4">{info.open_source ? "Yes" : false}</Typo>
                  </li>
                </ul>
              </Section>
              <Typo>{info.description}</Typo>

              <Section>
                <ul>
                  <li>
                    <Typo size="h10">TOTAL SUPPLY:</Typo>
                    <Typo size="b4">{price.total_supply}</Typo>
                  </li>
                  <li>
                    <Typo size="h10">MAX SUPPLY:</Typo>
                    <Typo size="b4">{price.max_supply}</Typo>
                  </li>
                </ul>
              </Section>

              <TabContainer>
                <Tab>
                  <Link to="chart">
                    <Typo size="h10">CHART</Typo>
                  </Link>
                </Tab>
                <Tab>
                  <Link to="price">
                    <Typo size="h10">PRICE</Typo>
                  </Link>
                </Tab>
              </TabContainer>

              <Outlet />
            </main>
          )
        : "...loading"}
    </Container>
  );
}

export default CoinDetail;
