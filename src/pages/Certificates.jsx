// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { FaCertificate, FaExternalLinkAlt, FaEye } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import {
//   Select,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";

// const allCertificates = [
//   {
//     title: "Introduction to AWS Cloud",
//     issuer: "Amazon Web Services",
//     year: 2024,
//     file: "/certs/aws.pdf", // Must exist in /public/certs/
//     logo: "/cert-logos/aws.jpg", // Must exist in /public/cert-logos/
//     verifyLink: "https://www.credly.com/badges/aws",
//   },
//   {
//     title: "Career Essentials in Generative AI",
//     issuer: "Microsoft",
//     year: 2024,
//     file: "/certs/CareerEssentials.pdf",
//     logo: "/cert-logos/microsoft.jpeg",
//     verifyLink: "https://linkedin.com/in/krinpatel",
//   },
//   {
//     title: "Adobe XD for the Designer",
//     issuer: "LinkedIn Learning",
//     year: 2023,
//     file: "/certs/AdobeXD.pdf",
//     logo: "/cert-logos/linkedin.png",
//     verifyLink: "https://linkedin.com/in/krinpatel",
//   },
//   {
//     title: "Introduction to Firewall",
//     issuer: "Great Learning",
//     year: 2024,
//     file: "/certs/firewall.pdf",
//     logo: "/cert-logos/GreatLearning.png",
//     verifyLink: "https://linkedin.com/in/krinpatel",
//   },
//   {
//     title: "Completion of Arduino Training",
//     issuer: "IIT Bombay",
//     year: 2022,
//     file: "/certs/IIT.pdf",
//     logo: "/cert-logos/Indian_Institute_of_Technology_Bombay_Logo.svg",
//     verifyLink: "https://linkedin.com/in/krinpatel",
//   },
//   {
//     title: "Completion of Arduino Training",
//     issuer: "Cisco",
//     year: 2021,
//     file: "/certs/Ciscopackettracercertificate.pdf",
//     logo: "/cert-logos/Cisco.png",
//     verifyLink: "https://linkedin.com/in/krinpatel",
//   },
//   {
//     title: "PHP With Laravel",
//     issuer: "Lemtoj Infotech",
//     year: 2023,
//     file: "/certs/Phpwithlaravel.pdf",
//     logo: "/cert-logos/lemtog.jpg",
//     verifyLink: "https://linkedin.com/in/krinpatel",
//   },
//   {
//     title: "Python with Django",
//     issuer: "Brainy Beam Technology",
//     year: 2020,
//     file: "/certs/PythonwithDjango.pdf",
//     logo: "/cert-logos/brainybeam.png",
//     verifyLink: "https://linkedin.com/in/krinpatel",
//   },
// ];

// const uniqueIssuers = [...new Set(allCertificates.map((cert) => cert.issuer))];
// const uniqueYears = [...new Set(allCertificates.map((cert) => cert.year))];

// const Certificates = () => {
//   const [filterIssuer, setFilterIssuer] = useState("all");
//   const [filterYear, setFilterYear] = useState("all");

//   const filteredCertificates = allCertificates.filter((cert) => {
//     const matchIssuer =
//       filterIssuer !== "all" ? cert.issuer === filterIssuer : true;
//     const matchYear =
//       filterYear !== "all" ? cert.year === Number(filterYear) : true;
//     return matchIssuer && matchYear;
//   });

//   return (
//     <section id="certificates" className="px-4 py-16 max-w-5xl mx-auto">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
//           Certifications
//         </h2>

//         {/* Filters */}
//         <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
//           <Select onValueChange={setFilterIssuer} defaultValue="all">
//             <SelectTrigger className="w-[200px]">
//               <SelectValue placeholder="Filter by Issuer" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Issuers</SelectItem>
//               {uniqueIssuers.map((issuer, i) => (
//                 <SelectItem key={i} value={issuer}>
//                   {issuer}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//           <Select onValueChange={setFilterYear} defaultValue="all">
//             <SelectTrigger className="w-[200px]">
//               <SelectValue placeholder="Filter by Year" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Years</SelectItem>
//               {uniqueYears.map((year, i) => (
//                 <SelectItem key={i} value={String(year)}>
//                   {year}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>

//         {/* Timeline */}
//         <VerticalTimeline lineColor="#3b82f6">
//           {filteredCertificates.map((cert, index) => (
//             <VerticalTimelineElement
//               key={index}
//               date={String(cert.year)}
//               iconStyle={{ background: "#3b82f6", color: "#fff" }}
//               icon={<FaCertificate />}
//               contentStyle={{
//                 background: "var(--card)",
//                 color: "var(--foreground)",
//                 boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//               }}
//               contentArrowStyle={{
//                 borderRight: "7px solid var(--card)",
//               }}
//             >
//               <div className="flex items-center gap-2 mb-2">
//                 {cert.logo && (
//                   <img
//                     src={cert.logo}
//                     alt={`${cert.issuer} logo`}
//                     className="h-6 w-6 object-contain rounded-sm"
//                   />
//                 )}
//                 <h3 className="font-bold text-lg">{cert.title}</h3>
//               </div>

//               <p className="text-muted-foreground">{cert.issuer}</p>

