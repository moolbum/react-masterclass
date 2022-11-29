import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import Typo from "../../components/atoms/Typo";
import { Container, Header, Title } from "../Coin";

export interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

export interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
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

function CoinDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState<InfoData>();
  const [price, setPrice] = useState<PriceData>();

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

  console.log("infoData>>>>", info);
  console.log("priceData>>>>", price);

  return (
    <Container>
      <Header>
        <Title>
          <Typo size="h1">{!loading ? info?.name : "Loading..."}</Typo>
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
              
              <Link to="chart">Chart</Link>
              <Link to="price">Price</Link>
              <Outlet />
            </main>
          )
        : "...loading"}
    </Container>
  );
}

export default CoinDetail;
