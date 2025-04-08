
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface HealthMetricsChartProps {
  data: any[];
  dataKey: string;
  color: string;
  name: string;
  domain?: [number | string, number | string];
  secondaryDataKey?: string;
  secondaryColor?: string;
  secondaryName?: string;
}

const HealthMetricsChart = ({ 
  data, 
  dataKey, 
  color, 
  name, 
  domain,
  secondaryDataKey,
  secondaryColor,
  secondaryName
}: HealthMetricsChartProps) => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded-lg shadow-md">
          <p className="font-medium text-sm">{label}</p>
          <div className="flex flex-col gap-1 mt-1">
            <p style={{ color }} className="text-xs flex items-center">
              <span className="inline-block w-2 h-2 rounded-full mr-1" style={{ backgroundColor: color }}></span>
              {name}: {payload[0].value}
            </p>
            {secondaryDataKey && secondaryName && (
              <p style={{ color: secondaryColor }} className="text-xs flex items-center">
                <span className="inline-block w-2 h-2 rounded-full mr-1" style={{ backgroundColor: secondaryColor }}></span>
                {secondaryName}: {payload[1]?.value}
              </p>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
            tickLine={{ stroke: '#E0E0E0' }}
            axisLine={{ stroke: '#E0E0E0' }}
          />
          <YAxis 
            domain={domain || ['dataMin - 5', 'dataMax + 5']}
            tick={{ fontSize: 12 }}
            tickLine={{ stroke: '#E0E0E0' }}
            axisLine={{ stroke: '#E0E0E0' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey={dataKey} 
            stroke={color} 
            strokeWidth={2.5}
            name={name}
            dot={{ r: 4, strokeWidth: 1 }}
            activeDot={{ r: 6, stroke: color, strokeWidth: 1 }}
          />
          {secondaryDataKey && secondaryColor && secondaryName && (
            <Line 
              type="monotone" 
              dataKey={secondaryDataKey} 
              stroke={secondaryColor} 
              strokeWidth={2.5}
              name={secondaryName}
              dot={{ r: 4, strokeWidth: 1 }}
              activeDot={{ r: 6, stroke: secondaryColor, strokeWidth: 1 }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HealthMetricsChart;
