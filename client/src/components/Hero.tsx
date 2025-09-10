export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="pt-16 bg-gradient-to-br from-background via-muted to-accent/10 relative overflow-hidden" aria-labelledby="hero-heading">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-20 sm:py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
              Experience uni life —<br />
              <span className="text-primary">before uni.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Hands-on courses, mentorship, and a community that feels like campus.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection("#courses")}
                className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-ring shadow-lg"
                data-testid="button-explore-courses"
              >
                Explore Courses
              </button>
              <button
                onClick={() => scrollToSection("#about")}
                className="w-full sm:w-auto border-2 border-secondary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-secondary hover:text-secondary-foreground hover:scale-105 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-ring"
                data-testid="button-learn-more"
              >
                Learn More
              </button>
            </div>
            
            <div className="mt-12 text-sm text-muted-foreground">
              <p className="italic">"An academy where you get to experience uni life."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
