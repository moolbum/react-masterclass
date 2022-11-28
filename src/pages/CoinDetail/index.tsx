import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Typo from "../../components/atoms/Typo";
import { Container, Header, Title } from "../Coin";

function CoinDetail() {
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <Header>
        <Title>{state.name || "Loading..."}</Title>
      </Header>
      {!loading ? "...loading" : "...loading"}
    </Container>
  );
}

export default CoinDetail;
