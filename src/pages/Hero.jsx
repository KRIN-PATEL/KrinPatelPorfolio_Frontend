import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { Typewriter } from "react-simple-typewriter"

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen w-full px-4 py-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10"
    >
      {/* Left - Text */}
      <div className="text-center md:text-left space-y-6">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-foreground"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm{" "}
          <span className="text-primary">
            <Typewriter
              words={["Krin Patel", "a Developer", "a Designer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-lg text-muted-foreground"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Full Stack Developer | React | Node.js | Python | PHP
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a href="/KRINPATEL_RESUME.pdf" download aria-label="Download Resume">
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Right - Full Image */}
      <motion.div
        className="w-full h-[400px] sm:h-[500px] md:h-[550px] overflow-hidden rounded-lg shadow-lg"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/krinpatel.jpg"
          alt="Krin Patel"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  )
}

export default Hero
