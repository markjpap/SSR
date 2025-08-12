import { useState } from "react";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { Link, useLocation } from "wouter";
import logoImage from "@assets/LOGO.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const handleDropdownHover = (dropdown: string | null) => {
    setOpenDropdown(dropdown);
  };

  const handleCTAClick = (action: string) => {
    if (action === 'join-talent-pool') {
      if (location !== '/') {
        window.location.href = '/#contact';
      } else {
        scrollToSection('contact');
      }
    } else if (action === 'find-talent') {
      if (location !== '/employers') {
        window.location.href = '/employers';
      }
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo as Home Button */}
          <Link href="/" className="flex-shrink-0">
            <img 
              src={logoImage} 
              alt="SSR - Selina Stanley Recruitment Logo" 
              className="w-auto hover:opacity-80 transition-opacity duration-300"
              style={{ height: '86px' }}
              data-testid="logo-home-button"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/about"
              className="text-navy hover:text-coral transition-colors duration-300 font-medium"
              data-testid="nav-about"
            >
              About & Expertise
            </Link>
            <Link 
              href="/employers"
              className="text-navy hover:text-coral transition-colors duration-300 font-medium"
              data-testid="nav-employers"
            >
              Employers
            </Link>
            
            {/* Job Seekers Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownHover('jobseekers')}
              onMouseLeave={() => handleDropdownHover(null)}
              data-testid="nav-jobseekers-dropdown"
            >
              <button className="flex items-center text-navy hover:text-coral transition-colors duration-300 font-medium">
                Job Seekers <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {openDropdown === 'jobseekers' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-100 py-2 z-50">
                  <a 
                    href="#job-board" 
                    className="flex items-center px-4 py-2 text-navy hover:bg-light-orange hover:text-coral transition-colors"
                    data-testid="dropdown-job-board"
                  >
                    Job Board <ExternalLink className="ml-2 w-3 h-3" />
                  </a>
                  <button 
                    onClick={() => scrollToSection('refer-friend')}
                    className="block w-full text-left px-4 py-2 text-navy hover:bg-light-orange hover:text-coral transition-colors"
                    data-testid="dropdown-refer-friend"
                  >
                    Refer a Friend
                  </button>
                </div>
              )}
            </div>

            <Link 
              href="/resources"
              className="text-navy hover:text-coral transition-colors duration-300 font-medium"
              data-testid="nav-resources"
            >
              Resources
            </Link>
            <Link 
              href="/contact"
              className="text-navy hover:text-coral transition-colors duration-300 font-medium"
              data-testid="nav-contact"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button 
              onClick={() => handleCTAClick('find-talent')}
              className="bg-teal text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              data-testid="button-find-talent-cta"
            >
              Find a Role
            </button>
            <button 
              onClick={() => handleCTAClick('join-talent-pool')}
              className="bg-coral text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              data-testid="button-join-talent-pool-cta"
            >
              Join Our Talent Pool
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-navy hover:text-coral transition-colors duration-300"
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/about"
                className="text-left text-navy hover:text-coral transition-colors duration-300"
                data-testid="nav-mobile-about"
                onClick={() => setIsMenuOpen(false)}
              >
                About & Expertise
              </Link>
              <Link 
                href="/employers"
                className="text-left text-navy hover:text-coral transition-colors duration-300"
                data-testid="nav-mobile-employers"
                onClick={() => setIsMenuOpen(false)}
              >
                Employers
              </Link>
              
              {/* Mobile Job Seekers Section */}
              <div className="pl-4">
                <div className="text-navy font-semibold mb-2">Job Seekers</div>
                <div className="flex flex-col space-y-2 pl-4">
                  <a 
                    href="#job-board" 
                    className="flex items-center text-navy-light hover:text-coral transition-colors duration-300"
                    data-testid="nav-mobile-job-board"
                  >
                    Job Board <ExternalLink className="ml-2 w-3 h-3" />
                  </a>
                  <button 
                    onClick={() => scrollToSection('refer-friend')}
                    className="text-left text-navy-light hover:text-coral transition-colors duration-300"
                    data-testid="nav-mobile-refer-friend"
                  >
                    Refer a Friend
                  </button>
                </div>
              </div>

              <Link 
                href="/resources"
                className="text-left text-navy hover:text-coral transition-colors duration-300"
                data-testid="nav-mobile-resources"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                href="/contact"
                className="text-left text-navy hover:text-coral transition-colors duration-300"
                data-testid="nav-mobile-contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <button 
                  onClick={() => handleCTAClick('find-talent')}
                  className="bg-teal text-white px-6 py-3 rounded-full font-semibold"
                  data-testid="button-mobile-find-talent-cta"
                >
                  Find Talent
                </button>
                <button 
                  onClick={() => handleCTAClick('join-talent-pool')}
                  className="bg-coral text-white px-6 py-3 rounded-full font-semibold"
                  data-testid="button-mobile-join-talent-pool-cta"
                >
                  Join Our Talent Pool
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}