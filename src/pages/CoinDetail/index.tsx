import React from "react";
import { useParams } from "react-router-dom";

function CoinDetail() {
  const { name } = useParams();
  return <div>CoinDetail {name}</div>;
}

export default CoinDetail;
