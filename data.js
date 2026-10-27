/* =====================================================================
   EDIT THIS FILE to change anything on your website.
   Save the file (Ctrl + S) and the page updates.
   - Keep the quotes "like this" and the commas at the end of lines.
   - To add an item to a list, copy one { ... }, line and paste it below.
   ===================================================================== */

const PORTFOLIO = {
  // ---------- Basics ----------
  name: "Boddu Charantej",
  heroTitle: "CHARANTEJ",            // the BIG word at the bottom of the first screen
  initials: "BC",                    // shown if your photo is missing
  title: "Software Engineer",
  roles: ["Software Engineer", "Python & SQL Developer", "Problem Solver"],
  tagline: "I build practical technology: clean code, smart devices, and solutions that work in the real world.",
  location: "Palakonda, India",

  // ---------- Files (put them in this folder) ----------
  photo: "images/profile.jpg",       // put your photo at images/profile.jpg
  resume: "resume.pdf",              // your resume file

  // ---------- Links (leave "" to hide a button) ----------
  email: "charanb383@gmail.com",
  phone: "+91 7670821454", 
  linkedin: "https://www.linkedin.com/in/charantej-boddu",
  github: "",                        // e.g. "https://github.com/your-username"
  
  // ---------- About ----------
  about: [
    "I'm an Electronics and Communication Engineering student at GMRIT, Rajam, with a strong foundation in Python and SQL, plus hands-on experience in IoT, embedded systems and software development.",
    "I love solving problems, whether it's on a chessboard or in code. I'm looking for a Software Engineer opportunity where I can work on real-world projects and keep learning modern technologies."
  ],
  stats: [
    { value: 8.44, decimals: 2, label: "CGPA (up to 6th sem)" },
    { value: 5,    decimals: 0, label: "Certifications" },
    { value: 2,    decimals: 0, label: "Projects" },
    { value: 1,    decimals: 0, label: "Internship" }
  ],

  // ---------- Skills ----------
  skills: [
    { group: "Languages",       items: ["Python", "SQL", "Embedded C"] },
    { group: "Platforms",       items: ["ServiceNow", "Arduino IDE"] },
    { group: "Domains",         items: ["IoT", "Embedded Systems", "Sensor Data Analysis"] },
    { group: "Soft skills",     items: ["Problem Solving", "Chess", "Quick Learner"] }
  ],

  // ---------- Projects ----------
  // link: "" hides the button. Add a GitHub or demo link when you have one.
  projects: [
    {
      title: "Smart Home Automation",
      status: "Completed",
      desc: "An IoT-based home automation system built with Arduino Uno to control and monitor home devices.",
      tags: ["Arduino Uno", "IoT", "Embedded C"],
      link: ""
    },
    {
      title: "Ultrasonic Pest Deterrent",
      status: "In progress",
      desc: "A project on reducing pests using ultrasonic sound, currently being built and tested.",
      tags: ["Ultrasonic", "Arduino", "Electronics"],
      link: ""
    }
  ],

  // ---------- Experience ----------
  experience: [
    {
      date: "Jun 2025 · 4 weeks",
      role: "Intern",
      org: "Centre of Excellence in Maritime and Shipbuilding (CEMS), Vizag",
      points: [
        "Programmed an Arduino-based sensor module using embedded C to collect and monitor real-time operational data.",
        "Analyzed sensor outputs to identify patterns in their behavior."
      ]
    }
  ],

  // ---------- Education ----------
  education: [
    {
      date: "2023 – 2027",
      role: "BTech, Electronics and Communication Engineering",
      org: "GMRIT, Rajam",
      points: ["CGPA: 8.44 / 10 (up to 6th semester)"]
    },
    {
      date: "2021 – 2023",
      role: "Intermediate (MPC)",
      org: "Srichaitanya Junior College, Rajam",
      points: ["905 / 1000 in Board Examinations"]
    },
    {
      date: "2020 – 2021",
      role: "SSC",
      org: "Tamminaidu Concept School, Palakonda",
      points: ["600 / 600 in Public Examinations"]
    }
  ],

  // ---------- Certifications ----------
  certifications: [
    { name: "Certified System Administrator (CSA)",  by: "ServiceNow" },
    { name: "Certified Application Developer (CAD)", by: "ServiceNow" },
    { name: "Future of Smart Systems with IoT",      by: "CEMS" },
    { name: "Introduction to Generative AI",         by: "Google Cloud / Coursera" },
    { name: "Prompt Engineering for ChatGPT",        by: "Vanderbilt University / Coursera" }

  ]
};
