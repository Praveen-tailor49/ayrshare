import React from 'react';
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Sample data
const data = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 50 },
  { name: 'Mar', value: 80 },
  { name: 'Apr', value: 100 },
  { name: 'May', value: 120 },
  { name: 'Jun', value: 110 },
];

const PerformanceChart = () => {
  return (
    <ResponsiveContainer width="100%" height={250} style={{ marginTop: '20px' }}>
      <LineChart data={data}>
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#00ff88" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;
