"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  CartesianGrid,
  Legend
} from "recharts";

const data = [
  { year: "2021", dev: 20, research: 0 },
  { year: "2022", dev: 30, research: 0 },
  { year: "2023", dev: 65, research: 40 },
  { year: "2024", dev: 70, research: 80 },
  { year: "2025", dev: 85, research: 85 },
];

export function ActivityGraph() {
  return (
    <div className="h-[300px] w-full my-8">
       <h3 className="text-center text-sm font-medium text-muted-foreground mb-4">
        Focus Distribution
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
           <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted-foreground))" opacity={0.1} />
          <XAxis 
            dataKey="year" 
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} 
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                borderRadius: "8px", 
                border: "1px solid hsl(var(--border))",
                color: "hsl(var(--foreground))"
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="dev" 
            name="Engineering"
            stroke="hsl(var(--primary))" 
            strokeWidth={3}
            dot={{ r: 4, fill: "hsl(var(--primary))" }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="research" 
            name="Research"
            stroke="#a855f7" 
            strokeWidth={3}
            dot={{ r: 4, fill: "#a855f7" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
