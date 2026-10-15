
import { useEffect, useState } from "react";
import { apiRequest } from "../api";

function DataPage({ title, endpoint, description }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    apiRequest(endpoint)
      .then((data) => {
        if (active) {
          const list = Array.isArray(data)
            ? data
            : data.items || data.applications || data.projects ||
              data.notifications || data.opportunities || [];
          setItems(list);
        }
      })
      .catch((err) => {
        if (active) setError(err.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => { active = false; };
  }, [endpoint]);

  return (
    <div>
      <p className="eyebrow">CAMPUS CONNECT</p>
      <h1>{title}</h1>
      <p className="muted">{description}</p>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && items.length === 0 && (
        <div className="info-panel">
          <h3>No items yet</h3>
          <p className="muted">
            Nothing to show right now. Check back after data is added.
          </p>
        </div>
      )}

      <div className="dashboard-grid">
        {items.map((item, index) => (
          <article className="dashboard-card" key={item._id || index}>
            <h3>{item.title || item.name || item.role || "Untitled"}</h3>
            <p className="muted">
              {item.description || item.company || item.status || ""}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function Opportunities() {
  return <DataPage title="Opportunities" endpoint="/api/opportunities"
    description="Discover internships and jobs." />;
}

export function Applications() {
  return <DataPage title="My Applications" endpoint="/api/applications/mine"
    description="Track your application status." />;
}

export function Projects() {
  return <DataPage title="Student Projects" endpoint="/api/projects"
    description="Explore student projects and collaboration." />;
}

export function Notifications() {
  return <DataPage title="Notifications" endpoint="/api/notifications"
    description="Stay updated with your activity." />;
}

export function Profile() {
  const [student, setStudent] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("student") || "{}");
    } catch {
      return {};
    }
  });

  return (
    <div>
      <p className="eyebrow">YOUR ACCOUNT</p>
      <h1>My Profile</h1>
      <div className="info-panel">
        <h3>{student.name || "Student"}</h3>
        <p>{student.email || "No email available"}</p>
        <p className="muted">
          Profile details are based on your saved login information.
        </p>
      </div>
    </div>
  );
}