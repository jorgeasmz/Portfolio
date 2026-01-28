"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  { subject: "Software Eng", A: 90, fullMark: 100 },
  { subject: "Data Science", A: 85, fullMark: 100 },
  { subject: "Quantum Comp", A: 80, fullMark: 100 },
  { subject: "Experimentation", A: 75, fullMark: 100 },
  { subject: "DevOps", A: 70, fullMark: 100 },
  { subject: "Mathematics", A: 85, fullMark: 100 },
];

export function SkillRadar() {
  return (
    <div className="h-[300px] w-full my-8">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="hsl(var(--muted-foreground))" strokeOpacity={0.2} />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ 
                fill: "hsl(var(--foreground))", 
                fontSize: 12,
                fontWeight: 500
            }}
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 100]} 
            tick={false} 
            axisLine={false} 
          />
          <Radar
            name="Skills"
            dataKey="A"
            stroke="hsl(var(--primary))"
            strokeWidth={3}
            fill="hsl(var(--primary))"
            fillOpacity={0.3}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
