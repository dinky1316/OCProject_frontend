import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
// 우럭 수입

// 단위 : 톤
const data1 = [
  {
    name: "중국",
    중량: 36524488.14,
  },
  {
    name: "미국",
    중량: 3969616.32,
  },
  {
    name: "캐나다",
    중량: 1203521.32,
  },
  {
    name: "싱가포르",
    중량: 213883.54,
  },
];

const data2 = [
  {
    name: "중국",
    금액: 154576314149,
  },
  {
    name: "미국",
    금액: 6794422285,
  },
  {
    name: "캐나다",
    금액: 567538593,
  },
  {
    name: "싱가포르",
    금액: 1032059402,
  },
];

export default class importRockfish extends PureComponent {
  render() {
    return (
      <div className="all" mt-4>
        <div className="mapChart">
          <iframe
            src="https://public.tableau.com/views/_16970965264190/2_1?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no?:embed=true"
            width="1500"
            height="1100"
            title="우럭"
          />
        </div>
      </div>
    );
  }
}
