import {
    Calendar,
    MapPin,
    Briefcase,
  } from "lucide-react";
  import { motion } from "framer-motion";
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  const experienceData = [
    {
      company: "BrainyBeam Technologies Pvt. Ltd.",
      role: "Web Development Intern",
      duration: "June 2023 – August 2023 · 3 mos",
      location: "Remote · Ahmedabad, Gujarat, India",
      logo: "/logos/brainybeam.png",
      points: [
        "Developed and enhanced e-commerce applications using Python and Django.",
        "Implemented features like payment gateways, product listings, and user management.",
        "Optimized solutions for performance and scalability to handle growing traffic.",
        "Collaborated cross-functionally with designers, developers, and PMs to meet deadlines.",
        "Conducted thorough testing and debugging to maintain code quality.",
      ],
    },
    {
      company: "Lemtoj Infotech",
      role: "Web Development Intern",
      duration: "Jan 2023 – May 2023 · 5 mos",
      location: "On-site · Gujarat, India",
      logo: "/logos/lemtog.jpg",
      points: [
        "Developed and maintained web applications using PHP and Laravel.",
        "Collaborated with a team of developers to design and implement new features.",
        "Troubleshot and debugged issues to ensure optimal performance.",
        "Assisted in the migration of legacy systems to modern web technologies.",
        "Participated in code reviews and contributed to the improvement of coding practices.",
      ],
    },
  ];
  
  const Experience = () => (
    <section id="experience" className="px-6 py-16 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-foreground">
          Work Experience
        </h2>
  
        <div className="space-y-8">
          {experienceData.map((job, index) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              key={index}
            >
              <Card
                className="bg-background text-foreground shadow-md hover:shadow-xl border transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
              >
                <CardHeader className="flex flex-row items-start gap-4">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="h-12 w-12 object-contain rounded-md bg-white p-1"
                  />
                  <div>
                    <CardTitle className="text-lg font-semibold">{job.company}</CardTitle>
                    <p className="flex items-center text-sm text-muted-foreground gap-1" title={job.role}>
                      <Briefcase className="w-4 h-4" /> {job.role}
                    </p>
                    <p className="flex items-center text-sm text-muted-foreground gap-1" title={job.duration}>
                      <Calendar className="w-4 h-4" /> {job.duration}
                    </p>
                    <p className="flex items-center text-sm text-muted-foreground gap-1" title={job.location}>
                      <MapPin className="w-4 h-4" /> {job.location}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
  
  export default Experience;
  