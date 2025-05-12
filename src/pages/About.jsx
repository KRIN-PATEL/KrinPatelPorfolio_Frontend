import { GraduationCap, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const About = () => (
  <section id="about" className="px-6 py-16 max-w-5xl mx-auto">
    {/* About Me */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="bg-background text-foreground shadow-md hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            I’m a passionate Full-Stack Developer with experience designing scalable, user-friendly
            web applications. I'm skilled in <strong>React.js, Node.js, PHP, and Python</strong>, with hands-on
            experience in <strong>REST APIs</strong>, <strong>MySQL</strong>, and AI-driven features. I enjoy solving complex problems
            and delivering intuitive and high-performance applications.
          </p>
        </CardContent>
      </Card>
    </motion.div>

    {/* Education */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-8"
    >
      <Card className="bg-background text-foreground shadow-md hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex items-center gap-3">
          <GraduationCap className="h-6 w-6 text-primary" />
          <CardTitle className="text-2xl font-semibold">Education</CardTitle>
        </CardHeader>

        <CardContent className="text-muted-foreground space-y-4">
          <div className="flex items-start gap-3 hover:bg-muted/40 hover:ring hover:ring-primary hover:scale-[1.01] transition-all p-3 rounded-lg">
            <GraduationCap className="h-5 w-5 text-primary mt-1" />
            <div>
              <p className="font-medium text-foreground">Post-Graduate Certificate in Web Development</p>
              <p>Conestoga College, Kitchener, Ontario – <span className="text-sm">2025</span></p>
              <div className="flex items-center gap-2 mt-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">GPA: 3.73 / 4.00</span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 hover:bg-muted/40 hover:ring hover:ring-primary hover:scale-[1.01] transition-all p-3 rounded-lg">
            <GraduationCap className="h-5 w-5 text-primary mt-1" />
            <div>
              <p className="font-medium text-foreground">Bachelor’s of Engineering in Information Technology  (BE-IT)</p>
              <p>Gujarat University, India – <span className="text-sm">2022</span></p>
              <div className="flex items-center gap-2 mt-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">CGPA: 8.70 / 10</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  </section>
)

export default About
