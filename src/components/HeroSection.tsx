import { Button } from '@/components/ui/button';
import { Download, ChevronDown } from 'lucide-react';
import profileImage from '@/assets/profile-image-new.jpg';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  const handleDownloadResume = () => {
    // Create a temporary link for the resume download
    const link = document.createElement('a');
    link.href = '/resume-md-al-emran.pdf'; // This would need to be added to public folder
    link.download = 'MD_AL_EMRAN_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                <span className="block text-foreground">Hello.</span>
                <span className="block text-foreground">I'm AL EMRAN</span>
                <span className="block text-gradient-primary">Data Analyst</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-2">
                Junior Data Scientist | ML Enthusiast
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Data Visualization • Machine Learning • Dashboard Development • Research & AI Solutions
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                variant="outline_glow" 
                size="lg"
                onClick={handleDownloadResume}
                className="group"
              >
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                My Resume
              </Button>
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