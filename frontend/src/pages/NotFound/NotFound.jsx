import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-logo">
          <span className="logo-icon">M</span>
          <span>
            Morocco<span className="logo-highlight">Hub</span>
          </span>
        </div>

        <div className="not-found-content">
          <div className="error-number">404</div>

          <h1>Page Not Found</h1>

          <p>
            Sorry, the page you're looking for doesn't exist or may have been
            moved.
          </p>

          <div className="not-found-actions">
            <button className="home-button" onClick={() => navigate("/")}>
              Back to Home
            </button>

            <button className="back-button" onClick={() => navigate(-1)}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
