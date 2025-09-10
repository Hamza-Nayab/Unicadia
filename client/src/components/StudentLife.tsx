import { studentLifeCards } from "@/lib/constants";

export default function StudentLife() {
  return (
    <section id="student-life" className="py-16 sm:py-20 bg-muted/50 scroll-mt-16" aria-labelledby="student-life-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="student-life-heading" className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Student Life
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than just courses—experience the vibrant community that makes learning enjoyable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {studentLifeCards.map((card, index) => (
            <div key={index} className="text-center group" data-testid={`student-life-${card.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="relative overflow-hidden rounded-xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img 
                  src={card.image} 
                  alt={card.alt} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
