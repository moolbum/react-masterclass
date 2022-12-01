import React, { useContext } from "react";
import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { getCoinHistory } from "../../apis/coin";
import { ThemeContext } from "../../contexts/theme";
import { CoinHistory } from "../../interface/coin";

function Chart() {
  const { coinId } = useOutletContext<{ coinId: string }>();
  const contextTheme = useContext(ThemeContext);

  const { isLoading, data } = useQuery<CoinHistory[]>(
    ["coinHistoy", coinId],
    () => getCoinHistory(`${coinId}`)
  );

  return (
    <div>
      {isLoading ? (
        "...Loading Chart"
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data ? data.map(({ close }) => Number(close)) : [],
            },
          ]}
          options={{
            chart: {
              height: 500,
              width: 500,
              toolbar: { show: false },
              background: "transparent",
            },
            theme: {
              mode: contextTheme.theme === "lightTheme" ? "light" : "dark",
            },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisTicks: { show: false },
              axisBorder: { show: false },
              labels: { show: false },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
