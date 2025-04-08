
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface HealthMetricsChartProps {
  data: any[];
  dataKey: string;
  color: string;
  name: string;
  domain?: [number | string, number | string];
}

const HealthMetricsChart = ({ data, dataKey, color, name, domain }: HealthMetricsChartProps) => {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={domain || ['dataMin - 5', 'dataMax + 5']} />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey={dataKey} 
            stroke={color} 
            strokeWidth={2}
            name={name}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HealthMetricsChart;
