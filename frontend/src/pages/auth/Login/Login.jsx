import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Login failed.");
        return;
      }

      // Save the token for now
      localStorage.setItem("token", data.token);

      // Save user information
      localStorage.setItem("user", JSON.stringify(data.user));

      setMessage("Login successful!");

      // Redirect after login
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (error) {
      console.error("Login error:", error);

      setMessage("Cannot connect to the server. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Side */}
        <div className="login-info">
          <div className="login-logo" onClick={() => navigate("/")}>
            <span className="logo-i">M</span>
            <span>
              Morocco<span className="logo">Hub</span>
            </span>
          </div>

          <div className="login-info-content">
            <h1>Welcome back!</h1>
            <p>
              Sign in to your MoroccoHub account and discover universities,
              companies, services, and opportunities across Morocco.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="login-form-container">
          <div className="login-form-header">
            <h2>Login</h2>
            <p>Enter your details to access your account.</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {message && <p className="register-message">{message}</p>}
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
              <div className="password-label">
                <label htmlFor="password">Password</label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot password?
                </button>
              </div>

              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Remember me */}
            <div className="remember-me">
              <label>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
            </div>

            {/* Submit */}
            <button type="submit" className="login-submit">
              Login
            </button>
          </form>

          {/* Register */}
          <div className="register-link">
            <span>Don't have an account?</span>
            <button onClick={() => navigate("/register")}>
              Create an account
            </button>
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

export default Login;
