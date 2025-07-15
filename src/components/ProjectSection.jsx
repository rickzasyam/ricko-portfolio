import { useRef, useState, memo } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// Memoized ProjectCard component to prevent unnecessary re-renders
const ProjectCard = memo(({ project, openImage }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    className="group bg-card dark:bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    whileHover={{ scale: 1.01 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="h-48 overflow-hidden relative">
      <img
        src={project.image}
        alt={project.title}
        onClick={() => openImage(project.image)}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-zoom-in"
        loading="lazy"
      />
    </div>

    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
      <p className="text-foreground text-sm mb-4">{project.description}</p>

      <div className="flex justify-between items-center">
        <div className="flex space-x-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-foreground hover:scale-120 hover:text-primary transition-colors duration-300 p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={20} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-foreground hover:scale-120 hover:text-primary transition-colors duration-300 p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
));

const projects = [
  {
    id: 1,
    title: "Marketing Performance Dashboard",
    description:
      "An interactive marketing dashboard built using Looker Studio, designed to help decision-makers track key metrics such as campaign performance, customer acquisition cost (CAC), conversion rates, and ROI across multiple channels.",
    image: "/projects/project1.png",
    tags: [
      "Marketing Analytics",
      "Looker Studio",
      "Data Visualization",
      "Digital Marketing",
      "Business Intelligence",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Production Issues in Garment Manufacturing",
    description:
      "An infographic poster visualizing major operational challenges in garment production—such as quality control failures, supply delays, and manpower inefficiencies—paired with data-driven recommendations to address them.",
    image: "/projects/project2.png",
    tags: [
      "Garment Manufacturing",
      "Infographic",
      "Operational Strategy",
      "Problem Solving",
      "Looker Studio",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Supply Chain Management System",
    description:
      "A lightweight supply chain management system built entirely in Google Sheets using formulas and Apps Script to automate PO tracking, inbound logistics, QC status, and inventory updates.",
    image: "/projects/project3.png",
    tags: [
      "Supply Chain",
      "Google Sheets",
      "Automation",
      "Inventory Management",
      "Apps Script",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const cardsRef = useRef(null);

  const isTitleInView = useInView(titleRef, { margin: "0px 0px -100px 0px" });
  const isDescInView = useInView(descRef, { margin: "0px 0px -50px 0px" });
  const isCardsInView = useInView(cardsRef, { margin: "0px 0px -50px 0px", amount: 0.1 });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="scroll-mt-24 py-16 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div ref={titleRef}>
          <AnimatePresence>
            {isTitleInView && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-foreground"
              >
                Featured <span className="text-primary">Projects</span>
              </motion.h2>
            )}
          </AnimatePresence>
        </div>

        {/* Description */}
        <div ref={descRef}>
          <AnimatePresence>
            {isDescInView && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center text-foreground mb-12 max-w-3xl mx-auto text-lg"
              >
                These are some of the data projects I've worked on, combining analytical
                thinking with clear and impactful storytelling through data.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Cards */}
        <div ref={cardsRef}>
          <motion.div
            initial="hidden"
            animate={isCardsInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  when: "beforeChildren"
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} openImage={openImage} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeImage}
          className="fixed inset-0 z-50 bg-white/10 backdrop-blur-md flex items-center justify-center cursor-zoom-out p-4"
        >
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            src={selectedImage}
            alt="Project preview"
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
};
