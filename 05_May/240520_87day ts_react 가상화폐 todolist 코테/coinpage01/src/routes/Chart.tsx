import React from "react";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
// import ApexCharts from "react-apexcharts";
import ApexCharts from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtome } from "../atoms";

interface ChartProps {
  coinId?: string;
  // isDark: boolean;
}

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

// const Chart = ({ coinId, isDark }: ChartProps) => {
const Chart = ({ coinId }: ChartProps) => {
  const isDark = useRecoilValue(isDarkAtome);
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexCharts
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => parseFloat(price.close)) || [],
            },
          ]}
          options={{
            chart: {
              width: 1200,
              height: 800,
              toolbar: {
                show: false,
              },
              background: "#000",
            },
            grid: {
              show: true,
            },
            theme: {
              mode: isDark ? "dark" : "light",
            },
            stroke: {
              width: 4,
              curve: "smooth",
            },
            xaxis: {
              labels: {
                show: true,
              },
              axisBorder: {
                show: true,
              },
              axisTicks: {
                show: true,
              },
              categories: data?.map((price) =>
                new Date(price.time_close * 1000).toLocaleString()
              ),
            },
            yaxis: {
              labels: {
                show: true,
              },
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
            },
            colors: ["#0fbcf9"],
          }}
        />
      )}
    </div>
  );
};

export default Chart;
