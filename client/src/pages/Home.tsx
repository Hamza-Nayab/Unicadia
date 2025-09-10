import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import StudentLife from "@/components/StudentLife";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <StudentLife />
        <Testimonials />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
