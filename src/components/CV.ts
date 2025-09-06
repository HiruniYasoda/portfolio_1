// CV.ts
import { jsPDF } from "jspdf";

export const generateCV = () => {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();

  const margin = 40;
  let y = 40;

  // Helper function for section titles
  const addSectionTitle = (title: string) => {
    doc.setFontSize(16);
    doc.setTextColor(100, 50, 200); // purple header
    doc.setFont("helvetica", "bold");
    doc.text(title, margin, y);
    y += 20;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += 15;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);
  };

  // Name & title
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  doc.text("Hiruni Yasoda Sethmini", margin, y);
  y += 25;
  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");
  doc.text("Fullstack Developer | Computer Science Undergraduate", margin, y);
  y += 30;

  // Contact
  addSectionTitle("Contact");
  doc.setFontSize(12);
  doc.text("Email: hirunisethmini@gmail.com", margin, y);
  y += 15;
  doc.text("GitHub: github.com/HiruniYasoda", margin, y);
  y += 15;
  doc.text("LinkedIn: linkedin.com/in/hiruni-sethmini/", margin, y);
  y += 25;

  // About Me
  addSectionTitle("About Me");
  const aboutText =
    "Passionate fullstack developer and undergraduate student with hands-on experience in modern web technologies. Skilled in creating user-friendly applications and solving complex problems. Always eager to learn and contribute to innovative digital solutions.";
  doc.setFontSize(12);
  doc.text(doc.splitTextToSize(aboutText, pageWidth - margin * 2), margin, y);
  y += 60;

  // Education
  addSectionTitle("Education");
  const education = [
    "BSc (Hons) in Computing and Information Systems – Sabaragamuwa University of Sri Lanka (2026)",
    "Pearson Assured Diploma in English – ESOFT Metro Campus",
    "Diploma in Information Technology – ESOFT Metro Campus",
  ];
  education.forEach((item) => {
    doc.text(`- ${item}`, margin, y);
    y += 15;
  });
  y += 10;

  // Projects
  addSectionTitle("Projects");
  const projects = [
    "Visit Sri Lanka (React, JavaScript) → github.com/HiruniYasoda/Visit_Sri_Lanka_1",
    "Library Management System (C#) → github.com/HiruniYasoda/Library-management-system",
    "VeloResQ (React, Node.js) → frontend/backend links",
    "Exam Management Portal (React, Node.js, MongoDB) → github.com/HiruniYasoda/SC-CLIENT",
    "Resident Management Website → github.com/HiruniYasoda/client",
    "SolarShare.lk → Placeholder",
  ];
  projects.forEach((item) => {
    doc.text(`- ${item}`, margin, y);
    y += 15;
  });
  y += 10;

  // Skills
  addSectionTitle("Skills");
  const skills =
    "React – 75%, Node.js – 70%, JavaScript – 75%, C# – 65%, SQL – 70%, MongoDB – 70%, Java – 65%, C – 60%, HTML/CSS – 80%, Bootstrap – 75%, Tailwind CSS – 70%, Git – 70%, Figma – 75%, Photoshop – 65%, Canva – 80%";
  doc.text(doc.splitTextToSize(skills, pageWidth - margin * 2), margin, y);
  y += 45;

  // Achievements
  addSectionTitle("Achievements");
  doc.text("- SheCoderess – First Runner-up (2025 Inter University Hackathon)", margin, y);
  y += 25;

  // Volunteering
  addSectionTitle("Volunteering");
  doc.text("- Graphic Designer (Canva, Photoshop, Figma)", margin, y);
  y += 25;

  // Soft Skills
  addSectionTitle("Soft Skills");
  const softSkills =
    "Problem Solving – 90%, Teamwork – 85%, Creativity – 95%, Communication – 80%, Leadership – 85%";
  doc.text(doc.splitTextToSize(softSkills, pageWidth - margin * 2), margin, y);

  doc.save("HiruniSethmini_CV.pdf");
};
