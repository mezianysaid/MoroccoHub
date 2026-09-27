import React, { useState } from "react";
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
const universities = [
  {
    id: 1,
    name: "Mohammed V University",
    city: "Rabat",
    region: "Rabat-Salé-Kénitra",
    rating: 4.7,
    reviews: 1250,
    founded: 1957,
    students: "40,000+",
    type: "Public University",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d",
    description:
      "Mohammed V University is one of Morocco's leading public universities, offering a wide range of academic programs across multiple disciplines.",
    programs: [
      "Computer Science",
      "Business Administration",
      "Law",
      "Engineering",
      "Medicine",
      "Economics",
    ],
    phone: "+212 5 37 77 18 96",
    email: "contact@um5.ac.ma",
    website: "https://www.um5.ac.ma",
    address: "Rabat, Morocco",
  },

  {
    id: 2,
    name: "Ibn Tofail University",
    city: "Kenitra",
    region: "Rabat-Salé-Kénitra",
    rating: 4.5,
    reviews: 870,
    founded: 1989,
    students: "30,000+",
    type: "Public University",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    description:
      "Ibn Tofail University provides academic programs in science, technology, humanities, economics, and other fields.",
    programs: [
      "Computer Science",
      "Physics",
      "Mathematics",
      "Economics",
      "Languages",
      "Management",
    ],
    phone: "+212 5 37 32 92 00",
    email: "contact@uit.ac.ma",
    website: "https://www.uit.ac.ma",
    address: "Kenitra, Morocco",
  },
];

function UniversityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [favorite, setFavorite] = useState(false);

  // Find university using the ID from the URL
  const university = universities.find(
    (university) => university.id === Number(id),
  );

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

  return (
    <div className="university-detail">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate("/universities")}>
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

            <span>({university.reviews.toLocaleString()} reviews)</span>
          </div>

          <p className="description">{university.description}</p>

          <div className="hero-actions">
            <button
              className={`favorite-button ${favorite ? "favorite-active" : ""}`}
              onClick={() => setFavorite(!favorite)}
            >
              <Heart size={20} fill={favorite ? "currentColor" : "none"} />

              {favorite ? "Saved" : "Add to Favorites"}
            </button>

            <a
              href={university.website}
              target="_blank"
              rel="noreferrer"
              className="website-button"
            >
              <Globe size={20} />
              Visit Website
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
            <strong>{university.programs.length}+</strong>
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
            {university.programs.map((program, index) => (
              <div className="program-item" key={index}>
                {program}
              </div>
            ))}
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
  );
}

export default UniversityDetail;
