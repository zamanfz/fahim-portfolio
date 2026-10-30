import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Menu, X, Terminal, ShieldCheck, Activity, Code2, ExternalLink,
  MapPin, Download, ChevronRight
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    name: "CloudSentinel",
    type: "AI / CLOUD SECURITY",
    year: "2026",
    description: "An AWS security scanner that detects cloud misconfigurations and combines rule-based checks with machine-learning risk analysis.",
    tags: ["Python", "AWS IAM", "Isolation Forest", "Random Forest"],
    icon: ShieldCheck,
    tone: "lime",
    repo: "https://github.com/zamanfz",
    status: "MODEL + SCANNER",
    images: [
      { src: "/images/cloudsentinel-dashboard.png", label: "Security dashboard" },
      { src: "/images/cloudsentinel-ml.png", label: "IAM machine-learning results" }
    ],
    details: "Cloud misconfiguration scanner combining deterministic security checks with ML-assisted analysis. The captured dashboard shows a medium risk score of 11, two findings, and the IAM Random Forest model evaluation."
  },
  {
    number: "02",
    name: "HPCC AI Monitor",
    type: "MACHINE LEARNING / LINUX",
    year: "2026",
    description: "A monitoring system designed to inspect CPU, memory and disk metrics on an HPCC environment and flag unusual system behaviour.",
    tags: ["Python", "RHEL 7.9", "Bash", "Machine Learning"],
    icon: Activity,
    tone: "blue",
    repo: "https://github.com/zamanfz",
    status: "ONGC INTERNSHIP",
    images: [],
    details: "A monitoring concept developed during the ONGC Jorhat winter internship: a monitoring node collects CPU, memory and disk metrics from an HPCC environment and applies anomaly detection before alerting."
  },
  {
    number: "03",
    name: "Computer Vision Experiments",
    type: "AI / COMPUTER VISION",
    year: "2025–26",
    description: "Hands-on experiments with image classification, object detection and model explainability using modern computer-vision workflows.",
    tags: ["Python", "TensorFlow", "YOLO", "Grad-CAM"],
    icon: Code2,
    tone: "orange",
    repo: "https://github.com/zamanfz/Underwater-trash-detection",
    status: "RESEARCH & BUILD",
    images: [],
    details: "Computer-vision experiments using image classification, object detection and model explainability workflows."
  },
  {
    number: "04",
    name: "Assam TeaTrace",
    type: "SUPPLY-CHAIN TRACEABILITY",
    year: "2026",
    description: "A digital provenance platform for tracing Assam tea from origin through its journey, with package-level traceability and geographic context.",
    tags: ["Python", "React", "REST API", "Leaflet", "Batch Lineage"],
    icon: MapPin,
    tone: "orange",
    repo: "https://github.com/zamanfz",
    status: "TRACEABILITY PLATFORM",
    images: [
      { src: "/images/teatrace-home.png", label: "TeaTrace landing page" },
      { src: "/images/teatrace-package.png", label: "Verified package provenance" },
      { src: "/images/teatrace-map.png", label: "Tea garden origin map" }
    ],
    details: "A traceability prototype focused on making tea provenance understandable to consumers. Screenshots show the consumer-facing landing page, a verified package record (PKG-0001), and a geographic origin view around Dibrugarh, Assam."
  }
];

