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

          {/* Right Content - Soft Skills */}
          <div className="animate-fade-in-right">
            <Card className="p-6 bg-surface border-card-border glow-effect">
              <h3 className="text-xl font-semibold mb-6 text-center text-gradient-primary">Soft Skills</h3>
              <div className="space-y-4">
                {[
                  { skill: 'Problem-solving', level: 95, icon: '🧩' },
                  { skill: 'Analytical Thinking', level: 90, icon: '🔍' },
                  { skill: 'Team Collaboration', level: 85, icon: '🤝' },
                  { skill: 'Communication', level: 80, icon: '💬' },
                  { skill: 'Adaptability', level: 88, icon: '🔄' },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-medium text-foreground">{item.skill}</span>
                      </div>
                      <span className="text-sm text-primary font-semibold">{item.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;