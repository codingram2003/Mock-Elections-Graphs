import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";


export default function StackBars() {
  return (
    <div>
      <div className="labels">
        <div className="label">
          <div class="square red"></div>
          <p>Judged</p>
        </div>

        <div className="label">
          <div class="square blue"></div>
          <p>Voted</p>
        </div>
      </div>
      <BarChart
        className="chart"
        sx={{
          //change left yAxis label styles
          "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
            strokeWidth: "2.4",
            fill: "#F3B664",
          },
          // change all labels fontFamily shown on both xAxis and yAxis
          "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
            fontFamily: "Roboto",
          },
          // change bottom label styles
          "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
            strokeWidth: "1.5",
            fill: "#F3B664",
          },
          // bottomAxis Line Styles
          "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
            stroke: "#F9F9E0",
            strokeWidth: 2.4,
          },
          // leftAxis Line Styles
          "& .MuiChartsAxis-left .MuiChartsAxis-line": {
            stroke: "#F9F9E0",
            strokeWidth: 2.4,
          },
        }}
        series={[
          {
            data: [0, 36, 36, 20, 42, 20, 40, 43, 41 ],
            stack: "A",
            

            color: "#BE3144",
          },
          {
            data: [0, 56, 125, 319, 66, 35, 86, 66, 338],
            stack: "A",

            color: "#F05941",
          },
        ]}
        width={600}
        height={550}

        
      />
    </div>
  );
}
