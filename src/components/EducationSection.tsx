import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const EducationSection = () => {
  const education = [
    {
      id: 1,
      degree: 'BSc in Computer Science & Engineering',
      major: 'Data Science',
      institution: 'United International University',
      location: 'Dhaka, Bangladesh',
      period: '2022 - 2026',
      status: 'Final Year',
      description: 'Specializing in Data Science with focus on Machine Learning, AI, and Analytics. Active in research projects and academic excellence.',
      highlights: [
        'Major in Data Science',
        'Research in ML & AI',
        'Active in Academic Projects',
        'Thesis on OCR & NLP'
      ]
    },
    {
      id: 2,
      degree: 'Higher Secondary Certificate (HSC)',
      major: 'Science',
      institution: 'Local College',
      location: 'Bangladesh',
      period: '2018 - 2019',
      status: 'Completed',
      description: 'Completed higher secondary education with focus on Mathematics, Physics, and Chemistry.',
      highlights: [
        'Science Background',
        'Strong Mathematics',
        'Physics & Chemistry',
        'Academic Excellence'
      ]
    },
    {
      id: 3,
      degree: 'Secondary School Certificate (SSC)',
      major: 'Science',
      institution: 'Local High School',
      location: 'Bangladesh',
      period: '2016 - 2017',
      status: 'Completed',
      description: 'Foundational education with excellent performance in science and mathematics.',
      highlights: [
        'Foundation in Science',
        'Mathematics Excellence',
        'Academic Discipline',
        'Leadership Activities'
      ]
    }
  ];


  const certifications = [
    { name: 'Data Analyst & Power BI', issuer: 'Interactive Care', status: 'Completed' },
    { name: 'Basic Python', issuer: 'Udemy', status: 'Completed' },
    { name: 'Advanced SQL', issuer: 'Udemy', status: 'Completed' },
    { name: 'Git & GitHub', issuer: 'Udemy', status: 'Completed' },
    { name: 'Advanced Excel', issuer: 'Udemy', status: 'Completed' },
    { name: 'Machine Learning', issuer: 'Coursera', status: 'In Progress' },
  ];

  return (
    <section id="education" className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6">
            <span className="text-gradient-primary">Education Timeline</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey in computer science and data science, building a strong foundation for innovation
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <div 
              key={edu.id} 
              className={`flex flex-col lg:flex-row items-start gap-8 ${
                index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'
              }`}
            >
              {/* Timeline */}
              <div className="hidden lg:flex flex-col items-center">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>
                {index < education.length - 1 && (
                  <div className="w-px h-32 bg-gradient-to-b from-primary to-transparent mt-2"></div>
                )}
              </div>

              {/* Content */}
              <Card className="flex-1 p-8 bg-surface border-card-border glow-effect">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        edu.status === 'Final Year' ? 'bg-primary/20 text-primary' :
                        edu.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold mb-2 text-gradient-primary">
                      {edu.degree}
                    </h3>
                    
                    {edu.major && (
                      <p className="text-lg font-semibold text-secondary mb-3">
                        Major: {edu.major}
                      </p>
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.institution}, {edu.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fade-in-up">
          <Card className="p-6 bg-surface border-card-border text-center glow-effect">
            <div className="text-3xl font-bold text-gradient-primary mb-2">4</div>
            <p className="text-sm text-muted-foreground">Years of Study</p>
          </Card>
          <Card className="p-6 bg-surface border-card-border text-center glow-effect">
            <div className="text-3xl font-bold text-gradient-secondary mb-2">Final Year</div>
            <p className="text-sm text-muted-foreground">Academic Status</p>
          </Card>
          <Card className="p-6 bg-surface border-card-border text-center glow-effect">
            <div className="text-3xl font-bold text-gradient-primary mb-2">7+</div>
            <p className="text-sm text-muted-foreground">Academic Projects</p>
          </Card>
        </div>

        {/* Certifications */}
        <div className="animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-8 text-center text-gradient-primary">
            Certifications & Training
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="p-4 bg-surface border-card-border hover:shadow-glow transition-smooth"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-2 h-2 rounded-full ${
                    cert.status === 'Completed' ? 'bg-green-400' : 'bg-yellow-400'
                  }`}></div>
                  <span className="text-xs text-muted-foreground">{cert.status}</span>
                </div>
                <h4 className="font-semibold text-sm mb-2">{cert.name}</h4>
                <p className="text-xs text-muted-foreground mb-3">{cert.issuer}</p>
                <div className="flex gap-2">
                  <button className="flex-1 text-xs px-3 py-1 bg-primary/20 text-primary rounded hover:bg-primary/30 transition-colors">
                    View Details
                  </button>
                  <button className="flex-1 text-xs px-3 py-1 bg-secondary/20 text-secondary rounded hover:bg-secondary/30 transition-colors">
                    View Certificate
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;