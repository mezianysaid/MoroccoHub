import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      navigate("/login");
      return;
    }

    setUser(JSON.parse(savedUser));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  if (!user) {
    return <div className="profile-loading">Loading...</div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar">
            {user.firstName?.charAt(0).toUpperCase()}
            {user.lastName?.charAt(0).toUpperCase()}
          </div>

          <div className="profile-title">
            <h1>
              {user.firstName} {user.lastName}
            </h1>
            <p>{user.email}</p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="profile-card">
          <div className="card-header">
            <h2>Personal Information</h2>

            {/* <button
              className="edit-button"
              onClick={() => navigate("/profile/edit")}
            >
              Edit Profile
            </button> */}
          </div>

          <div className="profile-info-grid">
            <div className="info-item">
              <span>First Name</span>
              <strong>{user.firstName}</strong>
            </div>

            <div className="info-item">
              <span>Last Name</span>
              <strong>{user.lastName}</strong>
            </div>

            <div className="info-item">
              <span>Email</span>
              <strong>{user.email}</strong>
            </div>

            <div className="info-item">
              <span>Account ID</span>
              <strong>#{user.id}</strong>
            </div>
          </div>
        </div>

        {/* Account */}
        <div className="profile-card">
          <h2>Account</h2>

          <div className="account-actions">
            {/* <button onClick={() => navigate("/profile/edit")}>
              Edit Profile
            </button>

            <button onClick={() => navigate("/change-password")}>
              Change Password
            </button> */}

            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