//               <div className="flex gap-2 mt-4">
//                 {/* Modal Preview */}
//                 <Dialog>
//                   <DialogTrigger asChild>
//                     <Button size="sm" variant="outline">
//                       <FaEye className="mr-2" /> Preview
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent className="max-w-3xl h-[80vh] p-0">
//                     <DialogTitle className="sr-only">
//                       Preview Certificate
//                     </DialogTitle>
//                     <iframe
//                       src={cert.file}
//                       className="w-full h-full rounded-md"
//                       title={`Preview of ${cert.title}`}
//                     ></iframe>
//                   </DialogContent>
//                 </Dialog>

//                 {/* Verify Link */}
//                 {cert.verifyLink && (
//                   <a
//                     href={cert.verifyLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Button size="sm" variant="secondary">
//                       <FaExternalLinkAlt className="mr-2" /> Verify
//                     </Button>
//                   </a>
//                 )}
//               </div>
//             </VerticalTimelineElement>
//           ))}
//         </VerticalTimeline>
//       </motion.div>
//     </section>
//   );
// };

// export default Certificates;


import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaCertificate, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const allCertificates = [
  {
    title: "Introduction to AWS Cloud",
    issuer: "Amazon Web Services",
    year: 2024,
    file: "/certs/aws.pdf", // Must exist in /public/certs/
    logo: "/cert-logos/aws.jpg", // Must exist in /public/cert-logos/
    verifyLink: "https://linkedin.com/in/krin-patel-8779b52a8",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft",
    year: 2024,
    file: "/certs/CareerEssentials.pdf",
    logo: "/cert-logos/microsoft.jpeg",
    verifyLink: "https://linkedin.com/in/krin-patel-8779b52a8",
  },
  {
    title: "Adobe XD for the Designer",
    issuer: "LinkedIn Learning",
    year: 2023,
    file: "/certs/AdobeXD.pdf",
    logo: "/cert-logos/linkedin.png",
    verifyLink: "https://linkedin.com/in/krin-patel-8779b52a8",
  },
  {
    title: "Introduction to Firewall",
    issuer: "Great Learning",
    year: 2024,
    file: "/certs/firewall.pdf",
    logo: "/cert-logos/GreatLearning.png",
    verifyLink: "https://linkedin.com/in/krin-patel-8779b52a8",
  },
  {
    title: "Completion of Arduino Training",
    issuer: "IIT Bombay",
    year: 2022,
    file: "/certs/IIT.pdf",
    logo: "/cert-logos/Indian_Institute_of_Technology_Bombay_Logo.svg",
    verifyLink: "https://linkedin.com/in/krin-patel-8779b52a8",
  },
  {
    title: "Completion of Arduino Training",
    issuer: "Cisco",
    year: 2021,
    file: "/certs/Ciscopackettracercertificate.pdf",
    logo: "/cert-logos/Cisco.png",
    verifyLink: "https://linkedin.com/in/krin-patel-8779b52a8",
  },
  {
    title: "PHP With Laravel",
    issuer: "Lemtoj Infotech",
    year: 2023,
    file: "/certs/Phpwithlaravel.pdf",
    logo: "/cert-logos/lemtog.jpg",
    verifyLink: "https://linkedin.com/in/krin-patel-8779b52a8",
  },
  {
    title: "Python with Django",
    issuer: "Brainy Beam Technology",
    year: 2020,
    file: "/certs/PythonwithDjango.pdf",
    logo: "/cert-logos/brainybeam.png",
    verifyLink: "https://linkedin.com/in/krin-patel-8779b52a8",
  },
];

const uniqueIssuers = [...new Set(allCertificates.map((cert) => cert.issuer))];
const uniqueYears = [...new Set(allCertificates.map((cert) => cert.year))];

const Certificates = () => {
  const [filterIssuer, setFilterIssuer] = useState("all");
  const [filterYear, setFilterYear] = useState("all");

  const filteredCertificates = allCertificates.filter((cert) => {
    const matchIssuer =
      filterIssuer !== "all" ? cert.issuer === filterIssuer : true;
    const matchYear =
      filterYear !== "all" ? cert.year === Number(filterYear) : true;
    return matchIssuer && matchYear;
  });

  return (
    <section id="certificates" className="px-4 py-16 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
          Certifications
        </h2>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
          <Select onValueChange={setFilterIssuer} defaultValue="all">
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by Issuer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Issuers</SelectItem>
              {uniqueIssuers.map((issuer, i) => (
                <SelectItem key={i} value={issuer}>
                  {issuer}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={setFilterYear} defaultValue="all">
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              {uniqueYears.map((year, i) => (
                <SelectItem key={i} value={String(year)}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <VerticalTimeline lineColor="#3b82f6">
          {filteredCertificates.map((cert, index) => (
            <VerticalTimelineElement
              key={index}
              date={String(cert.year)}
              iconStyle={{ background: "#3b82f6", color: "#fff" }}
              icon={<FaCertificate />}
              contentStyle={{
                background: "var(--card)",
                color: "var(--foreground)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid var(--card)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                {cert.logo && (
                  <img
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    className="h-6 w-6 object-contain rounded-sm"
                  />
                )}
                <h3 className="font-bold text-lg">{cert.title}</h3>
              </div>

              <p className="text-muted-foreground">{cert.issuer}</p>

              <div className="flex gap-2 mt-4">
                <a href={cert.file} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline">
                    <FaEye className="mr-2" /> Preview
                  </Button>
                </a>

                {cert.verifyLink && (
                  <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="secondary">
                      <FaExternalLinkAlt className="mr-2" /> Verify
                    </Button>
                  </a>
                )}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
};

export default Certificates;
