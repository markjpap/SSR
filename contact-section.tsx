import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  userType: 'employer' | 'jobSeeker' | '';
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    userType: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const selectUserType = (type: 'employer' | 'jobSeeker') => {
    setFormData(prev => ({
      ...prev,
      userType: type
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.userType || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // In a real implementation, this would submit to an API
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      userType: '',
      message: ''
    });
  };

  const handleBookCall = () => {
    // In a real implementation, this would open a calendar booking system
    console.log('Book consultation call');
    toast({
      title: "Booking consultation",
      description: "Redirecting to calendar..."
    });
  };

  const handleSubmitResume = () => {
    // In a real implementation, this would open a resume upload form
    console.log('Submit resume');
    toast({
      title: "Resume submission",
      description: "Opening resume upload form..."
    });
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#1f2b8d', color: 'white' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
            Let's find the right fit, for your centre or your career.
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We'd love to hear from you. Whether you're ready to hire or curious about your next step, start the conversation today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl">
            <h3 className="text-2xl font-serif font-bold mb-6 text-white">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">I am a:</label>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    type="button"
                    onClick={() => selectUserType('employer')}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      formData.userType === 'employer' 
                        ? 'bg-coral text-white' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                    data-testid="button-select-employer"
                  >
                    Employer
                  </button>
                  <button 
                    type="button"
                    onClick={() => selectUserType('jobSeeker')}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      formData.userType === 'jobSeeker' 
                        ? 'bg-coral text-white' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                    data-testid="button-select-job-seeker"
                  >
                    Job Seeker
                  </button>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name *" 
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-white/20 text-white placeholder-white/60 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral"
                  data-testid="input-name"
                />
                <input 
                  type="email" 
                  placeholder="Email Address *" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-white/20 text-white placeholder-white/60 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral"
                  data-testid="input-email"
                />
              </div>
              
              <input 
                type="tel" 
                placeholder="Phone Number" 
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full bg-white/20 text-white placeholder-white/60 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral"
                data-testid="input-phone"
              />
              
              <textarea 
                placeholder="Tell us about your needs... *" 
                rows={4} 
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="w-full bg-white/20 text-white placeholder-white/60 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral resize-none"
                data-testid="textarea-message"
              />
              
              <button 
                type="submit" 
                className="w-full bg-coral text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                data-testid="button-submit-contact"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6 text-white">Let's Connect</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <div className="text-white/80">(02) 9123 4567</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-white/80">contact@sstanleyrecruitment.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-light-orange rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Office Address</div>
                    <div className="text-white/80">123 Career Lane, Suite 456, Sydney</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button 
                onClick={handleSubmitResume}
                className="w-full bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:bg-white/30 transition-all duration-300"
                data-testid="button-submit-resume"
              >
                📄 Submit Your Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