const missions = [
  {
    id: "01", title: "AI & Machine Learning",
    desc: "Building and evaluating practical ML workflows—from feature engineering and anomaly detection to computer vision and model interpretation.",
    stack: ["Python", "Scikit-learn", "TensorFlow", "Model Evaluation"]
  },
  {
    id: "02", title: "Cloud Security",
    desc: "Exploring cloud configuration risks, security rules, IAM behaviour and ways to make infrastructure findings easier to understand.",
    stack: ["AWS", "IAM", "Security Checks", "Risk Scoring"]
  },
  {
    id: "03", title: "Systems & Automation",
    desc: "Connecting scripts, Linux systems and monitoring pipelines to automate repetitive work and surface meaningful signals.",
    stack: ["Linux", "Bash", "Python", "Monitoring"]
  },
  {
    id: "04", title: "Software Development",
    desc: "Turning ideas into usable tools with a focus on clear interfaces, maintainable code and practical problem-solving.",
    stack: ["JavaScript", "React", "Git", "REST APIs"]
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMission, setActiveMission] = useState(0);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [clock, setClock] = useState(new Date());
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const tick = setInterval(() => setClock(new Date()), 1000);
    const move = (event) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", move);
    return () => { clearInterval(tick); window.removeEventListener("mousemove", move); };
  }, []);
  const mission = missions[activeMission];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Fahim Zaman home">
          <span className="brand-mark">FZ</span>
          <span>FAHIM ZAMAN<span className="brand-dot">.</span></span>
        </a>
        <div className="location"><span className="live-dot" /> INDIA · IST</div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#home" onClick={closeMenu}><span>01</span> Index</a>
          <a href="#work" onClick={closeMenu}><span>02</span> Work</a>
          <a href="#about" onClick={closeMenu}><span>03</span> About</a>
          <a href="#contact" onClick={closeMenu}><span>04</span> Contact <ArrowUpRight size={13}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-meta mono">
            <span>PORTFOLIO / 2026—27</span>
            <span>COMPUTER SCIENCE & ENGINEERING</span>
          </div>
          <div className="hero-copy">
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
              <span className="eyebrow-line" /> DEVELOPER · PROFESSIONAL BUTTON-PUSHER
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .08 }}>
              I make weird<br />
              things <span className="outline-word">work</span><span className="lime-dot">!</span>
            </motion.h1>
            <motion.div className="hero-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}>
              <p className="hero-description">Part engineer, part experimenter. I turn AI, cloud security and curious ideas into things that actually work.</p>
              <a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDownRight size={25}/></a>
            </motion.div>
          </div>

          <div className="hero-art" aria-label="Decorative abstract system diagram">
            <div className="art-top mono"><span>FIG. 001</span><span>BUILD / TEST / ITERATE · {clock.toLocaleTimeString("en-IN", { hour12: false })}</span></div>
            <div className="orbit orbit-one"><span className="orbit-label">MODEL</span></div>
            <div className="orbit orbit-two"><span className="orbit-label">SYSTEM</span></div>
            <div className="orbit orbit-three"><span className="orbit-label">SIGNAL</span></div>
            <div className="core"><img src="/images/fahim-portrait.jpg" alt="" /><span>FZ_</span></div>
            <div className="art-coordinate mono">26°10' N<br/>94°55' E</div>
            <div className="art-caption mono">CURIOUS BY DEFAULT<br/>ENGINEERED WITH INTENT</div>
          </div>
          <div className="hero-footer mono">
            <span>SCROLL TO EXPLORE <ArrowDownRight size={13}/></span>
            <span>INDEPENDENT THINKING. PRACTICAL BUILDING.</span>
            <span>© FZ 2026</span>
          </div>
        </section>
        <div className="ticker" aria-label="Areas of focus"><div className="ticker-track">
          {Array.from({ length: 2 }).map((_, i) => <span key={i}>AI SYSTEMS <b>✳</b> CLOUD SECURITY <b>✳</b> MACHINE LEARNING <b>✳</b> LINUX & AUTOMATION <b>✳</b> SHIP SOMETHING WEIRD <b>✳</b></span>)}
        </div></div>

        <section className="statement section-wrap">
          <p className="section-index mono">00 / THE APPROACH</p>
          <div className="statement-content">
            <h2>Curiosity is the starting point.<br/><span>Shipping is the superpower.</span></h2>
            <p>I’m a Computer Science & Engineering student at DUIET, Dibrugarh University. I enjoy exploring the space between intelligent software, infrastructure and real-world problems—then building something that works.</p>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div><p className="section-index mono">01 / THINGS I MADE</p><h2>Built with curiosity.<br/><span>Released into the wild.</span></h2></div>
            <p className="heading-note">A selection of systems, experiments<br/>and problems I’ve worked on.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <motion.article className={`project-card ${project.tone}`} key={project.number} initial={{ opacity: 0, y: 28, rotateX: 3 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .55, type: "spring", stiffness: 90 }} onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--mx", `${((e.clientX-r.left)/r.width)*100}%`); e.currentTarget.style.setProperty("--my", `${((e.clientY-r.top)/r.height)*100}%`); }}>
                  <div className="project-number mono">{project.number}<span> / 04</span></div>
                  <div className="project-main">
                    <div className="project-kicker mono">{project.type} <span>·</span> {project.year}</div>
                    <h3>{project.name}<span className="project-period">.</span></h3>
                    <p>{project.description}</p>
                    <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <div className="project-visual">
                    <div className="visual-grid" />
                    <div className="visual-icon"><Icon size={42} strokeWidth={1.1}/></div>
                    <span className="visual-status mono"><span className="live-dot"/> {project.status}</span>
                    <span className="visual-corner mono">FZ / {project.number}</span>
                  </div>
                  {project.images.length > 0 && <div className="project-gallery">
                    <div className="gallery-heading mono"><span>VISUAL FIELD NOTES</span><span>{String(project.images.length).padStart(2, "0")} IMAGES</span></div>
                    <div className="gallery-strip">{project.images.map((image, index) => <button className="gallery-thumb" key={image.src} onClick={() => setLightbox({ ...image, project: project.name, index, total: project.images.length })} aria-label={`Open ${image.label}`}>
                      <img src={image.src} alt={image.label} loading="lazy" /><span>{image.label} <ArrowUpRight size={13}/></span>
                    </button>)}</div>
                    <p className="project-detail">{project.details}</p>
                  </div>}
                  {!project.images.length && <div className="project-gallery missing-gallery"><div className="gallery-heading mono"><span>VISUAL FIELD NOTES</span><span>AWAITING SCREENSHOTS</span></div><p className="project-detail">{project.details}</p></div>}
                  <a className="project-arrow" href={project.repo} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} GitHub repository`}><ArrowUpRight size={22}/></a>
                </motion.article>
              );
            })}
          </div>
          <p className="project-disclaimer mono">NOTE: Replace the sample repository links with your actual project URLs before publishing.</p>
        </section>

        <section className="factory section-wrap" id="skills">
          <div className="section-heading">
            <div><p className="section-index mono">02 / MY DIGITAL TOOLBOX</p><h2>A lot of tools.<br/><span>One curious brain.</span></h2></div>
            <p className="heading-note">I choose the tools around<br/>the problem—not the other way around.</p>
          </div>
          <div className="toolkit-grid">
            <div className="toolkit-intro">
              <div className="toolkit-symbol"><Terminal size={26}/></div>
              <p className="mono">CURRENT LOADOUT</p>
              <h3>Build.<br/>Measure.<br/><span>Improve.</span></h3>
            </div>
            <div className="tool-groups">
              <div className="tool-group"><span className="tool-index mono">01</span><div><h4>Languages</h4><p>Python · C++ · Java · JavaScript · Bash · SQL</p></div></div>
              <div className="tool-group"><span className="tool-index mono">02</span><div><h4>AI / Machine Learning</h4><p>Scikit-learn · TensorFlow · Random Forest · Isolation Forest · YOLO</p></div></div>
              <div className="tool-group"><span className="tool-index mono">03</span><div><h4>Cloud / Systems</h4><p>AWS IAM · Linux / RHEL · VirtualBox · System Monitoring</p></div></div>
              <div className="tool-group"><span className="tool-index mono">04</span><div><h4>Tools & Workflow</h4><p>Git · GitHub · VS Code · Google Colab · Jupyter</p></div></div>
              <div className="signal-meter"><div className="signal-label mono"><span>FOCUS SIGNAL</span><span>LIVE SCAN</span></div><div className="signal-bars">{Array.from({ length: 34 }).map((_, i) => <i key={i} style={{ "--i": i }} />)}</div><p className="mono">CURIOSITY LEVEL: <strong>OVERFLOW</strong></p></div>
            </div>
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="section-heading">
            <div><p className="section-index mono">03 / THE HUMAN PATCH NOTES</p><h2>Who’s behind<br/><span>the keyboard?!</span></h2></div>
          </div>
          <div className="about-layout">
            <div className="about-card">
              <div className="about-card-top mono"><span>PLAYER 01</span><span>PROFILE / FZ</span></div>
              <div className="avatar-placeholder profile-photo"><img src="/images/fahim-portrait.jpg" alt="Fahim Zaman" loading="lazy"/><span>FZ</span><div className="avatar-cross">+</div></div>
              <div className="about-card-bottom"><div><h3>Fahim Zaman</h3><p>Computer Science & Engineering</p></div><span className="availability"><i/> OPEN TO OPPORTUNITIES</span></div>
            </div>
            <div className="about-copy">
              <p className="large-copy">I’m interested in how intelligent systems behave—and how to make them useful, reliable and easier to understand.</p>
              <p>My experience includes an ONGC Jorhat winter internship, where I worked on an AI-assisted HPCC monitoring concept, and independent development of CloudSentinel, an AWS security scanning project.</p>
              <p>I’m currently growing my skills across AI/ML, cloud security and software engineering, and looking for opportunities where I can contribute, learn quickly and ship meaningful work.</p>
              <div className="about-facts">
                <div><span className="mono">EDUCATION</span><strong>B.Tech · CSE</strong><small>DUIET, Dibrugarh University</small></div>
                <div><span className="mono">FOCUS</span><strong>AI/ML + Systems</strong><small>Build & experiment</small></div>
              </div>
              <a className="text-link" href="#contact">LET’S CONNECT <ArrowUpRight size={16}/></a>
            </div>
          </div>
        </section>

        <section className="missions-section section-wrap">
          <div className="section-heading">
            <div><p className="section-index mono">04 / CURRENT SIDE QUESTS</p><h2>Pick a side quest.<br/><span>Let’s build something.</span></h2></div>
            <p className="heading-note">Areas I’m excited to contribute to<br/>and keep learning in.</p>
          </div>
          <div className="mission-layout">
            <div className="mission-tabs" role="tablist" aria-label="Areas of interest">
              {missions.map((item, index) => <button key={item.id} className={activeMission === index ? "mission-tab active" : "mission-tab"} onClick={() => setActiveMission(index)} role="tab" aria-selected={activeMission === index}>
                <span className="mono">{item.id}</span><strong>{item.title}</strong><ChevronRight size={18}/>
              </button>)}
            </div>
            <motion.div className="mission-detail" key={mission.id} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .25 }}>
              <div className="mission-detail-top mono"><span>SELECTED AREA</span><span>{mission.id} / 04</span></div>
              <h3>{mission.title}<span>.</span></h3>
              <p>{mission.desc}</p>
              <div className="mission-stack-label mono">TOOLS & TOPICS</div>
              <div className="tags">{mission.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              <a className="text-link" href="#contact">DISCUSS A PROJECT <ArrowUpRight size={16}/></a>
            </motion.div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-top mono"><span>05 / YOUR TURN</span><span>INBOX OPEN</span></div>
          <h2>Got a problem<br/>that needs <span>nerding out?</span></h2>
          <div className="contact-bottom">
            <p>I’m looking for opportunities to learn, contribute and build with thoughtful teams. If you’re working on something interesting, let’s talk.</p>
            <a className="contact-button" href="mailto:zamanfahim01@gmail.com?subject=Let's%20connect%20-%20Fahim%20Zaman">START A CONVERSATION <ArrowUpRight size={18}/></a>
          </div>
          <div className="contact-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a>
            <a href="https://www.linkedin.com/in/fahim-zaman-0a9776335/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={13}/></a>
            <a href="mailto:zamanfahim01@gmail.com"><Mail size={17}/> Email <ArrowUpRight size={13}/></a>
          </div>
        </section>
      </main>
      {lightbox && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${lightbox.project} screenshot`} onClick={() => setLightbox(null)}>
        <div className="lightbox-panel" onClick={e => e.stopPropagation()}>
          <div className="lightbox-top mono"><span>{lightbox.project} / {lightbox.index + 1} OF {lightbox.total}</span><button onClick={() => setLightbox(null)} aria-label="Close screenshot"><X size={22}/></button></div>
          <img src={lightbox.src} alt={lightbox.label}/>
          <p>{lightbox.label}</p>
        </div>
      </div>}

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">FZ</span><span>FAHIM ZAMAN<span className="brand-dot">.</span></span></a>
        <p className="mono">BUGS ARE FEATURES UNTIL PROVEN OTHERWISE · 2026</p>
        <a href="#home" className="back-top mono">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
