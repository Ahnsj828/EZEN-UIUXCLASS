import React from "react";
// import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";
// "react-apexcharts"; => 앞에 react- 붙여줘야한다
// "apexcharts"; => js에서만 사용할수있다

interface ChartProps {
  coinId?: string;
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

const Chart = ({ coinId }: ChartProps) => {
  // const params = useParams();
  // console.log(params);

  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  // ohlcv 주식용어

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
              background: "transparent", // 배경색
            },
            grid: {
              show: false,
            }, // 그래프 배경 선
            theme: {
              mode: "dark",
            }, // dark모드냐 light 모드냐
            stroke: {
              width: 4,
              curve: "smooth", // 선이 부드럽게 꺾이게
            },
            xaxis: {
              labels: {
                show: true,
              },
              axisBorder: {
                show: true,
              }, // x축 border
              axisTicks: {
                show: true,
              }, // 점선
              categories: data?.map((price) =>
                new Date(price.time_close * 1000).toLocaleDateString()
              ), // 시간 지정(현재시간)  /toLocaleDateString 현재 위치에 맞게
            }, // x축
            yaxis: {
              labels: {
                show: true,
              },
            }, // y축
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#0be881"], stops: [0, 100] }, // stops: [0, 100] => 0에서 100까지 스무스하게 주겠다
            },
            colors: ["#0fbcf9"], // 끝나는지점 색 지정
            tooltip: {
              y: {
                formatter: (value) => `${value.toFixed(3)}`,
              },
            },
          }}
        />
      )}
      {/* isLoading 참이면 Loading Chart... 문자열이 나오게 / false면 ApexCharts나오게*/}
    </div>
  );
};

export default Chart;

// 코인안에 하단에 텝 영역 / 선택 될때만 나오게할거다
