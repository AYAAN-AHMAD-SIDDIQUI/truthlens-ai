import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import "../styles/Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      await API.post("/auth/register", {
        name: name.trim(),
        email: email.trim(),
        password,
      });

      alert("Registration Successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="register_container">
      <form className="register_card" onSubmit={handleRegister}>
        <h2 className="register_title">Create Account</h2>
        <p className="register_subtitle">Join TruthLens AI</p>

        <input
          id="register-name"
          name="name"
          className="register_input"
          type="text"
          placeholder="Enter Name"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <input
          id="register-email"
          name="email"
          className="register_input"
          type="email"
          placeholder="Enter Email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <input
          id="register-password"
          name="password"
          className="register_input"
          type="password"
          placeholder="Enter Password"
          autoComplete="new-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          minLength={8}
        />

        <button className="register_btn" type="submit">
          Sign Up
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "15px",
            color: "#94a3b8",
          }}
        >
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
