import React from "react";
import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { getCoinHistory } from "../../apis/coin";

function Chart() {
  const { coinId } = useOutletContext<{ coinId: string }>();

  const { data } = useQuery(["coinHistoy", coinId], () =>
    getCoinHistory(`${coinId}`)
  );

  console.log("data", data);

  return <div>Chart</div>;
}

export default Chart;
