import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type Props={
    title: string
}

const Graph = ({title}: Props) => {
    const data = [
        { month: 'Jan', [title]: 4 },
        { month: 'Feb', [title]: 3 },
        { month: 'Mar', [title]: 5 },
        { month: 'Apr', [title]: 2 },
        { month: 'May', [title]: 6 },
        { month: 'Jun', [title]: 4 },
        { month: 'Jul', [title]: 3 },
        { month: 'Aug', [title]: 5 },
        { month: 'Sep', [title]: 4 },
        { month: 'Oct', [title]: 7 },
        { month: 'Nov', [title]: 6 },
        { month: 'Dec', [title]: 8 },
      ];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={title} fill="#1364F1" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Graph;
