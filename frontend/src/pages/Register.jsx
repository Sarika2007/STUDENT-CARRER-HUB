import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../api";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleRegister(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await apiRequest("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (data.token) {
        localStorage.setItem("token", data.token);
        if (data.user) {
          localStorage.setItem("student", JSON.stringify(data.user));
        }
        navigate("/dashboard", { replace: true });
      } else {
        navigate("/login");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleRegister}>
        <p className="eyebrow">JOIN THE COMMUNITY</p>
        <h1>Create account</h1>
        <p className="muted">Your student journey starts here.</p>

        <label>Full name</label>
        <input
          name="name"
          value={form.name}
          onChange={update}
          placeholder="Your full name"
          required
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={update}
          placeholder="you@example.com"
          required
        />

        <label>Password</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={update}
          minLength={6}
          placeholder="At least 6 characters"
          required
        />

        {error && <p className="error">{error}</p>}

        <button className="primary-btn" disabled={loading}>
          {loading ? "Creating account..." : "Create account"}
        </button>

        <p className="muted">
          Already registered? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
}