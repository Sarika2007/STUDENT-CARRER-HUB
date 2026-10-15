

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../api";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await apiRequest("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      if (!data.token) {
        throw new Error("Backend login response lo token ledu.");
      }

      localStorage.setItem("token", data.token);
      if (data.user) {
        localStorage.setItem("student", JSON.stringify(data.user));
      }

      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleLogin}>
        <p className="eyebrow">WELCOME BACK</p>
        <h1>Student Login</h1>
        <p className="muted">Continue your Campus Connect journey.</p>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />

        {error && <p className="error">{error}</p>}

        <button className="primary-btn" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>

        <p className="muted">
          New student? <Link to="/register">Create an account</Link>
        </p>
      </form>
    </div>
  );
}