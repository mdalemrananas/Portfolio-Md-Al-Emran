import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink, Award } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ResearchSection = () => {
  const papers = [
    {
      id: 1,
      title: 'Predicting Academic Resilience in Students with Depression Using Machine Learning',
      authors: 'MD AL EMRAN, et al.',
      venue: 'Computer Science Research Journal',
      year: '2024',
      abstract: 'Depression among students is a growing concern, significantly impacting academic performance. This study develops machine learning models to predict academic resilience in students with depression using comprehensive datasets encompassing demographic, academic, and lifestyle factors.',
      keywords: ['Machine Learning', 'Academic Resilience', 'Mental Health', 'Data Science'],
      status: 'Published',
      link: '#',
      github: 'https://github.com/mdalemrananas/Machine-Learning-Paper'
    },
    {
      id: 2,
      title: 'Deep Learning–Based Information Extraction from Bangladeshi Land Documents Using OCR and NLP',
      authors: 'MD AL EMRAN, Research Team',
      venue: 'International Conference on AI & Document Processing',
      year: '2024',
      abstract: 'This project develops an intelligent system for automatic information extraction from Bangladeshi land-related documents using advanced OCR and NLP techniques tailored for Bangla language processing.',
      keywords: ['Deep Learning', 'OCR', 'NLP', 'Document Processing', 'Bangla'],
      status: 'In Progress',
      link: '#',
      github: 'https://github.com/mdalemrananas/FYDP-Thesis'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'text-green-400';
      case 'In Progress': return 'text-yellow-400';
      case 'Upcoming': return 'text-blue-400';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Published': return '✅';
      case 'In Progress': return '🔄';
      case 'Upcoming': return '⏳';
      default: return '📄';
    }
  };

  return (
    <section id="research" className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6">
            <span className="text-gradient-primary">Research & Publications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contributing to the academic community through research in machine learning, data science, and AI applications
          </p>
        </div>

        <div className="space-y-8">
          {papers.map((paper, index) => (
            <Card 
              key={paper.id} 
              className={`p-8 bg-card border-card-border glow-effect hover:shadow-glow transition-smooth ${
                index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Left Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{getStatusIcon(paper.status)}</div>
                    <span className={`text-sm font-semibold ${getStatusColor(paper.status)}`}>
                      {paper.status}
                    </span>
                    <span className="text-sm text-muted-foreground">• {paper.year}</span>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-gradient-primary leading-tight">
                    {paper.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-3">
                    <strong>Authors:</strong> {paper.authors}
                  </p>

                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Venue:</strong> {paper.venue}
                  </p>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {paper.abstract}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {paper.keywords.map((keyword, keywordIndex) => (
                      <span 
                        key={keywordIndex}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Actions */}
                <div className="flex flex-col gap-3 lg:min-w-[200px]">
                  <Button 
                    variant="glow" 
                    className="w-full"
                    disabled={paper.status === 'Upcoming'}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Read Paper
                  </Button>
                  
                  <a 
                    href={paper.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline_glow" className="w-full">
                      <FaGithub className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Research Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
          <Card className="p-6 bg-card border-card-border text-center glow-effect">
            <div className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-2">3+</div>
            <p className="text-muted-foreground">Research Papers</p>
          </Card>
          
          <Card className="p-6 bg-card border-card-border text-center glow-effect">
            <div className="text-3xl lg:text-4xl font-bold text-gradient-secondary mb-2">2</div>
            <p className="text-muted-foreground">Conference Presentations</p>
          </Card>
          
          <Card className="p-6 bg-card border-card-border text-center glow-effect">
            <div className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-2">1</div>
            <p className="text-muted-foreground">Ongoing Thesis</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;