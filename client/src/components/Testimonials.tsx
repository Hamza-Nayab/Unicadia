import { testimonials } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-background scroll-mt-16" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from students who've experienced the Unicadia difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300" data-testid={`testimonial-${index}`}>
              <div className="flex items-start mb-4">
                <MessageCircle className="w-8 h-8 text-primary flex-shrink-0" aria-hidden="true" />
              </div>
              <blockquote className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-semibold text-secondary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
