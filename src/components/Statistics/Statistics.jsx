import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";
import { getDonateList } from "../../utility/localStorage";
import { useEffect, useState } from "react";

const Statistics = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("donateCampioan.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const getLocalData = (getDonateList().length * 100) / products.length;

  const data = [
    { name: "Total Donation", value: 100 - getLocalData },
    { name: "Your Donation", value: getLocalData },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + (radius - 50) * Math.cos(-midAngle * RADIAN); // Move label to the right
    const y = cy + (radius + 10) * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        className="font-bold text-2xl"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="container mx-auto px-4">
      <div className="pt-[250px]"></div>
      <div className="flex flex-col justify-center items-center">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart width="90%" height={600}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius="100%"
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-8 md:mt-14 flex gap-x-14 gap-y-4 justify-center flex-wrap">
          <div className="flex gap-4 items-center">
            <p className="text-[#0B0B0B] text-lg">Your Donation</p>
            <div className="bg-[#00C49F] w-[100px] h-3"></div>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-[#0B0B0B] text-lg">Total Donation</p>
            <div className="bg-[#FF444A] w-[100px] h-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
