
import { useState } from "react";

const sampleOpportunities = [
  {
    title: "Web Development Intern",
    company: "Campus Connect",
    type: "Internship",
    description: "Learn frontend and backend web development.",
  },
  {
    title: "Java Developer Intern",
    company: "Technology Team",
    type: "Internship",
    description: "Practice Java programming and application development.",
  },
  {
    title: "AI & Machine Learning Intern",
    company: "Innovation Team",
    type: "Internship",
    description: "Explore AI, machine learning, and real-world projects.",
  },
];

export default function Opportunities() {
  const [search, setSearch] = useState("");

  const filtered = sampleOpportunities.filter((item) =>
    `${item.title} ${item.company} ${item.type}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <p className="eyebrow">CAREER CENTER</p>
      <h1>Opportunities</h1>
      <p className="muted">
        Discover internships and opportunities to grow your skills.
      </p>

      <input
        type="search"
        placeholder="Search opportunities..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "450px",
          padding: "14px",
          border: "1px solid #dce2ed",
          borderRadius: "10px",
          margin: "16px 0 24px",
        }}
      />

      <div className="dashboard-grid">
        {filtered.map((item) => (
          <div className="dashboard-card" key={item.title}>
            <div className="card-icon">💼</div>
            <h3>{item.title}</h3>
            <p className="muted">{item.company}</p>
            <p>{item.description}</p>
            <span className="card-action">{item.type}</span>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="info-panel">
          No opportunities found. Try another search.
        </div>
      )}
    </div>
  );
}