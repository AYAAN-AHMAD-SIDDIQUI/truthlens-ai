import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/Register.css";
import { Link } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
      });

      alert("Registration Successful");
      navigate("/login");
    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Registration Failed"
      );
    }
  };

  return (
  <div className="register_container">
    <div className="register_card">

      <h2 className="register_title">
        Create Account
      </h2>

      <p className="register_subtitle">
        Join TruthLens AI
      </p>

      <input
        className="register_input"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="register_input"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="register_input"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="register_btn"
        onClick={handleRegister}
      >
        Sign Up
      </button>

      <p
        style={{
          textAlign: "center",
          marginTop: "15px",
          color: "#94a3b8"
        }}
      >
        Already have an account?{" "}
        <Link to="/login">
          Login
        </Link>
      </p>

    </div>
  </div>

  );
}

export default Register;