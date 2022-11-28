import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Typo from "../../components/atoms/Typo";
import { CoinItem, Container, Header, Title } from "../Coin";

function CoinDetail() {
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
  const [coin, setCoin] = useState();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.coinpaprika.com/v1/coins/${state.name}`
        );
        const json = await res.json();
        setCoin(json);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [state.name]);

  console.log("coin>>>>", coin);

  return (
    <Container>
      <Header>
        <Title>{state.name || "Loading..."}</Title>
      </Header>
      {!loading ? coin && <div>test</div> : "...loading"}
    </Container>
  );
}

export default CoinDetail;
