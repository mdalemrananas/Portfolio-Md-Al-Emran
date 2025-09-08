import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const SkillsSection = () => {
  const programmingSkills = [
    { name: 'Python', proficiency: 90 },
    { name: 'SQL', proficiency: 85 },
    { name: 'Power BI', proficiency: 80 },
    { name: 'JavaScript', proficiency: 75 },
    { name: 'React', proficiency: 70 },
    { name: 'Django', proficiency: 75 },
  ];

  const skillDistribution = [
    { name: 'Data Science', value: 40, color: 'hsl(var(--primary))' },
    { name: 'Web Development', value: 30, color: 'hsl(var(--secondary))' },
    { name: 'Analytics', value: 20, color: 'hsl(var(--primary-glow))' },
    { name: 'Other', value: 10, color: 'hsl(var(--muted-foreground))' },
  ];

  const skillProgression = [
    { year: '2022', level: 30 },
    { year: '2023', level: 55 },
    { year: '2024', level: 75 },
    { year: '2025', level: 90 },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive visualizations showcasing my technical proficiency and growth in data science and development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Programming Skills Bar Chart */}
          <Card className="p-6 bg-card border-card-border glow-effect animate-fade-in-left">
            <h3 className="text-xl font-semibold mb-6 text-center">Programming Proficiency</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={programmingSkills} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  type="number" 
                  domain={[0, 100]}
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  type="category" 
                  dataKey="name"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  width={60}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--surface))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))'
                  }}
                  formatter={(value) => [`${value}%`, 'Proficiency']}
                />
                <Bar 
                  dataKey="proficiency" 
                  fill="hsl(var(--primary))"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Skills Distribution Pie Chart */}
          <Card className="p-6 bg-card border-card-border glow-effect animate-fade-in-up">
            <h3 className="text-xl font-semibold mb-6 text-center">Skills Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={skillDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                  labelLine={false}
                  fontSize={12}
                >
                  {skillDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--surface))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          {/* Skill Progression Line Chart */}
          <Card className="p-6 bg-card border-card-border glow-effect animate-fade-in-right">
            <h3 className="text-xl font-semibold mb-6 text-center">Skill Progression</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={skillProgression}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="year"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  domain={[0, 100]}
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--surface))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    color: 'hsl(var(--foreground))'
                  }}
                  formatter={(value) => [`${value}%`, 'Skill Level']}
                />
                <Line 
                  type="monotone" 
                  dataKey="level" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Skills Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 animate-fade-in-up">
          {[
            '🐍 Python', '🗃️ SQL', '📊 Power BI', '⚛️ React', 
            '🔥 Django', '📈 Excel', '🔧 Git', '☁️ Firebase',
            '🧪 PyTest', '🤖 Scikit-learn', '📱 JavaFX', '🏗️ Laravel'
          ].map((skill, index) => (
            <Card 
              key={index} 
              className="p-4 bg-surface border-card-border hover:shadow-glow transition-smooth cursor-pointer hover:scale-105"
            >
              <div className="text-center text-sm font-medium">{skill}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;