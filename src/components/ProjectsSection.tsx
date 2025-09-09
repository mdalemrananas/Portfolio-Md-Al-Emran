import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'Innovest',
      category: 'Fintech Platform',
      description: 'A full-stack fintech platform connecting investors with startups, featuring AI-powered insights for smarter funding decisions.',
      fullDescription: 'Innovest is a comprehensive fintech platform that bridges the gap between innovative startups and potential investors. The platform incorporates machine learning algorithms to analyze market trends, startup viability, and investment opportunities.',
      tech: ['Django', 'React', 'PostgreSQL', 'ML', 'Chart.js'],
      features: ['Startup Registration', 'Investment Tracking', 'AI Insights', 'Community Interaction', 'Event Networking'],
      image: '/project-innovest.jpg',
      metrics: [
        { month: 'Jan', accuracy: 75 },
        { month: 'Feb', accuracy: 78 },
        { month: 'Mar', accuracy: 82 },
        { month: 'Apr', accuracy: 85 },
        { month: 'May', accuracy: 88 },
        { month: 'Jun', accuracy: 92 },
      ]
    },
    {
      id: 2,
      title: 'Gstore',
      category: 'E-commerce Platform',
      description: 'A full-featured grocery e-commerce platform with multi-user roles, comprehensive product management, and responsive design.',
      fullDescription: 'Gstore is a robust e-commerce solution designed specifically for grocery businesses. It features advanced inventory management, user role management, and a seamless shopping experience.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
      features: ['Product Catalog', 'Cart & Wishlist', 'Order Management', 'Multi-user Roles', 'Responsive Design'],
      image: '/project-gstore.jpg',
      metrics: [
        { month: 'Jan', users: 100 },
        { month: 'Feb', users: 250 },
        { month: 'Mar', users: 400 },
        { month: 'Apr', users: 600 },
        { month: 'May', users: 850 },
        { month: 'Jun', users: 1200 },
      ]
    },
    {
      id: 3,
      title: 'UniEats',
      category: 'Management System',
      description: 'A JavaFX-based university canteen management system with multi-role access and comprehensive administrative features.',
      fullDescription: 'UniEats streamlines university canteen operations with role-based access for students, vendors, and administrators. The system includes real-time order tracking, inventory management, and detailed reporting.',
      tech: ['Java 17', 'JavaFX', 'SQLite', 'Maven', 'ControlsFX'],
      features: ['Food Ordering', 'Vendor Management', 'Admin Dashboard', 'Rewards System', 'Reporting'],
      image: '/project-unieats.jpg',
      metrics: [
        { month: 'Jan', orders: 50 },
        { month: 'Feb', orders: 120 },
        { month: 'Mar', orders: 200 },
        { month: 'Apr', orders: 280 },
        { month: 'May', orders: 350 },
        { month: 'Jun', orders: 420 },
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions built with modern technologies, showcasing my expertise in full-stack development and data science
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`p-6 bg-surface border-card-border glow-effect hover:shadow-glow transition-smooth cursor-pointer group ${
                index === 0 ? 'animate-fade-in-left' : 
                index === 1 ? 'animate-fade-in-up' : 
                'animate-fade-in-right'
              }`}
            >
              <div className="mb-4">
                <div className="w-full h-48 bg-gradient-surface rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-6xl opacity-50">🚀</div>
                </div>
                <span className="text-xs text-primary font-semibold bg-primary/10 px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="glow" 
                      size="sm" 
                      className="w-full"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-surface border-card-border">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-gradient-primary">
                        {selectedProject?.title}
                      </DialogTitle>
                    </DialogHeader>
                    
                    {selectedProject && (
                      <div className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedProject.fullDescription}
                        </p>

                        <div>
                          <h4 className="font-semibold mb-3">Key Features:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {selectedProject.features.map((feature: string, idx: number) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Performance Metrics:</h4>
                          <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={selectedProject.metrics}>
                              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                              <XAxis 
                                dataKey="month"
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
                              />
                              <Line 
                                type="monotone" 
                                dataKey={Object.keys(selectedProject.metrics[0])[1]} 
                                stroke="hsl(var(--primary))" 
                                strokeWidth={3}
                                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>

                        <div className="flex gap-3">
                          <Button variant="outline_glow" className="flex-1">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </Button>
                          <Button variant="hero" className="flex-1">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                >
                  <Eye className="mr-2 h-4 w-4" />
                  Watch Video
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;