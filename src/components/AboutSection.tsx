import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AboutSection = () => {
  const statsData = [
    { year: '2022', projects: 1, value: 1 },
    { year: '2023', projects: 3, value: 3 },
    { year: '2024', projects: 5, value: 5 },
    { year: '2025', projects: 7, value: 7 },
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">About me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-left">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm a final-year Computer Science student at United International University, Bangladesh, 
              specializing in Data Science. Through data, I aim to solve real-world problems and create 
              meaningful insights that drive decision-making in business and research.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-2">
                  07<span className="text-secondary">+</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Completed<br />Projects
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-2">
                  03<span className="text-secondary">+</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Research<br />Papers
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-2">
                  03<span className="text-secondary">+</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Years Academic<br />Journey
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Data Visualization & Analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground">Machine Learning & AI Solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">Dashboard Development</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-foreground">Research & Academic Excellence</span>
              </div>
            </div>
          </div>

          {/* Right Content - Chart */}
          <div className="animate-fade-in-right">
            <Card className="p-6 bg-surface border-card-border glow-effect">
              <h3 className="text-xl font-semibold mb-6 text-center">Academic Growth Timeline</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={statsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="year" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
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
                    labelStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Bar 
                    dataKey="projects" 
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;