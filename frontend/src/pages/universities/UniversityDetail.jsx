import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Star,
  Heart,
  Globe,
  Phone,
  Mail,
  GraduationCap,
  Calendar,
  Users,
} from "lucide-react";

import "./UniversityDetail.css";

// Example university data

function UniversityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [favorite, setFavorite] = useState(false);
  const [university, setUniversity] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Find university using the ID from the URL

  // If university doesn't exist
  if (!university) {
    return (
      <div className="not-found">
        <h1>University Not Found</h1>
        <p>The university you're looking for doesn't exist.</p>

        <button onClick={() => navigate("/universities")}>
          Back to Universities
        </button>
      </div>
    );
  }

  useEffect(() => {
    const fetchUniversity = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/universities/${id}`,
        );

        const result = await response.json();

        if (result.success) {
          setUniversity(result.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch university:", error);
      }
    };

    fetchUniversity();
  }, [id]);

  return (
    <>
      {isLoading || !university ? (
        <div className="not-found">
          <h1>University Not Found</h1>
          <p>The university you're looking for doesn't exist.</p>

          <button onClick={() => navigate("/universities")}>
            Back to Universities
          </button>
        </div>
      ) : (
        <div className="university-detail">
          {/* Back Button */}
          <button
            className="back-button"
            onClick={() => navigate("/universities")}
          >
            <ArrowLeft size={18} />
            Back to Universities
          </button>

          {/* Hero */}
          <section className="university-hero">
            <div className="university-image">
              <img src={university.image} alt={university.name} />
            </div>

            <div className="university-info">
              <div className="university-type">{university.type}</div>

              <h1>{university.name}</h1>

              <div className="location">
                <MapPin size={18} />
                {university.city}, {university.region}
              </div>

              <div className="rating">
                <Star size={18} fill="currentColor" />
                <strong>{university.rating}</strong>

                <span>({university.reviews} reviews)</span>
              </div>

              <p className="description">{university.description}</p>

              <div className="hero-actions">
                <button
                  className={`favorite-button ${favorite ? "favorite-active" : ""}`}
                  onClick={() => setFavorite(!favorite)}
                >
                  <Heart size={20} fill={favorite ? "currentColor" : "none"} />
                  <span>{favorite ? "Saved" : "Add to Favorites"}</span>
                </button>

                <a
                  href={university.website}
                  target="_blank"
                  rel="noreferrer"
                  className="website-button"
                >
                  <Globe size={20} />
                  <span>Visit Website</span>
                </a>
              </div>
            </div>
          </section>

          {/* Statistics */}
          <section className="university-stats">
            <div className="stat-card">
              <Calendar size={25} />
              <div>
                <span>Founded</span>
                <strong>{university.founded}</strong>
              </div>
            </div>

            <div className="stat-card">
              <Users size={25} />
              <div>
                <span>Students</span>
                <strong>{university.students}</strong>
              </div>
            </div>

            <div className="stat-card">
              <Star size={25} />
              <div>
                <span>Rating</span>
                <strong>{university.rating}/5</strong>
              </div>
            </div>

            <div className="stat-card">
              <GraduationCap size={25} />
              <div>
                <span>Programs</span>
                <strong>{university.academic_programs?.length}+</strong>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <div className="detail-grid">
            {/* Programs */}
            <section className="detail-card">
              <h2>
                <GraduationCap size={24} />
                Academic Programs
              </h2>

              <div className="program-list">
                {/* <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"> */}
                {(university?.academic_programs ?? []).map((program, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50/50 p-4 transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                      <span className="text-lg">🎓</span>
                    </div>

                    <span className="text-sm font-medium text-gray-800">
                      {program}
                    </span>
                  </div>
                ))}
                {/* </div> */}
              </div>
            </section>

            {/* Contact */}
            <section className="detail-card">
              <h2>Contact Information</h2>

              <div className="contact-item">
                <MapPin size={20} />
                <div>
                  <span>Address</span>
                  <p>{university.address}</p>
                </div>
              </div>

              <div className="contact-item">
                <Phone size={20} />
                <div>
                  <span>Phone</span>
                  <p>{university.phone}</p>
                </div>
              </div>

              <div className="contact-item">
                <Mail size={20} />
                <div>
                  <span>Email</span>
                  <p>{university.email}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default UniversityDetail;
