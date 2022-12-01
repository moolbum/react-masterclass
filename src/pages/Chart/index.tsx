import React from "react";
import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { getCoinHistory } from "../../apis/coin";
import { CoinHistory } from "../../interface/coin";
import { lightTheme } from "../../styles/theme";

function Chart() {
  const { coinId } = useOutletContext<{ coinId: string }>();

  const { isLoading, data } = useQuery<CoinHistory[]>(
    ["coinHistoy", coinId],
    () => getCoinHistory(`${coinId}`),
    {
      refetchInterval: 10000,
    }
  );

  return (
    <div>
      {isLoading ? (
        "...Loading Chart"
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: data
                ? data?.map((item) => ({
                    x: item.time_close,
                    y: [item.open, item.high, item.low, item.close],
                  }))
                : [],
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
              mode: "light",
            },
            stroke: {
              curve: "smooth",
              width: 1,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisTicks: { show: false },
              axisBorder: { show: false },
              labels: { show: false },
              type: "datetime",
              categories:
                data && data.map(({ time_close }) => Number(time_close)),
            },
            fill: {
              type: "gradient",
            },
            colors: [lightTheme.accentColor],
            tooltip: {
              y: { formatter: (value) => `$${value.toFixed(2)}` },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
