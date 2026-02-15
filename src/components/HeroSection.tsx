import { Button } from '@/components/ui/button';
import { Download, ChevronDown } from 'lucide-react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import profileImage from '@/assets/profile-image-new.jpg';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
  onDownloadResume: () => void;
}

const HeroSection = ({ onNavigate, onDownloadResume }: HeroSectionProps) => {
  const handleDownloadResume = () => {
    // Create a temporary link for resume download
    const link = document.createElement('a');
    
    // Use absolute URL for GitHub Pages
    link.href = window.location.origin + '/Portfolio-Md-Al-Emran/MD_AL_EMRAN_CV.pdf';
    link.download = 'MD_AL_EMRAN_CV.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Fallback: open in new tab if download fails
    setTimeout(() => {
      window.open(window.location.origin + '/Portfolio-Md-Al-Emran/MD_AL_EMRAN_CV.pdf', '_blank');
    }, 1000);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-glow rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-secondary opacity-20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-left">
            <div className="mb-6">
              <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                <span className="block text-foreground">Hello, I'm</span>
                <span className="block text-gradient-primary">AL EMRAN</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-2">
                Data Scientist & Machine Learning Engineer
              </p>
              <p className="text-base text-muted-foreground max-w-2xl">
                Specializing in data visualization, ML solutions, and intelligent systems development
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => onNavigate('projects')}
                className="group"
              >
                📂 VIEW PROJECTS
                <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                variant="glow" 
                size="lg"
                onClick={handleDownloadResume}
                className="relative group overflow-hidden bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-glow"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 animate-shimmer"></span>
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform relative z-10" />
                <span className="relative z-10 font-semibold">Download Resume</span>
              </Button>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a 
                href="https://www.facebook.com/imran.khan.511532" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-surface border border-card-border hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
              >
                <FaFacebook className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/_imrannkhan?utm_source=qr&igsh=MW50a3g5NGRueWs4eA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-surface border border-card-border hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
              >
                <FaInstagram className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://github.com/mdalemrananas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-surface border border-card-border hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
              >
                <FaGithub className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/emran7164/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-surface border border-card-border hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
              >
                <FaLinkedin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://www.hackerrank.com/profile/mdalemrananas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-surface border border-card-border hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
              >
                <FaHackerrank className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              <div className="profile-glow">
                <img 
                  src={profileImage} 
                  alt="MD AL EMRAN - Data Analyst & ML Enthusiast"
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/20"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold animate-float">
                🎓 Final Year
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold animate-float" style={{ animationDelay: '1s' }}>
                🚀 Data Science
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => onNavigate('about')}
            className="text-primary hover:text-primary-glow transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;