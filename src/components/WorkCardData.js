import pro1 from "../assets/amazon.png";
import pro2 from "../assets/claritynews.png";
import pro3 from "../assets/portfolio.png";
// SkillBridge screenshot served from public/skillbridge-dashboard.jpg; no import needed.

const ProjectCardData = [
  // Keep Infosys project (SkillBridge) on top
  {
    imgsrc: require("../assets/WhatsApp Image 2025-10-30 at 4.06.38 PM.jpeg"),
    title: "SkillBridge (Infosys – Volunteers ↔ NGOs)",
    text:
      "Infosys project: Full‑stack platform with dual roles (Volunteers, NGOs). Auth & profiles done. NGOs have full CRUD for skill‑tagged opportunities. Building volunteer filters by skill/location/duration. Schema: Users, Opportunities, Applications, Messages. Real‑time chat via WebSockets planned. 8‑week plan focusing on matching & applications.",
    view: "/SkillBridge",
    source: "https://github.com/springboardmentor182a20-oss/skillbridge-full-stack.git"
  },
  {
    imgsrc: pro2,
    title: "ClarityNews",
    text: "Designed and implemented a responsive website using HTML, CSS, and JavaScript, incorporating React for dynamic UI. Leveraged React features, including props, useState, useEffect, and mapping, to efficiently manage and display data. Integrated with a free news API to fetch and showcase real-time news articles, enhancing user experience.",
    view: "https://github.com/abhilash6907/ClarityNews.git",
    source: "https://github.com/abhilash6907/ClarityNews.git",
  },
  {
    imgsrc: pro3,      
    title: "Portfolio",
    text: "Developed a responsive portfolio website using HTML, CSS, and JavaScript with React, showcasing creativity and technical skills. Utilized React features like props, useState hook, and mapping for dynamic and interactive user interface, enhancing the overall user experience.",
    view: "https://abhilash100-portfolio.netlify.app/",
    source: "https://github.com/abhilash6907/Portfolio.git",
  },
  {
    imgsrc: pro1,
    title: "Amazon clone",
    text: "Designed and implemented a non-responsive Amazon clone website using HTML and CSS. Created a visually appealing user interface to mimic the Amazon e-commerce platform. Demonstrated proficiency in front-end development, design principles, and HTML/CSS. Gained hands-on experience in web development, contributing to personal growth and skills enhancement.",
    view: "https://main--amazon-cloan.netlify.app/",
    source: "https://amazon-cloan.netlify.app",
  }
];
export default ProjectCardData;
