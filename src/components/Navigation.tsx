import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, User, Briefcase, FileText, Award, GraduationCap, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'research', label: 'Research', icon: FileText },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-full w-64 bg-surface border-r border-card-border z-50">
        <div className="flex flex-col w-full p-6">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gradient-primary">MD AL EMRAN</h2>
            <p className="text-sm text-muted-foreground mt-1">Portfolio</p>
          </div>
          
          <ul className="space-y-2 flex-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth text-left ${
                      activeSection === item.id
                        ? 'bg-primary text-primary-foreground shadow-glow'
                        : 'text-foreground hover:bg-surface-hover hover:text-primary'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="glow"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="shadow-lg"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <nav className="lg:hidden fixed left-0 top-0 h-full w-64 bg-surface border-r border-card-border z-50 animate-slide-in-top">
            <div className="flex flex-col w-full p-6">
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gradient-primary">MD AL EMRAN</h2>
                <p className="text-sm text-muted-foreground mt-1">Portfolio</p>
              </div>
              
              <ul className="space-y-2 flex-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth text-left ${
                          activeSection === item.id
                            ? 'bg-primary text-primary-foreground shadow-glow'
                            : 'text-foreground hover:bg-surface-hover hover:text-primary'
                        }`}
                      >
                        <Icon size={18} />
                        <span className="font-medium">{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default Navigation;