// import { Mail, Phone, Linkedin, Github } from "lucide-react"
// import { motion } from "framer-motion"

// const Contact = () => (
//   <section id="contact" className="px-6 py-16 max-w-6xl mx-auto">
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//     >
//       <h2 className="text-3xl font-bold mb-10 text-foreground">Contact Me</h2>

//       <div className="grid md:grid-cols-2 gap-8 items-start">
//         {/* Contact Form */}
//         <form className="space-y-4">
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full p-3 rounded border bg-background text-foreground placeholder:text-muted-foreground"
//           />
//           <input
//             type="email"
//             placeholder="Email Id"
//             className="w-full p-3 rounded border bg-background text-foreground placeholder:text-muted-foreground"
//           />
//           <input
//             type="text"
//             placeholder="Phone Number"
//             className="w-full p-3 rounded border bg-background text-foreground placeholder:text-muted-foreground"
//           />
//           <textarea
//             placeholder="Message"
//             rows="5"
//             className="w-full p-3 rounded border bg-background text-foreground placeholder:text-muted-foreground"
//           />
//           <button
//             type="submit"
//             className="px-6 py-2 rounded bg-primary text-white font-medium hover:opacity-90 transition"
//           >
//             Submit
//           </button>
//         </form>

//         {/* Contact Info */}
//         <ul className="space-y-6 text-muted-foreground">
//           <li className="flex items-center gap-3">
//             <Github className="w-5 h-5" />
//             <a href="https://github.com/KRIN-PATEL" target="_blank" className="hover:underline">
//               KRIN-PATEL
//             </a>
//           </li>
//           <li className="flex items-center gap-3">
//             <Mail className="w-5 h-5" />
//             <a href="mailto:krinpatel.it@gmail.com" className="hover:underline">
//               krinpatel.it@gmail.com
//             </a>
//           </li>

//           <li className="flex items-center gap-3">
//             <Linkedin className="w-5 h-5" />
//             <a
//               href="https://linkedin.com/in/krin-patel-8779b52a8"
//               target="_blank"
//               className="hover:underline"
//             >
//               linkedin.com/in/krin-patel
//             </a>
//           </li>
//         </ul>
//       </div>
//     </motion.div>
//   </section>
// )

// export default Contact

import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-16 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10 text-foreground">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded border bg-background text-foreground placeholder:text-muted-foreground"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Id"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded border bg-background text-foreground placeholder:text-muted-foreground"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded border bg-background text-foreground placeholder:text-muted-foreground"
            />
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded border bg-background text-foreground placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 rounded bg-primary text-white font-medium hover:opacity-90 transition dark:bg-blue-500 dark:text-white"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>

          {/* Contact Info */}
          <ul className="space-y-6 text-muted-foreground">
            <li className="flex items-center gap-3">
              <Github className="w-5 h-5" />
              <a
                href="https://github.com/KRIN-PATEL"
                target="_blank"
                className="hover:underline"
              >
                KRIN-PATEL
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:krinpatel.it@gmail.com"
                className="hover:underline"
              >
                krinpatel.it@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span className="text-primary">647-355-7479</span>
            </li>
            <li className="flex items-center gap-3">
              <Linkedin className="w-5 h-5" />
              <a
                href="https://linkedin.com/in/krin-patel-8779b52a8"
                target="_blank"
                className="hover:underline"
              >
                linkedin.com/in/krin-patel
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
