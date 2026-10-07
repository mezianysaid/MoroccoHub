import { useState } from "react";
import {
  Search,
  MapPin,
  GraduationCap,
  Building2,
  Hotel,
  Hospital,
  ArrowRight,
  Menu,
  X,
  Star,
  ShieldCheck,
  Users,
  Map,
  Plus,
} from "lucide-react";

import "./Home.css";

import { useNavigate } from "react-router-dom";
const categories = [
  {
    title: "Universities",
    description: "Discover universities, faculties and schools across Morocco.",
    icon: GraduationCap,
    count: "150+",
    color: "blue",
    link: "/universities",
  },
  {
    title: "Companies",
    description:
      "Explore Moroccan companies, startups and business organizations.",
    icon: Building2,
    count: "5,000+",
    color: "green",
    link: "/companies",
  },
  {
    title: "Hotels",
    description: "Find hotels, riads and places to stay throughout Morocco.",
    icon: Hotel,
    count: "2,000+",
    color: "orange",
    link: "/hotels",
  },
  {
    title: "Hospitals",
    description: "Find hospitals, clinics and healthcare facilities.",
    icon: Hospital,
    count: "800+",
    color: "red",
    link: "/hospitals",
  },
];

const cities = [
  {
    name: "Casablanca",
    slug: "casablanca",
    description: "Morocco's business capital",
    image:
      "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Marrakech",
    slug: "marrakech",
    description: "The Red City",
    image:
      "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Rabat",
    slug: "rabat",
    description: "The capital city",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Tangier",
    slug: "tangier",
    description: "Gateway to Europe",
    image:
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=800&q=80",
  },
];

const featuredPlaces = [
  {
    name: "Mohammed V University",
    category: "University",
    location: "Rabat, Morocco",
    rating: "4.8",
    reviews: "245",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Four Seasons Casablanca",
    category: "Hotel",
    location: "Casablanca, Morocco",
    rating: "4.9",
    reviews: "389",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Technopark Casablanca",
    category: "Company",
    location: "Casablanca, Morocco",
    rating: "4.7",
    reviews: "156",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
  },
];

function Home() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <div className="home-page">
      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">🇲🇦 Discover Morocco</div>

            <h1>
              Discover the Best of
              <span> Morocco</span>
            </h1>

            <p>
              Find universities, companies, hotels and hospitals across Morocco
              — all in one place.
            </p>

            <div className="search-box">
              <div className="search-field">
                <Search size={21} />
                <input type="text" placeholder="What are you looking for?" />
              </div>

              <div className="search-divider"></div>

              <div className="search-field location-field">
                <MapPin size={21} />
                <select defaultValue="">
                  <option value="" disabled>
                    Select city
                  </option>
                  <option>Casablanca</option>
                  <option>Rabat</option>
                  <option>Marrakech</option>
                  <option>Tangier</option>
                  <option>Agadir</option>
                  <option>Fes</option>
                </select>
              </div>

              <button className="search-button">
                <Search size={20} />
                Search
              </button>
            </div>

            <div className="popular-searches">
              <span>Popular:</span>
              <a href="/universities">Universities</a>
              <a href="/hotels">Hotels</a>
              <a href="/companies">Companies</a>
              <a href="hospitals">Hospitals</a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="section categories-section" id="categories">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">EXPLORE</span>
              <p>Everything you need to discover Morocco.</p>
            </div>

            <a href="#categories" className="view-all">
              View all
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="category-grid">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  className={`category-card category-${category.color}`}
                  key={category.title}
                  onClick={() => navigateTo(category.link)}
                >
                  <div className="category-icon">
                    <Icon size={28} />
                  </div>

                  <div className="category-content">
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>

                    <div className="category-footer">
                      <span>{category.count} listings</span>
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CITIES ================= */}
      <section className="section cities-section" id="cities">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">LOCATIONS</span>
              <h2>Popular Cities</h2>
              <p>Explore the most popular destinations in Morocco.</p>
            </div>

            <a href="#cities" className="view-all">
              Explore cities
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="cities-grid">
            {cities.map((city) => (
              <div
                className="city-card"
                key={city.name}
                onClick={() => navigate(`/cities/${city.slug}`)}
              >
                <img src={city.image} alt={city.name} />

                <div className="city-overlay"></div>

                <div className="city-content">
                  <h3>{city.name}</h3>
                  <p>{city.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED ================= */}
      <section className="section featured-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">DISCOVER</span>
              <h2>Featured Places</h2>
              <p>Popular places worth discovering.</p>
            </div>

            <a href="#featured" className="view-all">
              View all
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="featured-grid">
            {featuredPlaces.map((place) => (
              <div className="featured-card" key={place.name}>
                <div className="featured-image">
                  <img src={place.image} alt={place.name} />

                  <span className="featured-category">{place.category}</span>
                </div>

                <div className="featured-content">
                  <h3>{place.name}</h3>

                  <div className="featured-location">
                    <MapPin size={16} />
                    {place.location}
                  </div>

                  <div className="rating">
                    <Star size={17} fill="currentColor" />
                    <strong>{place.rating}</strong>
                    <span>({place.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat">
            <strong>8,000+</strong>
            <span>Listings</span>
          </div>

          <div className="stat">
            <strong>50+</strong>
            <span>Cities</span>
          </div>

          <div className="stat">
            <strong>10,000+</strong>
            <span>Reviews</span>
          </div>

          <div className="stat">
            <strong>100%</strong>
            <span>Morocco</span>
          </div>
        </div>
      </section>

      {/* ================= WHY MOROCCOHUB ================= */}
      <section className="section why-section" id="about">
        <div className="container">
          <div className="why-grid">
            <div className="why-content">
              <span className="section-label">WHY MOROCCOHUB</span>

              <h2>
                Your guide to
                <span> Morocco</span>
              </h2>

              <p>
                MoroccoHub makes it easier to discover and explore universities,
                businesses, hotels and healthcare facilities across Morocco.
              </p>

              <div className="benefits">
                <div className="benefit">
                  <div className="benefit-icon">
                    <ShieldCheck size={22} />
                  </div>

                  <div>
                    <h3>Trusted Information</h3>
                    <p>
                      Discover useful information about places across Morocco.
                    </p>
                  </div>
                </div>

                <div className="benefit">
                  <div className="benefit-icon">
                    <Users size={22} />
                  </div>

                  <div>
                    <h3>Community Driven</h3>
                    <p>Help others discover great places and services.</p>
                  </div>
                </div>

                <div className="benefit">
                  <div className="benefit-icon">
                    <Map size={22} />
                  </div>

                  <div>
                    <h3>Explore Everywhere</h3>
                    <p>Discover places in cities throughout Morocco.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-image">
              <img
                src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=85"
                alt="Morocco"
              />

              <div className="why-card">
                <div className="why-card-icon">🇲🇦</div>

                <div>
                  <strong>Made for Morocco</strong>
                  <span>Discover your country</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div>
              <span className="section-label">GROW WITH US</span>

              <h2>Have a business or place to add?</h2>

              <p>
                Help people discover your university, company, hotel or
                healthcare facility.
              </p>
            </div>

            <button className="cta-button">
              Add Your Listing
              <ArrowRight size={19} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
