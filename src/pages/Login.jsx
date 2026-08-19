import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/Lgin.css";
import toast from "react-hot-toast";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      console.log("LOGIN RESPONSE:", res.data);

      // Token check
      if (!res.data.token) {
        alert("Login successful, but token was not received.");
        return;
      }

      // Token save
      localStorage.setItem("token", res.data.token);

      console.log(
        "TOKEN SAVED:",
        localStorage.getItem("token")
      );

      navigate("/");

    } catch (err) {
      console.error("LOGIN ERROR:", err);

      alert(
        err.response?.data?.message ||
        "Login failed"
      );
    }
  };

  return (
  <div className="login_container">
    <div className="login_card">

      <h2 className="login_title">
        Welcome Back
      </h2>

      <p className="login_subtitle">
        Login to TruthLens AI
      </p>

      <input
        className="login_input"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="login_input"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="login_btn"
        onClick={handleLogin}
      >
        Login
      </button>

    </div>
  </div>
);
}

export default Login;