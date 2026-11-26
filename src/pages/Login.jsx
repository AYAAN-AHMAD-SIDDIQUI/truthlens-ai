import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/Lgin.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email.trim() || !password) {
      alert("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);
      const response = await API.post("/auth/login", {
        email: email.trim(),
        password,
      });

      if (!response.data.token) {
        alert("Login failed: authentication token was not received.");
        return;
      }

      localStorage.setItem("token", response.data.token);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      alert(error.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login_container">
      <form className="login_card" onSubmit={handleLogin}>
        <h2 className="login_title">Welcome Back</h2>
        <p className="login_subtitle">Login to TruthLens AI</p>

        <input
          id="login-email"
          name="email"
          className="login_input"
          type="email"
          placeholder="Enter Email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <input
          id="login-password"
          name="password"
          className="login_input"
          type="password"
          placeholder="Enter Password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <button className="login_btn" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
