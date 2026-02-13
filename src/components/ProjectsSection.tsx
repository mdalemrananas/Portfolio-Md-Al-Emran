import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';

// ✅ Correct relative imports (CASE-SENSITIVE)
import innovestImg from '../assets/innovest_homepage.jpeg';
import byteArenaImg from '../assets/ByteArena_Homepage.jpeg';
import uniEatsImg from '../assets/uniEat.jpg';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: 'Innovest',
      category: 'Fintech Platform',
      description:
        'A full-stack fintech platform connecting investors with startups.',
      fullDescription:
        'Innovest bridges startups and investors with AI-powered analytics and smart investment tracking.',
      tech: ['Django', 'React', 'PostgreSQL', 'ML', 'Chart.js'],
      features: [
        'Startup Registration',
        'Investment Tracking',
        'AI Insights',
        'Community Interaction',
        'Event Networking'
      ],
      image: innovestImg,
      github: 'https://github.com/mdalemrananas/InnoVest-StartUp-Investment-Platform',
      live: 'https://innovest-demo.vercel.app',
      youtube: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
    },
    {
      id: 2,
      title: 'ByteArena',
      category: 'EdTech Platform',
      description:
        'Full-stack platform for coding contests and practice problems.',
      fullDescription:
        'ByteArena is a React-Django platform for competitive programming with automated scoring and live leaderboards.',
      tech: ['Django', 'DRF', 'React', 'Firebase Auth', 'Supabase', 'JWT'],
      features: [
        'Contest',
        'Problem Solving',
        'Submission with Score',
        'Multi-user Roles',
        'Live Leaderboard'
      ],
      image: byteArenaImg,
      github: 'https://github.com/mdalemrananas/ByteArena',
      live: 'https://innovest-demo.vercel.app',
      youtube: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
    },
    {
      id: 3,
      title: 'UniEats',
      category: 'Management System',
      description:
        'JavaFX-based university canteen management system.',
      fullDescription:
        'UniEats streamlines university canteen operations with real-time ordering, vendor management, and reporting.',
      tech: ['Java 17', 'JavaFX', 'SQLite', 'Maven', 'ControlsFX'],
      features: [
        'Food Ordering',
        'Vendor Management',
        'Admin Dashboard',
        'Rewards System',
        'Reporting'
      ],
      image: uniEatsImg,
      github: 'https://github.com/mdalemrananas/UniEats--Campus-Food-Connect',
      live: 'https://innovest-demo.vercel.app',
      youtube: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
    }
  ];

  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6">
            <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions built with modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="p-6 bg-surface border-card-border hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="mb-4">
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
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
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                {/* VIEW DETAILS */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      className="w-full"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </DialogTrigger>

                  <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">
                        {selectedProject?.title}
                      </DialogTitle>
                    </DialogHeader>

                    {selectedProject && (
                      <div className="space-y-6">
                        <p>{selectedProject.fullDescription}</p>

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

                        {/* LINKS */}
                        <div className="flex gap-3">
                          {selectedProject.github && (
                            <a
                              href={selectedProject.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1"
                            >
                              <Button variant="outline" className="w-full">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                              </Button>
                            </a>
                          )}

                          {selectedProject.live && (
                            <a
                              href={selectedProject.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1"
                            >
                              <Button className="w-full">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>

                {/* YOUTUBE BUTTON */}
                {project.youtube && (
                  <a
                    href={project.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-red-50 border-red-200 text-red-600 hover:bg-red-100"
                    >
                      <FaYoutube className="mr-2 h-4 w-4" />
                      YouTube
                    </Button>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;