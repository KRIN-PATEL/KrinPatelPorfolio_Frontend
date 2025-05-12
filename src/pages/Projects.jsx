import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  ImageIcon,
  ShieldCheck,
  Settings,
  CreditCard,
  Timer,
  FileText,
  Cloud,
  BookOpen,
  ShoppingCart,
  ClipboardList,
  LayoutDashboard,
  Smartphone,
  Database,
  ServerCog,
  Calendar,
  Search,
  UserPlus,
  Users,
} from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

// Projects array with matching icon component
const projects = [
  {
    title: "StudyVerse - Online Learning Platform",
    stack: "MERN, Vite, Tailwind, Stripe, Cloudinary",
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    cover: "/projects/studyverse.png",
    images: [
      "/projects/studyverse.png",
      "/projects/Studyverse1.png",
      "/projects/studyverse2.png",
      "/projects/Studyverse3.png",
      "/projects/Studyverse4.png",
      "/projects/Studyverse5.png",
      "/projects/Studyverse6.png",
    ],
    github: "https://github.com/KRIN-PATEL/StudyVerse.git",
    demo: "https://deploy-frontend-5uty.onrender.com",
    features: [
      {
        icon: <ShieldCheck className="w-4 h-4" />,
        label: "Role-based secure auth",
      },
      { icon: <Settings className="w-4 h-4" />, label: "Admin dashboard" },
      {
        icon: <CreditCard className="w-4 h-4" />,
        label: "Stripe payment gateway",
      },
      {
        icon: <Timer className="w-4 h-4" />,
        label: "Timed quizzes with auto-submit",
      },
      {
        icon: <FileText className="w-4 h-4" />,
        label: "PDF certificate generation",
      },
      {
        icon: <Cloud className="w-4 h-4" />,
        label: "Cloudinary media handling",
      },
    ],
  },
  {
    title: " Livelarq Website",
    stack: "HTML, CSS, Responsive Design",
    icon: <ExternalLink className="w-5 h-5 text-primary" />,
    cover: "/projects/livelarq.png",
    images: [
      "/projects/livelarq.png",
      "/projects/livelarq1.png",
      "/projects/livelarq2.png",
      "/projects/livelarq3.png",
      "/projects/livelarq4.png",
      "/projects/livelarq5.png",
      "/projects/livelarq6.png",
    ],
    github: "https://github.com/KRIN-PATEL/Livelarq",
    demo: "https://livelarq.onrender.com",
    features: [
      { icon: <Settings className="w-4 h-4" />, label: "Minimalist, clean UI" },
      {
        icon: <Timer className="w-4 h-4" />,
        label: "Fast-loading performance",
      },
      { icon: <Cloud className="w-4 h-4" />, label: "Deployed live on Render" },
      {
        icon: <ShieldCheck className="w-4 h-4" />,
        label: "Fully responsive layout",
      },
    ],
  },
  {
    title: "Task Manager Web App",
    stack: "Node.js, Express.js, HTML, CSS, JavaScript",
    icon: <ClipboardList className="w-5 h-5 text-primary" />,
    cover: "/projects/task.png",
    images: [
      "/projects/task.png",
      "/projects/task1.png",
      "/projects/task2.png",
      "/projects/task3.png",
    ],
    github: "https://github.com/KRIN-PATEL/task-manager",
    demo: "https://your-demo-url.com/task-manager", // Optional: replace with actual live URL if hosted
    features: [
      {
        icon: <FileText className="w-4 h-4" />,
        label: "Add, edit, delete, and search tasks",
      },
      {
        icon: <Settings className="w-4 h-4" />,
        label: "Dynamic task list with random colors",
      },
      {
        icon: <Cloud className="w-4 h-4" />,
        label: "Tasks stored on the server in JSON file",
      },
      {
        icon: <ShieldCheck className="w-4 h-4" />,
        label: "RESTful API using Express.js",
      },
      {
        icon: <Timer className="w-4 h-4" />,
        label: "Fully responsive and mobile-friendly UI",
      },
    ],
  },
  {
    title: "E-commerce Android App",
    stack: "Java, Android, Room DB, Glide, MVVM",
    icon: <ShoppingCart className="w-4 h-4" />,
    cover: "/projects/ecommerce1.jpg",
    images: [
      "/projects/ecommerce1.jpg",
      "/projects/ecommerce2.jpg",
      "/projects/ecommerce3.jpg",
      "/projects/ecommerce4.jpg",
      "/projects/ecommerce5.jpg",
      "/projects/ecommerce6.jpg",
      "/projects/ecommerce7.jpg",
    ],
    github: "https://github.com/KRIN-PATEL/E-commerce-Application",
    demo: "",
    features: [
      {
        icon: <ShieldCheck className="w-4 h-4" />,
        label: "Secure login & sessions",
      },
      { icon: <Settings className="w-4 h-4" />, label: "Room DB with MVVM" },
      {
        icon: <CreditCard className="w-4 h-4" />,
        label: "Full checkout system",
      },
      {
        icon: <FileText className="w-4 h-4" />,
        label: "Cart and product management",
      },
      {
        icon: <Timer className="w-4 h-4" />,
        label: "Image slider & confirmation screen",
      },
      {
        icon: <Cloud className="w-4 h-4" />,
        label: "Glide image optimization",
      },
    ],
  },
  {
    title: " Full-Stack E-commerce Platform (.NET)",
    stack: "ASP.NET MVC, Entity Framework, Identity, SQL Server",
    icon: <ShoppingCart className="w-4 h-4" />,
    cover: "/projects/shop.png",
    images: [
      "/projects/shop.png",
      "/projects/shop2.png",
      "/projects/shop3.png",
      "/projects/shop4.png",
      "/projects/shop5.png",
      "/projects/shop6.png",
      "/projects/shop7.png",
    ],
    github: "https://github.com/KRIN-PATEL/FasionMerchandise.git",
    features: [
      {
        icon: <ShoppingCart className="w-4 h-4" />,
        label: "Shopping cart & wishlist (Session-based)",
      },
      {
        icon: <LayoutDashboard className="w-4 h-4" />,
        label: "Admin dashboard to manage users/products",
      },
      {
        icon: <Smartphone className="w-4 h-4" />,
        label: "Fully responsive with custom styling",
      },
      {
        icon: <ShieldCheck className="w-4 h-4" />,
        label: "Secure login with .NET Identity",
      },
      {
        icon: <ImageIcon className="w-4 h-4" />,
        label: "Image upload & product gallery",
      },
      {
        icon: <Database className="w-4 h-4" />,
        label: "SQL Server database integration",
      },
    ],
  },
  {
    title: "Employee Management System",
    stack: "React (CRA), GraphQL, MongoDB",
    icon: <Users className="w-4 h-4 mr-1" />,
    cover: "/projects/ems.png",
    images: [
      "/projects/ems.png",
      "/projects/ems1.png",
      "/projects/ems2.png",
      "/projects/ems3.png",
      "/projects/ems4.png",
    ],
    github: "https://github.com/KRIN-PATEL/EMS.git",
    features: [
      {
        icon: <UserPlus className="w-4 h-4" />,

        label: "Add, view, update, and delete employees",
      },
      {
        icon: <Search className="w-4 h-4" />,
        label: "Search employees by name or department",
      },
      {
        icon: <Calendar className="w-4 h-4" />,
        label: "Displays retirement date based on DOB",
      },
      {
        icon: <ServerCog className="w-4 h-4" />,
        label: "GraphQL-powered backend with queries and mutations",
      },
      {
        icon: <Database className="w-4 h-4" />,
        label: "MongoDB for storing employee records",
      },
      {
        icon: <LayoutDashboard className="w-4 h-4" />,
        label: "Clean, responsive UI with React and CSS modules",
      },
    ],
  },
];

const Projects = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);

  const openLightbox = (images) => {
    setLightboxImages(images.map((src) => ({ src })));
    setLightboxOpen(true);
  };

  return (
    <section id="projects" className="px-4 py-16 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10 text-center text-foreground">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-lg bg-background border"
            >
              <img
                src={project.cover}
                alt={`${project.title} cover`}
                className="w-full h-56 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  {project.icon} {project.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{project.stack}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {project.features && (
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        {feat.icon}
                        <span>{feat.label}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4 mr-1" /> GitHub
                    </Button>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                      </Button>
                    </a>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openLightbox(project.images)}
                  >
                    <ImageIcon className="w-4 h-4 mr-1" /> View Gallery
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxImages}
        plugins={[Zoom]}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.95)" } }}
        animation={{ fade: 250 }}
        zoom={{ maxZoomPixelRatio: 3 }}
      />
    </section>
  );
};

export default Projects;
