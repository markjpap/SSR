export default function OpportunitiesSection() {
  const handleViewJob = () => {
    // In a real implementation, this would navigate to a job details page
    console.log('View job details');
  };

  const handleViewAllJobs = () => {
    // In a real implementation, this would navigate to a jobs listing page
    console.log('View all jobs');
  };

  return (
    <section id="employers" className="py-20 bg-light-orange">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy text-center mb-4">
          Looking to hire? We've got you covered.
        </h2>
        <p className="text-xl text-navy-light text-center mb-16 max-w-3xl mx-auto">
          Whether you're filling one role or building out a leadership team, we help you recruit with clarity and care.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Job Listing 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-navy text-white px-3 py-1 rounded-full text-sm font-semibold">Executive</div>
              <div className="text-navy-light text-sm">2 days ago</div>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Chief Executive Officer</h3>
            <p className="text-navy-light mb-3">Leading Multi-Site Provider, Brisbane</p>
            <p className="text-navy-light text-sm mb-4">Strategic leader to drive growth and operational excellence across 25+ centres.</p>
            <button 
              onClick={handleViewJob}
              className="text-coral font-semibold hover:text-navy transition-colors"
              data-testid="button-view-job-ceo"
            >
              View Details →
            </button>
          </div>

          {/* Job Listing 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-teal text-white px-3 py-1 rounded-full text-sm font-semibold">Management</div>
              <div className="text-navy-light text-sm">1 week ago</div>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Centre Manager</h3>
            <p className="text-navy-light mb-3">Premium Centre, Sydney North Shore</p>
            <p className="text-navy-light text-sm mb-4">Lead daily operations and inspire a team of passionate educators.</p>
            <button 
              onClick={handleViewJob}
              className="text-coral font-semibold hover:text-navy transition-colors"
              data-testid="button-view-job-manager"
            >
              View Details →
            </button>
          </div>

          {/* Job Listing 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-coral text-white px-3 py-1 rounded-full text-sm font-semibold">Specialist</div>
              <div className="text-navy-light text-sm">3 days ago</div>
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Head of People & Culture</h3>
            <p className="text-navy-light mb-3">Growing Organisation, Melbourne</p>
            <p className="text-navy-light text-sm mb-4">Shape HR strategy and culture across expanding network.</p>
            <button 
              onClick={handleViewJob}
              className="text-coral font-semibold hover:text-navy transition-colors"
              data-testid="button-view-job-hr"
            >
              View Details →
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={handleViewAllJobs}
            className="bg-navy text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            data-testid="button-view-all-jobs"
          >
            View All Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}
