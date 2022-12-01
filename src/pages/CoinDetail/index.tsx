import React from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import {
  Link,
  Outlet,
  PathPattern,
  useLocation,
  useMatch,
  useParams,
} from "react-router-dom";
import styled from "styled-components";
import { getCoinInfo, getCoinPrice } from "../../apis/coin";
import Typo from "../../components/atoms/Typo";
import TabLayout from "../../components/molecules/TabLayout";
import { InfoData, PriceData } from "../../interface/coin";
import { Container, Header, Title } from "../Coin";
import { coinSection, tab } from "./constants";

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
  }
`;

const Tab = styled.div<{ isActive: PathPattern<string> | null }>`
  width: 100%;
  border-radius: 8px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.white : theme.textColorReversal};
  background: ${({ theme, isActive }) =>
    isActive ? theme.accentColor : theme.backgroundColorReversal};
`;

function CoinDetail() {
  const { state } = useLocation() as RouteState;
  const { id } = useParams();

  const chartMatch = useMatch(`/coin/${id}/chart`);
  const priceMatch = useMatch(`/coin/${id}/price`);

  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["coinInfo", id],
    () => getCoinInfo(`${id}`)
  );

  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>(
    ["coinPrice", id],
    () => getCoinPrice(`${id}`),
    { refetchInterval: 5000 }
  );

  const loading = infoLoading || priceLoading;

  return (
    <Container>
      <Helmet>
        <title>
          {state?.name
            ? state?.name
            : infoLoading
            ? "Loading..."
            : infoData?.name}
        </title>
      </Helmet>

      <Header>
        <Title>
          <Typo size="h1">
            {state?.name
              ? state?.name
              : infoLoading
              ? "Loading..."
              : infoData?.name}
          </Typo>
        </Title>
      </Header>
      {loading ? (
        "Loading..."
      ) : (
        <main>
          <Section>
            <ul>
              <li>
                <Typo size="h10">{coinSection.RANK}</Typo>{" "}
                <Typo size="b4">{priceData?.rank}</Typo>
              </li>
              <li>
                <Typo size="h10">{coinSection.SYMBOL}</Typo>{" "}
                <Typo size="b4">${infoData?.symbol}</Typo>
              </li>
              <li>
                <Typo size="h10">{coinSection.PRICE}</Typo>
                <Typo size="b4">${priceData?.quotes.USD.price.toFixed(2)}</Typo>
              </li>
            </ul>
          </Section>
          <Typo>{infoData?.description}</Typo>

          <Section>
            <ul>
              <li>
                <Typo size="h10">{coinSection.TOTAL_SUPPLY}</Typo>
                <Typo size="b4">{priceData?.total_supply}</Typo>
              </li>
              <li>
                <Typo size="h10">{coinSection.MAX_SUPPLY}</Typo>
                <Typo size="b4">{priceData?.max_supply}</Typo>
              </li>
            </ul>
          </Section>
        </main>
      )}

      <TabContainer>
        <Tab isActive={chartMatch ? chartMatch.pattern : null}>
          <Link to="chart">
            <Typo size="h10">{tab.CHART}</Typo>
          </Link>
        </Tab>

        <Tab isActive={priceMatch ? priceMatch.pattern : null}>
          <Link to="price">
            <Typo size="h10">{tab.PRICE}</Typo>
          </Link>
        </Tab>
      </TabContainer>

      <TabLayout>
        <Outlet context={{ coinId: id }} />
      </TabLayout>
    </Container>
  );
}

export default CoinDetail;
