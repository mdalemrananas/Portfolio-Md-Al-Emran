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
    <section id="about" className="py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6">
            <span className="text-gradient-primary">About me</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-center">
              I am a final-year Computer Science student at United International University, specializing in Data Science. I build end-to-end intelligent systems that transform messy, raw data into scalable, production-ready solutions. From architecting NLP pipelines to developing predictive analytics models, I focus on delivering technical excellence with human-centered explainability.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-12">
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


          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;