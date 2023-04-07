import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Charts = () => {
  const data = [
    {
      month: "jan",
      vendors: "23",
      machines: "145",
      enquires: "34",
    },
    {
      month: "feb",
      vendors: "20",
      machines: "125",
      enquires: "54",
    },
    {
      month: "mar",
      vendors: "33",
      machines: "105",
      enquires: "44",
    },
    {
      month: "april",
      vendors: "23",
      machines: "145",
      enquires: "34",
    },
    {
      month: "may",
      vendors: "53",
      machines: "245",
      enquires: "74",
    },
    {
      month: "june",
      vendors: "23",
      machines: "185",
      enquires: "69",
    },
    {
      month: "july",
      vendors: "29",
      machines: "165",
      enquires: "25",
    },
    {
      month: "aug",
      vendors: "13",
      machines: "155",
      enquires: "51",
    },
    {
      month: "sep",
      vendors: "43",
      machines: "195",
      enquires: "34",
    },
    {
      month: "oct",
      vendors: "23",
      machines: "145",
      enquires: "34",
    },
    {
      month: "nov",
      vendors: "83",
      machines: "45",
      enquires: "34",
    },
    {
      month: "dec",
      vendors: "53",
      machines: "245",
      enquires: "78",
    },
  ];
  return (
    <>

        <div className="page-content">
          <div className="container-fluid">
            <div className="card-body p-0 pb-2">
              <div className="w-100">
                <ResponsiveContainer>
                  <ComposedChart
                    width={400}
                    height={300}
                    data={data}
                    margin={{
                      top: 0,
                      right: 0,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid stroke="#f5f5f5" vertical={false} />
                    <XAxis
                      dataKey="month"
                      interval={data.length - 2}
                      tickLine={false}
                      axisLine={{ stroke: "#f5f5f5" }}
                    />
                    <Tooltip />
                    <Legend verticalAlign="top" align="left" height={36} />
                    <Bar
                      radius={[10, 10, 0, 0]}
                      dataKey="machines"
                      barSize={20}
                      fill="#F0F2F8"
                      yAxisId="left"
                      legendType="rect"
                      name="Total Items"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
                <div
                  id="customer_impression_charts"
                  data-colors='["--vz-info", "--vz-primary", "--vz-danger"]'
                  className="apex-charts"
                  dir="ltr"
                />
              </div>
            </div>
          </div>
        </div>

    </>
  );
};

export default Charts;
