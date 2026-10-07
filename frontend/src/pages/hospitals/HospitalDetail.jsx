import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Activity,
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock3,
  Cross,
  Heart,
  Hospital,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Stethoscope,
  Users,
  X,
} from "lucide-react";

import { Button } from "@mui/material";

import "./HospitalDetail.css";

const hospitals = [
  {
    id: 1,
    name: "International University Hospital",
    city: "Rabat",
    region: "Rabat-Salé-Kénitra",
    type: "Private",
    specialty: "Multi-Specialty",
    rating: 4.8,
    reviews: 1240,
    founded: 2017,
    beds: 250,
    doctors: 180,
    emergency: true,
    open24: true,
    phone: "+212 5 37 00 00 00",
    email: "contact@hospital.ma",
    website: "https://example.com",
    address: "Rabat, Morocco",
    description:
      "A modern multi-specialty hospital offering advanced medical care, surgery, diagnostics, emergency services, and comprehensive patient support.",
    about:
      "International University Hospital provides a broad range of healthcare services with modern facilities and a multidisciplinary medical team. The hospital focuses on patient-centered care, advanced diagnostics, specialized treatments, and medical services for patients from Rabat and surrounding regions.",
    checkIn: "08:00 AM",
    emergencyHours: "24 hours",
    amenities: [
      "Emergency Department",
      "Pharmacy",
      "Diagnostic Imaging",
      "Laboratory",
      "Surgical Center",
      "Intensive Care Unit",
      "Outpatient Clinics",
      "Parking",
    ],
    specialties: [
      "Cardiology",
      "Neurology",
      "Orthopedics",
      "General Surgery",
      "Internal Medicine",
      "Pediatrics",
    ],
  },

  {
    id: 2,
    name: "Cheikh Zaid International University Hospital",
    city: "Rabat",
    region: "Rabat-Salé-Kénitra",
    type: "Private",
    specialty: "Multi-Specialty",
    rating: 4.7,
    reviews: 980,
    founded: 1998,
    beds: 350,
    doctors: 220,
    emergency: true,
    open24: true,
    phone: "+212 5 37 68 68 68",
    email: "contact@hospital.ma",
    website: "https://example.com",
    address: "Rabat, Morocco",
    description:
      "A major healthcare institution providing specialized medical services, surgery, diagnostics, and patient care.",
    about:
      "Cheikh Zaid International University Hospital provides multidisciplinary healthcare services and specialized medical care. Its facilities support diagnosis, treatment, surgery, emergency services, and specialist consultations.",
    checkIn: "08:00 AM",
    emergencyHours: "24 hours",
    amenities: [
      "Emergency Department",
      "Pharmacy",
      "Laboratory",
      "Radiology",
      "Surgical Center",
      "Intensive Care",
      "Parking",
    ],
    specialties: [
      "Cardiology",
      "Oncology",
      "Neurology",
      "Surgery",
      "Pediatrics",
    ],
  },

  {
    id: 3,
    name: "Ibn Sina University Hospital",
    city: "Rabat",
    region: "Rabat-Salé-Kénitra",
    type: "Public",
    specialty: "University Hospital",
    rating: 4.3,
    reviews: 1560,
    founded: 1919,
    beds: 900,
    doctors: 450,
    emergency: true,
    open24: true,
    phone: "+212 5 37 67 64 64",
    email: "contact@hospital.ma",
    website: "https://example.com",
    address: "Rabat, Morocco",
    description:
      "A major public university hospital providing a wide range of medical specialties and teaching services.",
    about:
      "Ibn Sina University Hospital is a large healthcare institution providing medical care across numerous specialties. It also supports medical education, specialist training, diagnostics, surgery, and emergency care.",
    checkIn: "08:00 AM",
    emergencyHours: "24 hours",
    amenities: [
      "Emergency Department",
      "Laboratory",
      "Radiology",
      "Surgery",
      "Intensive Care",
      "Outpatient Clinics",
      "Pharmacy",
    ],
    specialties: [
      "Cardiology",
      "Neurology",
      "Orthopedics",
      "General Surgery",
      "Pediatrics",
      "Internal Medicine",
    ],
  },

  {
    id: 4,
    name: "International Hospital of Casablanca",
    city: "Casablanca",
    region: "Casablanca-Settat",
    type: "Private",
    specialty: "Multi-Specialty",
    rating: 4.6,
    reviews: 870,
    founded: 2014,
    beds: 220,
    doctors: 160,
    emergency: true,
    open24: true,
    phone: "+212 5 22 00 00 00",
    email: "contact@hospital.ma",
    website: "https://example.com",
    address: "Casablanca, Morocco",
    description:
      "A modern private hospital focused on specialized treatments, diagnostics, surgery, and personalized patient care.",
    about:
      "The International Hospital of Casablanca provides modern medical facilities and multidisciplinary healthcare services, including specialist consultations, diagnostics, surgery, and emergency care.",
    checkIn: "08:00 AM",
    emergencyHours: "24 hours",
    amenities: [
      "Emergency Department",
      "Pharmacy",
      "Laboratory",
      "Radiology",
      "Operating Rooms",
      "ICU",
      "Parking",
    ],
    specialties: [
      "Cardiology",
      "Orthopedics",
      "Neurology",
      "Surgery",
      "Pediatrics",
    ],
  },

  {
    id: 5,
    name: "Cheikh Khalifa International University Hospital",
    city: "Casablanca",
    region: "Casablanca-Settat",
    type: "Private",
    specialty: "University Hospital",
    rating: 4.8,
    reviews: 1120,
    founded: 2014,
    beds: 250,
    doctors: 240,
    emergency: true,
    open24: true,
    phone: "+212 5 29 00 00 00",
    email: "contact@hospital.ma",
    website: "https://example.com",
    address: "Casablanca, Morocco",
    description:
      "A leading healthcare facility offering advanced medical specialties, modern infrastructure, and comprehensive care.",
    about:
      "Cheikh Khalifa International University Hospital offers multidisciplinary healthcare services supported by modern medical infrastructure and specialist teams.",
    checkIn: "08:00 AM",
    emergencyHours: "24 hours",
    amenities: [
      "Emergency Department",
      "Diagnostic Imaging",
      "Laboratory",
      "Surgery",
      "ICU",
      "Pharmacy",
      "Parking",
    ],
    specialties: [
      "Cardiology",
      "Oncology",
      "Neurology",
      "Orthopedics",
      "Surgery",
    ],
  },

  {
    id: 6,
    name: "Mohammed VI University Hospital",
    city: "Marrakech",
    region: "Marrakech-Safi",
    type: "Public",
    specialty: "University Hospital",
    rating: 4.4,
    reviews: 760,
    founded: 2001,
    beds: 600,
    doctors: 320,
    emergency: true,
    open24: true,
    phone: "+212 5 24 30 00 00",
    email: "contact@hospital.ma",
    website: "https://example.com",
    address: "Marrakech, Morocco",
    description:
      "A large university hospital serving patients across Marrakech and the surrounding region with multiple specialties.",
    about:
      "Mohammed VI University Hospital provides healthcare services across multiple medical specialties and supports specialist training, diagnosis, treatment, and emergency care.",
    checkIn: "08:00 AM",
    emergencyHours: "24 hours",
    amenities: [
      "Emergency Department",
      "Laboratory",
      "Radiology",
      "Surgery",
      "ICU",
      "Outpatient Clinics",
    ],
    specialties: [
      "Cardiology",
      "Neurology",
      "Orthopedics",
      "Surgery",
      "Pediatrics",
    ],
  },

  {
    id: 7,
    name: "Agadir Medical Center",
    city: "Agadir",
    region: "Souss-Massa",
    type: "Private",
    specialty: "Multi-Specialty",
    rating: 4.5,
    reviews: 540,
    founded: 2010,
    beds: 140,
    doctors: 95,
    emergency: true,
    open24: false,
    phone: "+212 5 28 00 00 00",
    email: "contact@hospital.ma",
    website: "https://example.com",
    address: "Agadir, Morocco",
    description:
      "A modern healthcare center providing specialist consultations, diagnostics, surgery, and patient services.",
    about:
      "Agadir Medical Center provides specialist consultations, diagnostic services, treatment, and healthcare support for patients in Agadir and surrounding areas.",
    checkIn: "08:00 AM",
    emergencyHours: "Based on schedule",
    amenities: [
      "Consultation Rooms",
      "Laboratory",
      "Radiology",
      "Pharmacy",
      "Surgery",
      "Parking",
    ],
    specialties: ["Cardiology", "Orthopedics", "Internal Medicine", "Surgery"],
  },

  {
    id: 8,
    name: "Tangier University Hospital",
    city: "Tangier",
    region: "Tanger-Tétouan-Al Hoceïma",
    type: "Public",
    specialty: "University Hospital",
    rating: 4.4,
    reviews: 690,
    founded: 2019,
    beds: 500,
    doctors: 280,
    emergency: true,
    open24: true,
    phone: "+212 5 39 00 00 00",
    email: "contact@hospital.ma",
    website: "https://example.com",
    address: "Tangier, Morocco",
    description:
      "A large modern hospital providing specialized healthcare, emergency services, surgery, and medical training.",
    about:
      "Tangier University Hospital provides multidisciplinary healthcare services, specialist treatment, emergency care, diagnostics, and medical training.",
    checkIn: "08:00 AM",
    emergencyHours: "24 hours",
    amenities: [
      "Emergency Department",
      "Laboratory",
      "Radiology",
      "Surgical Center",
      "ICU",
      "Pharmacy",
      "Parking",
    ],
    specialties: [
      "Cardiology",
      "Neurology",
      "Orthopedics",
      "General Surgery",
      "Pediatrics",
    ],
  },
];

const HospitalDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [favorite, setFavorite] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const hospital = hospitals.find((item) => item.id === Number(id));

  if (!hospital) {
    return (
      <div className="hospital-detail-not-found">
        <div className="hospital-detail-not-found-icon">
          <Hospital size={42} />
        </div>

        <h2>Hospital Not Found</h2>

        <p>
          The hospital you're looking for doesn't exist or may have been
          removed.
        </p>

        <Button variant="contained" onClick={() => navigate("/hospitals")}>
          Back to Hospitals
        </Button>
      </div>
    );
  }

  return (
    <div className="hospital-detail-page">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="hospital-detail-hero">
        <div className="hospital-detail-hero-pattern">
          <Cross size={320} />
        </div>

        <div className="hospital-detail-container">
          <div className="hospital-detail-breadcrumb">
            <button onClick={() => navigate("/")}>Home</button>

            <span>/</span>

            <button onClick={() => navigate("/hospitals")}>Hospitals</button>

            <span>/</span>

            <span>{hospital.name}</span>
          </div>

          <button
            className="hospital-back-button"
            onClick={() => navigate("/hospitals")}
          >
            <ArrowLeft size={17} />
            Back to Hospitals
          </button>

          <div className="hospital-detail-hero-grid">
            {/* HERO IMAGE */}
            <div className="hospital-detail-image">
              <div className="hospital-detail-image-pattern">
                <Cross size={170} />
              </div>

              <div className="hospital-detail-image-icon">
                <Hospital size={58} />
              </div>

              <div className="hospital-detail-image-label">
                <ShieldCheck size={15} />
                Verified Healthcare Facility
              </div>
            </div>

            {/* HERO CONTENT */}
            <div className="hospital-detail-hero-info">
              <div className="hospital-detail-top-row">
                <div className="hospital-detail-badges">
                  <span className="hospital-detail-type">{hospital.type}</span>

                  {hospital.emergency && (
                    <span className="hospital-detail-emergency">
                      <Activity size={13} />
                      Emergency
                    </span>
                  )}
                </div>

                <button
                  className={`hospital-detail-favorite ${
                    favorite ? "active" : ""
                  }`}
                  onClick={() => setFavorite(!favorite)}
                >
                  <Heart size={20} fill={favorite ? "currentColor" : "none"} />

                  <span>{favorite ? "Saved" : "Save"}</span>
                </button>
              </div>

              <h1>{hospital.name}</h1>

              <div className="hospital-detail-location">
                <MapPin size={18} />

                <span>{hospital.address}</span>

                <span className="hospital-location-separator">•</span>

                <span>{hospital.region}</span>
              </div>

              <div className="hospital-detail-rating-row">
                <div className="hospital-detail-rating">
                  <Star size={18} fill="currentColor" />

                  <strong>{hospital.rating}</strong>
                </div>

                <span>{hospital.reviews.toLocaleString()} reviews</span>

                <span className="hospital-rating-dot">•</span>

                <span>{hospital.specialty}</span>
              </div>

              <p className="hospital-detail-description">
                {hospital.description}
              </p>

              <div className="hospital-detail-actions">
                <Button
                  variant="contained"
                  onClick={() => setShowContact(true)}
                  startIcon={<Phone size={18} />}
                >
                  Contact Hospital
                </Button>

                <a
                  href={hospital.website}
                  target="_blank"
                  rel="noreferrer"
                  className="hospital-detail-website"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK STATS
      ====================================================== */}

      <section className="hospital-detail-stats-section">
        <div className="hospital-detail-container">
          <div className="hospital-detail-stats">
            <div className="hospital-detail-stat">
              <div className="hospital-detail-stat-icon">
                <Star size={20} />
              </div>

              <div>
                <strong>{hospital.rating}</strong>
                <span>Rating</span>
              </div>
            </div>

            <div className="hospital-detail-stat">
              <div className="hospital-detail-stat-icon">
                <Hospital size={20} />
              </div>

              <div>
                <strong>{hospital.beds}</strong>
                <span>Beds</span>
              </div>
            </div>

            <div className="hospital-detail-stat">
              <div className="hospital-detail-stat-icon">
                <Users size={20} />
              </div>

              <div>
                <strong>{hospital.doctors}</strong>
                <span>Doctors</span>
              </div>
            </div>

            <div className="hospital-detail-stat">
              <div className="hospital-detail-stat-icon">
                <Calendar size={20} />
              </div>

              <div>
                <strong>{hospital.founded}</strong>
                <span>Founded</span>
              </div>
            </div>

            <div className="hospital-detail-stat">
              <div className="hospital-detail-stat-icon">
                <Clock3 size={20} />
              </div>

              <div>
                <strong>{hospital.open24 ? "24/7" : "Scheduled"}</strong>
                <span>Availability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main className="hospital-detail-container hospital-detail-main">
        <div className="hospital-detail-content">
          {/* ABOUT */}
          <section className="hospital-detail-section">
            <div className="hospital-detail-section-heading">
              <span>ABOUT</span>

              <h2>About the Hospital</h2>
            </div>

            <p className="hospital-detail-about">{hospital.about}</p>
          </section>

          {/* SPECIALTIES */}
          <section className="hospital-detail-section">
            <div className="hospital-detail-section-heading">
              <span>MEDICAL CARE</span>

              <h2>Medical Specialties</h2>
            </div>

            <div className="hospital-specialties">
              {hospital.specialties.map((item) => (
                <div className="hospital-specialty" key={item}>
                  <div>
                    <Stethoscope size={17} />
                  </div>

                  <span>{item}</span>

                  <CheckCircle2
                    size={16}
                    className="hospital-specialty-check"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* AMENITIES */}
          <section className="hospital-detail-section">
            <div className="hospital-detail-section-heading">
              <span>FACILITIES</span>

              <h2>Hospital Facilities</h2>
            </div>

            <div className="hospital-amenities">
              {hospital.amenities.map((item) => (
                <div className="hospital-amenity" key={item}>
                  <CheckCircle2 size={17} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* HOURS */}
          <section className="hospital-detail-section">
            <div className="hospital-detail-section-heading">
              <span>INFORMATION</span>

              <h2>Opening & Emergency Hours</h2>
            </div>

            <div className="hospital-hours-grid">
              <div className="hospital-hours-card">
                <div className="hospital-hours-icon">
                  <Clock3 size={21} />
                </div>

                <div>
                  <span>General Services</span>
                  <strong>
                    {hospital.open24
                      ? "Open 24 hours"
                      : "See hospital schedule"}
                  </strong>
                </div>
              </div>

              <div className="hospital-hours-card">
                <div className="hospital-hours-icon emergency">
                  <Activity size={21} />
                </div>

                <div>
                  <span>Emergency Department</span>
                  <strong>{hospital.emergencyHours}</strong>
                </div>
              </div>

              <div className="hospital-hours-card">
                <div className="hospital-hours-icon">
                  <Calendar size={21} />
                </div>

                <div>
                  <span>Check-in / Registration</span>
                  <strong>{hospital.checkIn}</strong>
                </div>
              </div>
            </div>
          </section>

          {/* REVIEWS */}
          <section className="hospital-detail-section">
            <div className="hospital-detail-section-heading">
              <span>PATIENT FEEDBACK</span>

              <h2>Hospital Reviews</h2>
            </div>

            <div className="hospital-review-summary">
              <div className="hospital-review-score">
                <strong>{hospital.rating}</strong>

                <div className="hospital-review-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={17}
                      fill={
                        star <= Math.round(hospital.rating)
                          ? "currentColor"
                          : "none"
                      }
                    />
                  ))}
                </div>

                <span>
                  Based on {hospital.reviews.toLocaleString()} reviews
                </span>
              </div>

              <div className="hospital-review-message">
                <ShieldCheck size={24} />

                <div>
                  <strong>Community reviews</strong>
                  <p>
                    Ratings and reviews help visitors discover healthcare
                    facilities on MoroccoHub.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* =====================================================
            SIDEBAR
        ====================================================== */}

        <aside className="hospital-detail-sidebar">
          {/* CONTACT CARD */}
          <div className="hospital-contact-card">
            <div className="hospital-contact-card-header">
              <span>CONTACT</span>

              <h3>Get in Touch</h3>
            </div>

            <div className="hospital-contact-item">
              <div>
                <Phone size={18} />
              </div>

              <section>
                <span>Phone</span>
                <a href={`tel:${hospital.phone}`}>{hospital.phone}</a>
              </section>
            </div>

            <div className="hospital-contact-item">
              <div>
                <Mail size={18} />
              </div>

              <section>
                <span>Email</span>
                <a href={`mailto:${hospital.email}`}>{hospital.email}</a>
              </section>
            </div>

            <div className="hospital-contact-item">
              <div>
                <MapPin size={18} />
              </div>

              <section>
                <span>Location</span>
                <strong>{hospital.address}</strong>
              </section>
            </div>

            <Button
              fullWidth
              variant="contained"
              onClick={() => setShowContact(true)}
              startIcon={<Phone size={17} />}
            >
              Contact Hospital
            </Button>
          </div>

          {/* EMERGENCY CARD */}
          <div className="hospital-emergency-card">
            <div className="hospital-emergency-icon">
              <Activity size={22} />
            </div>

            <div>
              <strong>Emergency Services</strong>

              <p>
                {hospital.emergency
                  ? "Emergency services are available at this hospital."
                  : "Please contact the hospital for emergency service information."}
              </p>
            </div>
          </div>

          {/* LOCATION CARD */}
          <div className="hospital-location-card">
            <div className="hospital-location-card-header">
              <MapPin size={19} />

              <h3>Hospital Location</h3>
            </div>

            <div className="hospital-map-placeholder">
              <MapPin size={32} />

              <span>{hospital.city}</span>

              <small>Morocco</small>
            </div>

            <div className="hospital-address">{hospital.address}</div>
          </div>
        </aside>
      </main>

      {/* =====================================================
          CONTACT MODAL
      ====================================================== */}

      {showContact && (
        <div
          className="hospital-modal-overlay"
          onClick={() => setShowContact(false)}
        >
          <div
            className="hospital-contact-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="hospital-modal-close"
              onClick={() => setShowContact(false)}
            >
              <X size={20} />
            </button>

            <div className="hospital-modal-icon">
              <Phone size={24} />
            </div>

            <h2>Contact {hospital.name}</h2>

            <p>Choose a contact method below.</p>

            <div className="hospital-modal-actions">
              <a
                href={`tel:${hospital.phone}`}
                className="hospital-modal-action"
              >
                <Phone size={19} />

                <div>
                  <span>Call Hospital</span>
                  <strong>{hospital.phone}</strong>
                </div>
              </a>

              <a
                href={`mailto:${hospital.email}`}
                className="hospital-modal-action"
              >
                <Mail size={19} />

                <div>
                  <span>Send Email</span>
                  <strong>{hospital.email}</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HospitalDetail;
