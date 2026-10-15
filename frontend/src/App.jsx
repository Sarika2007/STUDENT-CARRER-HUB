
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
  Outlet,
  useNavigate,
} from "react-router-dom";

import {
  LayoutDashboard,
  UserRound,
  BriefcaseBusiness,
  FileText,
  FolderKanban,
  Bell,
  LogOut,
} from "lucide-react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/Profile";
import Opportunities from "./pages/Opportunities";
import Applications from "./pages/Applications";
import Projects from "./pages/Projects";
import Notifications from "./pages/Notifications";

import "./index.css";

const menu = [
  {
    to: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    to: "/profile",
    label: "My Profile",
    icon: UserRound,
  },
  {
    to: "/opportunities",
    label: "Opportunities",
    icon: BriefcaseBusiness,
  },
  {
    to: "/applications",
    label: "Applications",
    icon: FileText,
  },
  {
    to: "/projects",
    label: "Projects",
    icon: FolderKanban,
  },
  {
    to: "/notifications",
    label: "Notifications",
    icon: Bell,
  },
];

function ProtectedLayout() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("student");
    navigate("/login", { replace: true });
  }

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2 className="brand">
          Campus<span>Connect</span>
        </h2>

        <p className="menu-label">WORKSPACE</p>

        <nav>
          {menu.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <Icon size={19} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="logout-btn"
          onClick={logout}
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div>
            <p className="eyebrow">STUDENT WORKSPACE</p>
            <h3>Campus Connect</h3>
          </div>

          <div className="avatar">
            S
          </div>
        </header>

        <section className="page-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route element={<ProtectedLayout />}>
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/opportunities"
            element={<Opportunities />}
          />

          <Route
            path="/applications"
            element={<Applications />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/notifications"
            element={<Notifications />}
          />
        </Route>

        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}