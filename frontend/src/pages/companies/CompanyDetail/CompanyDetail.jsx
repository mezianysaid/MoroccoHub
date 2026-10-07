import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Globe,
  Heart,
  MapPin,
  Phone,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@mui/material";
import "./CompanyDetail.css";

// const companies = [
//   {
//     id: 1,
//     name: "Maroc Telecom",
//     industry: "Telecommunications",
//     type: "Public Company",
//     city: "Rabat",
//     rating: 4.4,
//     reviews: 520,
//     founded: 1998,
//     employees: "10,000+",
//     description:
//       "Maroc Telecom is one of Morocco's leading telecommunications companies, providing mobile, internet, and fixed-line services across the country.",
//     website: "https://www.iam.ma",
//     phone: "+212 537 71 71 71",
//     address: "Avenue Annakhil, Hay Riad, Rabat, Morocco",
//     services: [
//       "Mobile Telecommunications",
//       "Internet Services",
//       "Fixed-Line Services",
//       "Business Solutions",
//     ],
//   },
//   {
//     id: 2,
//     name: "OCP Group",
//     industry: "Mining & Chemicals",
//     type: "Public Company",
//     city: "Casablanca",
//     rating: 4.6,
//     reviews: 680,
//     founded: 1920,
//     employees: "20,000+",
//     description:
//       "OCP Group is a major Moroccan company operating in phosphate mining, processing, and fertilizer production.",
//     website: "https://www.ocpgroup.ma",
//     phone: "+212 522 23 00 00",
//     address: "2-4 Rue Al Abtal, Hay Erraha, Casablanca, Morocco",
//     services: [
//       "Phosphate Mining",
//       "Fertilizer Production",
//       "Chemical Processing",
//       "Agricultural Solutions",
//     ],
//   },
//   {
//     id: 3,
//     name: "Attijariwafa Bank",
//     industry: "Banking & Finance",
//     type: "Private Company",
//     city: "Casablanca",
//     rating: 4.3,
//     reviews: 410,
//     founded: 1911,
//     employees: "20,000+",
//     description:
//       "Attijariwafa Bank is a major banking and financial services group serving customers in Morocco and international markets.",
//     website: "https://www.attijariwafabank.com",
//     phone: "+212 522 29 88 88",
//     address: "2 Boulevard Moulay Youssef, Casablanca, Morocco",
//     services: [
//       "Banking Services",
//       "Investment",
//       "Insurance",
//       "Corporate Finance",
//     ],
//   },
//   {
//     id: 4,
//     name: "Capgemini Morocco",
//     industry: "Technology",
//     type: "Private Company",
//     city: "Casablanca",
//     rating: 4.5,
//     reviews: 290,
//     founded: 1967,
//     employees: "5,000+",
//     description:
//       "Capgemini Morocco provides technology, consulting, engineering, and digital transformation services.",
//     website: "https://www.capgemini.com",
//     phone: "+212 522 99 00 00",
//     address: "Casablanca, Morocco",
//     services: [
//       "Technology Consulting",
//       "Digital Transformation",
//       "Cloud Services",
//       "Software Development",
//     ],
//   },
//   {
//     id: 5,
//     name: "Royal Air Maroc",
//     industry: "Transportation",
//     type: "Public Company",
//     city: "Casablanca",
//     rating: 4.2,
//     reviews: 760,
//     founded: 1957,
//     employees: "10,000+",
//     description:
//       "Royal Air Maroc is Morocco's national airline, connecting Morocco with destinations across Africa, Europe, and other regions.",
//     website: "https://www.royalairmaroc.com",
//     phone: "+212 522 48 97 97",
//     address: "Boulevard Mohamed V, Casablanca, Morocco",
//     services: [
//       "Passenger Flights",
//       "Cargo",
//       "International Travel",
//       "Domestic Flights",
//     ],
//   },
// ];

function CompanyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [favorites, setFavorites] = useState([]);
  const [company, setCompany] = useState([]);
  const [loading, setLoading] = useState(false);

  const isFavorite = favorites.includes(company?.id);

  const toggleFavorite = () => {
    if (!company) return;

    setFavorites((current) =>
      current.includes(company.id)
        ? current.filter((item) => item !== company.id)
        : [...current, company.id],
    );
  };

  if (!company) {
    return (
      <div className="company-detail-not-found">
        <Building2 size={56} />

        <h1>Company Not Found</h1>

        <p>
          The company you are looking for does not exist or may have been
          removed.
        </p>

        <Button variant="contained" onClick={() => navigate("/companies")}>
          Back to Companies
        </Button>
      </div>
    );
  }

  useEffect(() => {
    const fetchCompanyById = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3000/api/companies/${id}`,
        );
        const result = await response.json();

        if (result.success) {
          setCompany(result.data);
          setLoading(false);
        }
      } catch (error) {
        return error;
      }
    };
    fetchCompanyById();
  }, [id]);
  return (
    <div className="company-detail-page">
      {/* HERO */}
      <section className="company-detail-hero">
        <div className="company-detail-container">
          {/* Breadcrumb */}
          <div className="company-detail-breadcrumb">
            <button onClick={() => navigate("/")}>Home</button>

            <ChevronRight size={16} />

            <button onClick={() => navigate("/companies")}>Companies</button>

            <ChevronRight size={16} />

            <span>{company.name}</span>
          </div>

          {/* Back button */}
          <button
            className="company-back-button"
            onClick={() => navigate("/companies")}
          >
            <ArrowLeft size={18} />
            Back to Companies
          </button>

          <div className="company-detail-hero-content">
            {/* Company Logo */}
            <div className="company-detail-logo">
              <Building2 size={54} />
            </div>

            <div className="company-detail-heading">
              <div className="company-detail-title-row">
                <div>
                  <span className="company-detail-badge">
                    {company.industry}
                  </span>

                  <h1>{company.name}</h1>

                  <div className="company-detail-location">
                    <MapPin size={18} />
                    <span>{company.city}, Morocco</span>
                  </div>
                </div>

                <button
                  className={`company-detail-favorite ${
                    isFavorite ? "active" : ""
                  }`}
                  onClick={toggleFavorite}
                  aria-label="Toggle favorite"
                >
                  <Heart
                    size={23}
                    fill={isFavorite ? "currentColor" : "none"}
                  />
                </button>
              </div>

              <p className="company-detail-hero-description">
                {company.description}
              </p>

              <div className="company-detail-actions">
                <Button
                  variant="contained"
                  startIcon={<Globe size={18} />}
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<Phone size={18} />}
                  href={`tel:${company.phone}`}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="company-detail-stats">
        <div className="company-detail-container">
          <div className="company-stats-grid">
            <div className="company-stat">
              <div className="company-stat-icon">
                <Star size={21} />
              </div>

              <div>
                <strong>{company.rating}</strong>
                <span>Rating</span>
              </div>
            </div>

            <div className="company-stat">
              <div className="company-stat-icon">
                <Users size={21} />
              </div>

              <div>
                <strong>{company.employees}</strong>
                <span>Employees</span>
              </div>
            </div>

            <div className="company-stat">
              <div className="company-stat-icon">
                <Calendar size={21} />
              </div>

              <div>
                <strong>{company.founded}</strong>
                <span>Founded</span>
              </div>
            </div>

            <div className="company-stat">
              <div className="company-stat-icon">
                <CheckCircle2 size={21} />
              </div>

              <div>
                <strong>{company.reviews}</strong>
                <span>Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="company-detail-main">
        <div className="company-detail-container">
          <div className="company-detail-layout">
            {/* LEFT */}
            <div className="company-detail-content">
              {/* About */}
              <section className="company-detail-section">
                <div className="company-section-heading">
                  <div>
                    <span>ABOUT</span>
                    <h2>About {company.name}</h2>
                  </div>
                </div>

                <p className="company-about-text">{company.description}</p>

                <p className="company-about-text">
                  Explore company information, services, location, contact
                  details, and other useful information about {company.name}.
                </p>
              </section>

              {/* Services */}
              <section className="company-detail-section">
                <div className="company-section-heading">
                  <div>
                    <span>SERVICES</span>
                    <h2>What they offer</h2>
                  </div>
                </div>

                <div className="company-services-grid">
                  {(company?.services ?? []).map((service, index) => (
                    <div className="company-service-card" key={index}>
                      <CheckCircle2 size={20} />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Company Information */}
              <section className="company-detail-section">
                <div className="company-section-heading">
                  <div>
                    <span>INFORMATION</span>
                    <h2>Company Information</h2>
                  </div>
                </div>

                <div className="company-info-grid">
                  <div className="company-info-item">
                    <span>Industry</span>
                    <strong>{company.industry}</strong>
                  </div>

                  <div className="company-info-item">
                    <span>Company Type</span>
                    <strong>{company.type}</strong>
                  </div>

                  <div className="company-info-item">
                    <span>Founded</span>
                    <strong>{company.founded}</strong>
                  </div>

                  <div className="company-info-item">
                    <span>Employees</span>
                    <strong>{company.employees}</strong>
                  </div>
                </div>
              </section>
            </div>

            {/* RIGHT SIDEBAR */}
            <aside className="company-detail-sidebar">
              {/* Contact Card */}
              <div className="company-contact-card">
                <h3>Contact Information</h3>

                <div className="company-contact-item">
                  <div className="company-contact-icon">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <span>Address</span>
                    <p>{company.address}</p>
                  </div>
                </div>

                <div className="company-contact-item">
                  <div className="company-contact-icon">
                    <Phone size={19} />
                  </div>

                  <div>
                    <span>Phone</span>
                    <p>{company.phone}</p>
                  </div>
                </div>

                <div className="company-contact-item">
                  <div className="company-contact-icon">
                    <Globe size={19} />
                  </div>

                  <div>
                    <span>Website</span>
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Official Website
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => navigate("/companies")}
                  startIcon={<ArrowLeft size={18} />}
                >
                  Browse Companies
                </Button>
              </div>

              {/* Rating Card */}
              <div className="company-rating-card">
                <div className="rating-top">
                  <div>
                    <span>Company Rating</span>

                    <div className="rating-number">
                      {company.rating}
                      <Star size={24} fill="currentColor" />
                    </div>
                  </div>
                </div>

                <p>Based on {company.reviews} reviews from MoroccoHub users.</p>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CompanyDetail;
