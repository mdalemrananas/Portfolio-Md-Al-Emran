import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const SkillsSection = () => {
  const programmingSkills = [
    { name: 'Python', proficiency: 90 },
    { name: 'JavaScript', proficiency: 75 },
    { name: 'PHP', proficiency: 70 },
    { name: 'SQL', proficiency: 85 },
    { name: 'Django', proficiency: 75 },
    { name: 'React', proficiency: 70 },
  ];

  const skillDistribution = [
    { name: 'Data Science', value: 40, color: 'hsl(var(--primary))' },
    { name: 'Web Development', value: 30, color: 'hsl(var(--secondary))' },
    { name: 'Analytics', value: 20, color: 'hsl(var(--primary-glow))' },
    { name: 'Other', value: 10, color: 'hsl(var(--muted-foreground))' },
  ];

  const languagesFrameworks = [
    'Python', 'PHP', 'SQL', 'JavaScript', 'Django', 'React', 'Pandas', 'NumPy', 'Scikit-learn'
  ];

  const toolsPlatforms = [
    'Power BI', 'Excel (Advanced)', 'Overleaf/LaTeX', 'Git/GitHub', 'Firebase'
  ];

  const databasesTesting = [
    'MySQL', 'SQLite', 'Pytest', 'Selenium'
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Programming Skills Bar Chart */}
          <Card className="p-6 bg-card border-card-border glow-effect animate-fade-in-left">
            <h3 className="text-xl font-semibold mb-6 text-center">Programming Proficiency</h3>
            <div className="space-y-4">
              {programmingSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-primary font-semibold">{skill.proficiency}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Skills Distribution Pie Chart */}
          <Card className="p-6 bg-card border-card-border glow-effect animate-fade-in-right">
            <h3 className="text-xl font-semibold mb-6 text-center">Skills Distribution</h3>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={skillDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                  labelLine={false}
                  fontSize={14}
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
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="p-6 bg-surface border-card-border glow-effect animate-fade-in-left">
            <h3 className="text-lg font-semibold mb-4 text-center text-gradient-primary">Languages & Frameworks</h3>
            <div className="space-y-3">
              {languagesFrameworks.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-surface border-card-border glow-effect animate-fade-in-up">
            <h3 className="text-lg font-semibold mb-4 text-center text-gradient-primary">Tools & Platforms</h3>
            <div className="space-y-3">
              {toolsPlatforms.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-surface border-card-border glow-effect animate-fade-in-right">
            <h3 className="text-lg font-semibold mb-4 text-center text-gradient-primary">Databases & Testing</h3>
            <div className="space-y-3">
              {databasesTesting.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;