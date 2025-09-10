import { Code, Package, BarChart3 } from "lucide-react";

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#courses", label: "Courses" },
  { href: "#student-life", label: "Student Life" },
  { href: "#testimonials", label: "Testimonials" },
];

export const courses = [
  {
    title: "Programming Fundamentals",
    description: "Start your coding journey with the essential building blocks of programming.",
    outcomes: ["Variables & types", "Control flow & functions", "Mini CLI project"],
    link: "https://google.com",
    icon: Code
  },
  {
    title: "Object-Oriented Programming",
    description: "Master the principles of OOP and build scalable, maintainable code.",
    outcomes: ["Classes/objects", "Inheritance & interfaces", "Small library API"],
    link: "https://google.com",
    icon: Package
  },
  {
    title: "Data Structures & Algorithms",
    description: "Master the foundations of computer science and ace technical interviews.",
    outcomes: ["Arrays/lists/stacks/queues", "Trees/graphs", "Sorting/searching & Big-O"],
    link: "https://google.com",
    icon: BarChart3
  }
];

export const studentLifeCards = [
  {
    title: "Clubs & Communities",
    description: "Join special interest groups and build lasting friendships",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Students collaborating on projects"
  },
  {
    title: "Hack Nights",
    description: "Collaborative coding sessions and friendly competitions",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Students participating in late-night coding sessions"
  },
  {
    title: "Peer Study Sessions",
    description: "Learn together with your fellow students",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Students engaged in group study sessions"
  },
  {
    title: "Guest Lectures",
    description: "Insights from industry professionals and thought leaders",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Industry expert delivering a guest lecture"
  }
];

export const testimonials = [
  {
    quote: "I finally 'got' coding because of the projects.",
    name: "Alex",
    role: "Career Switcher"
  },
  {
    quote: "Felt like a real campus—meetups and all.",
    name: "Mira",
    role: "Gap-Year Student"
  }
];
