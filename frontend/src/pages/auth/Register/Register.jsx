import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    //  API registration request here
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Registration failed.");
        return;
      }

      setMessage("Account created successfully!");

      // Go to login page
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error("Registration error:", error);
      setMessage("Cannot connect to the server. Please try again.");
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        {/* Left Side */}
        <div className="register-info">
          <div className="register-logo" onClick={() => navigate("/")}>
            <span className="logo-i">M</span>

            <span>
              Morocco<span className="logo-highlight1">Hub</span>
            </span>
          </div>

          <div className="register-info-content">
            <h1>Join MoroccoHub!</h1>

            <p>
              Create your account and explore universities, companies, services,
              opportunities, and more across Morocco.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="register-form-container">
          <div className="register-form-header">
            <h2>Create an account</h2>

            <p>Fill in your information to get started.</p>
          </div>

          <form onSubmit={handleSubmit} className="register-form">
            {message && <p className="register-message">{message}</p>}
            {/* First + Last Name */}
            <div className="name-fields">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>

                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last name</label>

                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email address</label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>

              <input
                id="password"
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password</label>

              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength={6}
              />
            </div>

            {/* Terms */}
            <div className="terms">
              <label>
                <input type="checkbox" required />

                <span>
                  I agree to the{" "}
                  <button type="button" onClick={() => navigate("/terms")}>
                    Terms & Conditions
                  </button>
                </span>
              </label>
            </div>

            {/* Submit */}
            <button type="submit" className="register-submit">
              Create Account
            </button>
          </form>

          {/* Login */}
          <div className="login-link">
            <span>Already have an account?</span>

            <button onClick={() => navigate("/login")}>Login</button>
          </div>

          {/* Back Home */}
          <button className="back-home" onClick={() => navigate("/")}>
            ← Back to MoroccoHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
