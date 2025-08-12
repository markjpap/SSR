import logoImage from "@assets/LOGO.png";

export default function Footer() {
  return (
    <footer className="bg-navy-light text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img 
              src={logoImage} 
              alt="SSR - Selina Stanley Recruitment Logo" 
              className="w-auto mb-4 filter brightness-0 invert"
              style={{ height: '40px' }}
            />
            <p className="text-white/80 text-sm leading-relaxed">
              Connecting exceptional educators with leading early childhood providers across Australia.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">For Employers</h4>
            <div className="space-y-2 text-sm">
              <div><a href="#" className="text-white/80 hover:text-white transition-colors">Find a Role</a></div>
              <div><a href="#" className="text-white/80 hover:text-white transition-colors">Submit Vacancy</a></div>
              <div><a href="#" className="text-white/80 hover:text-white transition-colors">Salary Guide</a></div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">For Job Seekers</h4>
            <div className="space-y-2 text-sm">
              <div><a href="#" className="text-white/80 hover:text-white transition-colors">Current Jobs</a></div>
              <div><a href="#" className="text-white/80 hover:text-white transition-colors">Join Talent Pool</a></div>
              <div><a href="#" className="text-white/80 hover:text-white transition-colors">Career Tips</a></div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <div className="space-y-2 text-sm">
              <div><a href="#" className="text-white/80 hover:text-white transition-colors">Industry Insights</a></div>
              <div><a href="#" className="text-white/80 hover:text-white transition-colors">Newsletter</a></div>
              <div><a href="#" className="text-white/80 hover:text-white transition-colors">About Selina</a></div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 SSR - Selina Stanley Recruitment. All rights reserved. | 
            <a href="#" className="hover:text-white transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
