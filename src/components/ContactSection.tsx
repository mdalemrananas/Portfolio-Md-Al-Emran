import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'MD AL EMRAN'
      };

      await emailjs.send(
        'service_r6ru58p', // Service ID
        'template_uav7eih', // Template ID
        templateParams,
        'jaMQ2XSZ57atOTp2I' // Public Key
      );

      toast({
        title: "✅ Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
        variant: "default",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "❌ Message Failed to Send",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      name: 'Email',
      value: 'alamemran.cse@gmail.com',
      icon: Mail,
      href: 'mailto:alamemran.cse@gmail.com',
      color: 'text-primary'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/md-al-emran',
      icon: Linkedin,
      href: 'https://linkedin.com/in/md-al-emran',
      color: 'text-blue-400'
    },
    {
      name: 'GitHub',
      value: 'github.com/md-al-emran',
      icon: Github,
      href: 'https://github.com/md-al-emran',
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Contact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect! Whether you have a project idea, collaboration opportunity, or just want to say hello
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-card-border glow-effect animate-fade-in-left">
            <h3 className="text-2xl font-bold mb-6 text-gradient-primary">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                  Your Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-surface border-card-border focus:border-primary focus:ring-primary"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-surface border-card-border focus:border-primary focus:ring-primary"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full bg-surface border-card-border focus:border-primary focus:ring-primary resize-none"
                  placeholder="Tell me about your project, ideas, or just say hello..."
                />
              </div>

              <Button 
                type="submit" 
                variant="glow" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="animate-fade-in-right">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient-primary">Get in touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in new opportunities, collaborations, and connecting with fellow 
                data enthusiasts. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-4 bg-card border-card-border hover:shadow-glow transition-smooth cursor-pointer hover:scale-105 group"
                  >
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4"
                    >
                      <div className={`p-3 rounded-lg bg-surface ${link.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {link.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>

            {/* Quick Stats */}
            <Card className="p-6 bg-card border-card-border glow-effect">
              <h4 className="font-semibold mb-4 text-center">Response Time</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gradient-primary mb-1">
                    &lt;24
                  </div>
                  <p className="text-xs text-muted-foreground">Hours Average</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient-secondary mb-1">
                    98%
                  </div>
                  <p className="text-xs text-muted-foreground">Response Rate</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center animate-fade-in-up">
          <p className="text-muted-foreground mb-6">
            Available for freelance projects, research collaborations, and full-time opportunities
          </p>
          <div className="flex justify-center items-center gap-4">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <span className="text-sm">Open to new opportunities</span>
            <span className="text-muted-foreground">•</span>
            <CheckCircle className="h-5 w-5 text-green-400" />
            <span className="text-sm">Available for collaboration</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;