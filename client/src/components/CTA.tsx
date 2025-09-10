import { ArrowRight } from "lucide-react";

export default function CTA() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to experience uni life?
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Join our community of learners and start building your future today.
          </p>
          <button
            onClick={() => scrollToSection("#contact")}
            className="inline-flex items-center bg-white text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-ring shadow-lg"
            data-testid="button-get-started-cta"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
