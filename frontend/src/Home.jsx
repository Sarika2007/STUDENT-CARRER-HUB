
import { useState } from "react";
import {
  GraduationCap,
  BriefcaseBusiness,
  BookOpen,
  FileText,
  Bot,
  Code2,
  Search,
  Menu,
  X,
  ArrowRight,
  MapPin,
  Sparkles,
  Globe,
  LayoutDashboard,
} from "lucide-react";
import "./App.css";

const features = [
  {
    title: "Jobs & Placements",
    description: "Explore job opportunities and prepare for placements.",
    icon: BriefcaseBusiness,
    color: "blue",
  },
  {
    title: "Internships",
    description: "Discover internships and gain practical experience.",
    icon: GraduationCap,
    color: "purple",
  },
  {
    title: "Study Materials",
    description: "Organize your notes, PDFs and exam resources.",
    icon: BookOpen,
    color: "green",
  },
  {
    title: "Resume Builder",
    description: "Prepare your resume for jobs and internships.",
    icon: FileText,
    color: "orange",
  },
  {
    title: "AI Career Assistant",
    description: "Get guidance for interviews, skills and careers.",
    icon: Bot,
    color: "pink",
  },
  {
    title: "Courses & Certificates",
    description: "Discover courses and develop new skills.",
    icon: Code2,
    color: "cyan",
  },
];

const opportunities = [
  {
    title: "Software Developer Intern",
    field: "Software Development",
    location: "Hyderabad / Remote",
    type: "Internship",
  },
  {
    title: "Graduate Engineer Trainee",
    field: "Engineering",
    location: "India",
    type: "Full-time",
  },
  {
    title: "Data Science Intern",
    field: "AI & Data Science",
    location: "Remote / Hybrid",
    type: "Internship",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("EN");

  const filteredOpportunities = opportunities.filter((item) =>
    `${item.title} ${item.field} ${item.type}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="app-shell">
      <header className="navbar" id="home">
        <a href="#home" className="brand">
          <span className="brand-icon">
            <GraduationCap size={25} />
          </span>
          <span>
            Career<span className="brand-accent">Nest</span>
            <small>YOUR FUTURE STARTS HERE</small>
          </span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#jobs" onClick={() => setMenuOpen(false)}>Jobs</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Internships</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Resources</a>
        </nav>

        <div className="nav-actions">
          <button
            className="language-btn"
            onClick={() => setLanguage(language === "EN" ? "TE" : "EN")}
          >
            <Globe size={17} /> {language}
          </button>

          <a className="login-btn" href="#dashboard">
            Student Dashboard <ArrowRight size={16} />
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">
              <Sparkles size={15} /> YOUR ALL-IN-ONE STUDENT PLATFORM
            </div>

            <h1>
              Your dream career
              <br />
              starts <span>right here.</span>
            </h1>

            <p className="hero-description">
              Discover opportunities, learn new skills, prepare for interviews
              and build your future — all in one place.
            </p>

            <form
              className="search-box"
              onSubmit={(event) => {
                event.preventDefault();
                document
                  .getElementById("jobs")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Search size={20} />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search jobs, internships..."
              />
              <button type="submit">
                Explore <ArrowRight size={16} />
              </button>
            </form>

            <div className="hero-notes">
              <span>✓ Student-friendly opportunities</span>
              <span>✓ Learning resources in one place</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-card">
              <div className="hero-illustration">
                <GraduationCap size={90} strokeWidth={1.4} />
              </div>
              <span className="section-kicker">YOUR NEXT CHAPTER</span>
              <h3>Dream it. Learn it. Achieve it.</h3>
              <p>Small steps. Big futures.</p>
              <div className="skill-pills">
                <span>Skills</span>
                <span>Career</span>
                <span>Growth</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad" id="features">
          <div className="section-heading">
            <div>
              <span className="section-kicker">YOUR CAREER TOOLKIT</span>
              <h2>
                Everything you need to <span>get ahead.</span>
              </h2>
            </div>
            <p>From your first lesson to your first job, start here.</p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <a
                  className="feature-card"
                  href={
                    feature.title === "Jobs & Placements"
                      ? "#jobs"
                      : feature.title === "AI Career Assistant"
                        ? "#assistant"
                        : "#dashboard"
                  }
                  key={feature.title}
                >
                  <div className={`feature-icon ${feature.color}`}>
                    <Icon size={24} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <span className="feature-link">
                    Explore <ArrowRight size={16} />
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        <section className="jobs-section section-pad" id="jobs">
          <div className="section-heading">
            <div>
              <span className="section-kicker">FIND YOUR NEXT OPPORTUNITY</span>
              <h2>
                Explore <span>opportunities.</span>
              </h2>
            </div>
            <p>Search the sample listings by role or field.</p>
          </div>

          <div className="job-list">
            {filteredOpportunities.length > 0 ? (
              filteredOpportunities.map((item) => (
                <article className="job-card" key={item.title}>
                  <div className="job-logo">
                    <BriefcaseBusiness size={23} />
                  </div>

                  <div className="job-info">
                    <h3>{item.title}</h3>
                    <p>{item.field}</p>
                    <span className="job-location">
                      <MapPin size={14} /> {item.location}
                    </span>
                  </div>

                  <span className="job-type">{item.type}</span>
                </article>
              ))
            ) : (
              <p>No matching sample listings. Try another search.</p>
            )}
          </div>

          <p className="demo-note">
            These are sample listings, not verified live vacancies.
          </p>
        </section>

        <section className="section-pad" id="assistant">
          <div className="assistant-banner">
            <div className="assistant-icon">
              <Bot size={36} />
            </div>
            <div>
              <span className="section-kicker">YOUR CAREER GUIDE</span>
              <h2>Ready to plan your future?</h2>
              <p>
                Our future AI assistant will help with career paths,
                interview preparation and skill development.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad dashboard-section" id="dashboard">
          <div className="dashboard-mini">
            <span className="section-kicker">YOUR PERSONAL SPACE</span>
            <h2><LayoutDashboard size={25} /> Student Dashboard</h2>
            <p>Keep your career preparation and learning journey organized.</p>

            <div className="dashboard-cards">
              <div><BookOpen /><h3>Learn</h3><p>Study resources</p></div>
              <div><BriefcaseBusiness /><h3>Discover</h3><p>Career options</p></div>
              <div><FileText /><h3>Prepare</h3><p>Resume and interviews</p></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="brand">
          <span className="brand-icon"><GraduationCap size={23} /></span>
          <span>
            Career<span className="brand-accent">Nest</span>
            <small>YOUR FUTURE STARTS HERE</small>
          </span>
        </a>
        <p>Learn something new. Take one step forward.</p>
        <span>© 2026 Student Career Hub · Project preview</span>
      </footer>
    </div>
  );
}

export default App;