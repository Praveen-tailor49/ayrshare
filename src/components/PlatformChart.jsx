import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const PlatformChart = () => {
  const data = [
    { name: 'Category 1', value: 30 }, // Replace with your data
    { name: 'Category 2', value: 30 },
    { name: 'Category 3', value: 40 },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ff4d4f']; // Define colors for each slice

  return (
      <PieChart width={210} height={210} >
        <Pie
          data={data}
          dataKey="value"
        //   nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
        //   label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        {/* <Legend /> */}
      </PieChart>
  );
};

export default PlatformChart;

