export const personalInfo = {
  name: "Fourkan Bin Ilias",
  title: "Full Stack Web Developer",
  tagline:
    "Building scalable web applications with clean code, elegant designs, and seamless user experiences.",
  email: "pinonfurkan1@gmail.com",
  github: "https://github.com/Pinon1345",
  linkedin: "https://www.linkedin.com/in/fourkan-bin-ilias/",
  location: "Chattogram, Bangladesh",
  bio: "I am a Full Stack Web Developer and student with a strong passion for designing and developing robust web systems. I specialize in modern JavaScript technology stacks including Next.js, React, Node.js, Express, Tailwind CSS, and MongoDB.",
  stats: [
    { label: "Completed Projects", value: 15, suffix: "+" },
    { label: "Core Technologies", value: 17, suffix: "+" },
    { label: "Months Experience", value: 12, suffix: "+" },
    { label: "Client Satisfaction", value: 100, suffix: "%" },
  ],
};

export const skills = [
  { name: "Next.js", category: "Frontend", level: 90 },
  { name: "React.js", category: "Frontend", level: 92 },
  { name: "JavaScript (ES6+)", category: "Language", level: 90 },
  { name: "TypeScript", category: "Language", level: 70 },
  { name: "Tailwind CSS", category: "Styling", level: 95 },
  { name: "Node.js & Express", category: "Backend", level: 85 },
  { name: "MongoDB & Mongoose", category: "Database", level: 88 },
  { name: "Better Auth / Firebase", category: "Auth & Security", level: 85 },
  { name: "Git & GitHub", category: "Tools", level: 90 },
];

export const projects = [
  {
    id: "legalease",
    title: "LegalEase",
    subtitle: "Online Lawyer Hiring & Consultation Platform",
    description:
      "A full-stack online marketplace connecting clients with legal professionals. Features include lawyer verification workflows, profile management, dynamic scheduling, and seamless payment processing.",
    problemSolved:
      "Streamlined the traditional offline legal consultation booking system by allowing clients to securely search, book, and pay for lawyer services digitally.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
    ],
    contributors: ["Fourkan Bin Ilias"],
    liveDemo: "https://legalease-online-lawyer-hiring-plat.vercel.app/",
    githubRepo:
      "https://github.com/Pinon1345/LegalEase-Online-Lawyer-Hiring-Platform",
    image: "/assets/legalease.png",
    featured: true,
  },
  {
    id: "studynook",
    title: "StudyNook",
    subtitle: "Collaborative Study & Resource Sharing Hub",
    description:
      "An interactive educational dashboard designed for students to organize study materials, collaborate on subject assignments, and track learning progress in real time.",
    problemSolved:
      "Eliminates fragmented study group communication by providing a unified platform for note-sharing, assignment tracking, and collaborative study sessions.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "Express",
      "Better Auth",
    ],
    contributors: ["Fourkan Bin Ilias"],
    liveDemo: "https://studynook-library-booking-project.vercel.app/",
    githubRepo: "https://github.com/Pinon1345/StudyNook-Library-Booking-Project",
    image:"/assets/studynook.png",
    featured: true,
  },
  {
    id: "wanderlust",
    title: "Wanderlust",
    subtitle: "Travel Experience & Destination Discovery Platform",
    description:
      "A feature-rich travel exploration portal featuring interactive destination maps, user review systems, custom trip booking tools, and seamless dynamic image showcases.",
    problemSolved:
      "Simplifies travel planning by unifying destination discovery, user-generated reviews, and itinerary management into a single, highly visual interface.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
    ],
    contributors: ["Fourkan Bin Ilias"],
    liveDemo: "https://wanderlust-travel-tour.vercel.app/",
    githubRepo: "https://github.com/Pinon1345/Wanderlust-Travel-Tour",
    image:"/assets/wanderlust.png",
    featured: true,
  },
  {
    id: "hireloop",
    title: "Hireloop",
    subtitle: "Job Seeking & Recruitment Platform",
    description:
      "A dynamic recruitment board allowing recruiters to create and manage job postings while job seekers browse, filter, and track their applications in real time.",
    problemSolved:
      "Eliminates complex job application friction through modern recruiter management tables and real-time application status tracking.",
    technologies: [
      "Next.js",
      "HeroUI",
      "Tailwind CSS",
      "JavaScript",
      "MongoDB",
    ],
    contributors: ["Fourkan Bin Ilias"],
    liveDemo: "https://hireloop-full-stack-project.vercel.app/",
    githubRepo: "https://github.com/Pinon1345/HireLoop-Job-Finder-Website",
    image:"/assets/hireloop.png",
    featured: true,
  },
];
