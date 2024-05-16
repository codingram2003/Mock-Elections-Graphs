import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const chartSetting = {
  xAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  width: 500,
  height: 400,
};

const dataset2 = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: "Can 01",
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: "Can 02",
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: "Can 03",
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: "Can 04",
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: "Can 05",
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    seoul: 33,
    month: "Can 06",
  },
];
const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: "Can 01",
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: "Can 02",
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: "Can 03",
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: "Can 04",
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: "Can 05",
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    seoul: 33,
    month: "Can 06",
  },
];

const valueFormatter = (value) => `${value}mm`;

export default function HorizontalBars() {
  return (
    <BarChart
      className="charts"
      dataset={[dataset, dataset2]}
      yAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[
        {
          dataKey: "seoul",
          label: "Seoul rainfall",
          valueFormatter,
          stack: "A",
        },
        {
          dataKey: "seoul",
          label: "Seoul rainfall",
          valueFormatter,
          stack: "A",
        },
      ]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}
