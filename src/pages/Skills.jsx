// import { CheckCircle } from "lucide-react";
// import { motion } from "framer-motion";

// const skillCategories = [
//   {
//     title: "Frontend",
//     skills: [
//       { name: "HTML", logo: "/skills/html.png" },
//       { name: "CSS", logo: "/skills/Css.png" },
//       { name: "JavaScript", logo: "/skills/javascript.png" },
//       { name: "Vite.js", logo: "/skills/Vitejs.png" },
//       { name: "Tailwind", logo: "/skills/tailwind.png" },
//       { name: "BootStarp", logo: "/skills/bootstrap.png" },
//       { name: "UI/UX", logo: "/skills/xd.png" },
//     ],
//   },
//   {
//     title: "Backend",
//     skills: [
//       { name: "Node Js", logo: "/skills/node js.png" },
//       { name: "Express Js", logo: "/skills/express js.png" },
//       { name: "PHP", logo: "/skills/php.png" },
//       { name: "MERN STACK", logo: "/skills/mern.png" },
//     ],
//   },
//   {
//     title: "Databases",
//     skills: [
//       { name: "Mongo DB", logo: "/skills/mongo.png" },
//       { name: "MySQL", logo: "/skills/mysql.png" },
//       { name: "Firebase", logo: "/skills/firebase.png" },
//     ],
//   },
//   {
//     title: "Tools & Integrations",
//     skills: [
//       { name: "Cloudinary", logo: "/skills/cloudinary.png" },
//       { name: "Stripe", logo: "skills/Stripe.png" },
//     ],
//   },
// ];

// const Skills = () => (
//   <section id="skills" className="px-6 py-16 max-w-6xl mx-auto">
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//     >
//       <h2 className="text-3xl font-bold mb-10 text-foreground">
//         My Top Skills
//       </h2>

//       <div className="space-y-10">
//         {skillCategories.map((category, index) => (
//           <div key={index}>
//             <h3 className="text-xl font-semibold mb-4 text-muted-foreground">
//               {category.title}
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {category.skills.map((skill, idx) => (
//                 <div
//                   key={idx}
//                   className="flex items-center justify-between px-4 py-3 border rounded-lg bg-background shadow-sm hover:shadow-md transition-all duration-300 group"
//                 >
//                   <div className="flex items-center gap-3">
//                     <img
//                       src={skill.logo}
//                       alt={skill.name}
//                       className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-125"
//                     />

//                     <span className="font-medium text-foreground">
//                       {skill.name}
//                     </span>
//                   </div>
//                   <CheckCircle className="w-5 h-5 text-green-500" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   </section>
// );

// export default Skills;
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";

// Categorized skills
const categorizedSkills = [
  {
    category: "Frontend",
    skills: [
      {
        name: "HTML",
        logo: "/skills/html.png",
        info: "Markup language for structuring web pages",
      },
      {
        name: "CSS",
        logo: "/skills/Css.png",
        info: "Style sheet language for designing layouts",
      },
      {
        name: "JavaScript",
        logo: "/skills/javascript.png",
        info: "Dynamic behavior on the web",
      },
      {
        name: "Tailwind",
        logo: "/skills/tailwind.png",
        info: "Utility-first CSS framework",
      },
      {
        name: "Vite.js",
        logo: "/skills/Vitejs.png",
        info: "Fast frontend tooling and bundler",
      },
      {
        name: "BootStarp",
        logo: "/skills/bootstrap.png",
        info: "Popular CSS framework",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "PHP",
        logo: "/skills/php.png",
        info: "Server-side scripting language",
      },
      {
        name: "Node Js",
        logo: "/skills/node js.png",
        info: "JavaScript runtime for backend",
      },
      {
        name: "Express Js",
        logo: "/skills/express js.png",
        info: "Web framework for Node.js",
      },
      {
        name: "Firebase",
        logo: "/skills/firebase.png",
        info: "Backend-as-a-service by Google",
      },
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "Mongo DB", logo: "/skills/mongo.png", info: "NoSQL database" },
      {
        name: "MySQL",
        logo: "/skills/mysql.png",
        info: "Relational database system",
      },
      {
        name: "Cloudinary",
        logo: "/skills/cloudinary.png",
        info: "Cloud media management",
      },
      {
        name: "Stripe",
        logo: "/skills/Stripe.png",
        info: "Payment gateway service",
      },
    ],
  },
  {
    category: "Others",
    skills: [
      {
        name: "UI/UX",
        logo: "/skills/xd.png",
        info: "Design and prototyping with Adobe XD",
      },
      {
        name: "MERN STACK",
        logo: "/skills/mern.png",
        info: "Fullstack: MongoDB, Express, React, Node",
      },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="px-6 py-16 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-10 text-foreground">
        My Top Skills
      </h2>

      <div className="space-y-12">
        {categorizedSkills.map((group, i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold text-muted-foreground mb-4">
              {group.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {group.skills.map((skill, index) => (
                <Tooltip.Root key={index}>
                  <Tooltip.Trigger asChild>
                    <div
                      key={index}
                      className="flex items-center justify-between px-6 py-5 border rounded-xl bg-background shadow-md hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-125"
                        />
                        <span className="text-lg font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      side="top"
                      align="center"
                      className="bg-black text-white px-3 py-2 rounded-md text-xs shadow-md z-50 border border-gray-600 font-medium animate-fade-in"
                    >
                      {skill.info}
                      <Tooltip.Arrow className="fill-black" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Skills;
