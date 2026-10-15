
import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  FileText,
  FolderKanban,
  Bell,
  ArrowUpRight,
} from "lucide-react";

const cards = [
  {
    title: "Opportunities",
    description: "Explore internships and jobs.",
    icon: BriefcaseBusiness,
    path: "/opportunities",
  },
  {
    title: "Applications",
    description: "Track your application progress.",
    icon: FileText,
    path: "/applications",
  },
  {
    title: "Projects",
    description: "Showcase your work and ideas.",
    icon: FolderKanban,
    path: "/projects",
  },
  {
    title: "Notifications",
    description: "Check your latest updates.",
    icon: Bell,
    path: "/notifications",
  },
];

export default function Dashboard() {
  let student = {};
  try {
    student = JSON.parse(localStorage.getItem("student") || "{}");
  } catch {
    student = {};
  }

  return (
    <div>
      <div className="welcome">
        <div>
          <p className="eyebrow">YOUR STUDENT SPACE</p>
          <h1>Welcome back{student.name ? `, ${student.name}` : ""}!</h1>
          <p className="muted">
            Discover opportunities, build projects, and grow your career.
          </p>
        </div>
        <Link className="primary-link" to="/profile">View Profile</Link>
      </div>

      <h2 className="section-title">Your workspace</h2>

      <div className="dashboard-grid">
        {cards.map(({ title, description, icon: Icon, path }) => (
          <Link className="dashboard-card" to={path} key={title}>
            <div className="card-icon"><Icon size={22} /></div>
            <ArrowUpRight className="card-arrow" size={19} />
            <h3>{title}</h3>
            <p className="muted">{description}</p>
            <span className="card-action">Open section →</span>
          </Link>
        ))}
      </div>

      <div className="info-panel">
        <h2>Make your profile stand out</h2>
        <p className="muted">
          Add your skills, education, and projects to prepare for new opportunities.
        </p>
        <Link to="/profile" className="text-link">Complete your profile →</Link>
      </div>
    </div>
  );
}