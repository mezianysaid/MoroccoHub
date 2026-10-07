import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  GraduationCap,
  Heart,
  Hospital,
  Hotel,
  MapPin,
  Navigation,
  Star,
  Users,
  ChevronRight,
} from "lucide-react";
import { Button } from "@mui/material";
import "./CityDetail.css";

const cities = {
  rabat: {
    name: "Rabat",
    region: "Rabat-Salé-Kénitra",
    country: "Morocco",
    population: "580,000+",
    area: "118 km²",
    founded: "12th century",

    description:
      "The capital of Morocco, Rabat is a city of history, culture and modernity. With its beautiful coastline, royal landmarks and vibrant atmosphere, it offers a unique blend of tradition and progress.",

    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=85",

    coordinates: {
      lat: "34.0209",
      lng: "-6.8416",
    },

    map: {
      lat: 34.0209,
      lng: -6.8416,
      bbox: "-6.95,33.95,-6.73,34.10",
    },

    highlights: [
      {
        title: "Hassan Tower",
        description: "An iconic historical monument and symbol of Rabat.",
        icon: "tower",
      },
      {
        title: "Kasbah of the Udayas",
        description: "A charming fortress with stunning ocean views.",
        icon: "castle",
      },
      {
        title: "Royal Palace",
        description: "A masterpiece of Moroccan architecture.",
        icon: "palace",
      },
      {
        title: "Chellah Necropolis",
        description: "Ancient ruins in a peaceful garden setting.",
        icon: "garden",
      },
    ],

    stats: {
      universities: 12,
      companies: 48,
      hotels: 25,
      hospitals: 18,
    },
  },

  casablanca: {
    name: "Casablanca",
    region: "Casablanca-Settat",
    country: "Morocco",
    population: "3.4M+",
    area: "220 km²",
    founded: "8th century",

    description:
      "Morocco's largest city and economic center, Casablanca combines modern business districts, coastal neighborhoods, historic architecture and a lively urban atmosphere.",

    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=2000&q=85",

    coordinates: {
      lat: "33.5731",
      lng: "-7.5898",
    },

    map: {
      lat: 33.5731,
      lng: -7.5898,
      bbox: "-7.75,33.48,-7.43,33.68",
    },

    highlights: [
      {
        title: "Hassan II Mosque",
        description: "One of Morocco's most recognizable landmarks.",
        icon: "mosque",
      },
      {
        title: "Corniche",
        description: "A popular coastal area with restaurants and ocean views.",
        icon: "coast",
      },
      {
        title: "Old Medina",
        description: "A historic quarter filled with traditional markets.",
        icon: "castle",
      },
      {
        title: "Twin Center",
        description: "A major landmark in Casablanca's modern skyline.",
        icon: "building",
      },
    ],

    stats: {
      universities: 30,
      companies: 120,
      hotels: 65,
      hospitals: 40,
    },
  },

  marrakech: {
    name: "Marrakech",
    region: "Marrakech-Safi",
    country: "Morocco",
    population: "1M+",
    area: "230 km²",
    founded: "1070",

    description:
      "Known as the Red City, Marrakech is famous for its historic medina, colorful souks, gardens, palaces and vibrant cultural life.",

    image:
      "https://images.unsplash.com/photo-1597212720386-7f7a0e6d2d6b?auto=format&fit=crop&w=2000&q=85",

    coordinates: {
      lat: "31.6295",
      lng: "-7.9811",
    },

    map: {
      lat: 31.6295,
      lng: -7.9811,
      bbox: "-8.10,31.55,-7.85,31.72",
    },

    highlights: [
      {
        title: "Jemaa el-Fnaa",
        description: "The famous central square in the heart of the Medina.",
        icon: "square",
      },
      {
        title: "Bahia Palace",
        description: "A historic palace showcasing Moroccan craftsmanship.",
        icon: "palace",
      },
      {
        title: "Majorelle Garden",
        description: "A colorful garden and popular Marrakech attraction.",
        icon: "garden",
      },
      {
        title: "Koutoubia Mosque",
        description: "An iconic landmark dominating the Marrakech skyline.",
        icon: "mosque",
      },
    ],

    stats: {
      universities: 18,
      companies: 75,
      hotels: 120,
      hospitals: 30,
    },
  },

  fes: {
    name: "Fes",
    region: "Fès-Meknès",
    country: "Morocco",
    population: "1.1M+",
    area: "320 km²",
    founded: "789",

    description:
      "Fes is one of Morocco's most historic cities, renowned for its ancient Medina, traditional craftsmanship, universities and rich cultural heritage.",

    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=85",

    coordinates: {
      lat: "34.0331",
      lng: "-5.0003",
    },

    map: {
      lat: 34.0331,
      lng: -5.0003,
      bbox: "-5.12,33.96,-4.88,34.10",
    },

    highlights: [
      {
        title: "Fes el Bali",
        description: "One of the world's largest pedestrian medinas.",
        icon: "castle",
      },
      {
        title: "Al Quaraouiyine",
        description: "A historic center of learning and scholarship.",
        icon: "university",
      },
      {
        title: "Bou Inania Madrasa",
        description: "A remarkable example of Marinid architecture.",
        icon: "palace",
      },
      {
        title: "Chouara Tannery",
        description: "A famous traditional leather-working site.",
        icon: "building",
      },
    ],

    stats: {
      universities: 16,
      companies: 55,
      hotels: 70,
      hospitals: 25,
    },
  },

  tangier: {
    name: "Tangier",
    region: "Tangier-Tétouan-Al Hoceïma",
    country: "Morocco",
    population: "1.2M+",
    area: "124 km²",
    founded: "5th century BC",

    description:
      "Located at the meeting point of the Atlantic Ocean and Mediterranean Sea, Tangier is an international city with a rich history and strategic location.",

    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=2000&q=85",

    coordinates: {
      lat: "35.7595",
      lng: "-5.8340",
    },

    map: {
      lat: 35.7595,
      lng: -5.834,
      bbox: "-5.95,35.68,-5.70,35.83",
    },

    highlights: [
      {
        title: "Kasbah",
        description: "A historic district overlooking the Strait of Gibraltar.",
        icon: "castle",
      },
      {
        title: "Cap Spartel",
        description: "A dramatic coastal landmark near Tangier.",
        icon: "coast",
      },
      {
        title: "Hercules Caves",
        description: "A famous natural attraction along the coastline.",
        icon: "cave",
      },
      {
        title: "Grand Socco",
        description: "A lively square connecting the old and new city.",
        icon: "square",
      },
    ],

    stats: {
      universities: 14,
      companies: 65,
      hotels: 60,
      hospitals: 22,
    },
  },

  agadir: {
    name: "Agadir",
    region: "Souss-Massa",
    country: "Morocco",
    population: "500,000+",
    area: "110 km²",
    founded: "1505",

    description:
      "Agadir is a modern coastal city known for its long sandy beaches, pleasant climate, tourism industry and relaxed atmosphere.",

    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=2000&q=85",

    coordinates: {
      lat: "30.4278",
      lng: "-9.5981",
    },

    map: {
      lat: 30.4278,
      lng: -9.5981,
      bbox: "-9.72,30.34,-9.48,30.51",
    },

    highlights: [
      {
        title: "Agadir Beach",
        description: "A wide sandy beach stretching along the Atlantic coast.",
        icon: "coast",
      },
      {
        title: "Agadir Oufella",
        description: "Historic hilltop ruins overlooking the city.",
        icon: "castle",
      },
      {
        title: "Marina",
        description: "A modern waterfront area with restaurants and shops.",
        icon: "building",
      },
      {
        title: "Souk El Had",
        description: "One of the largest traditional markets in the region.",
        icon: "square",
      },
    ],

    stats: {
      universities: 10,
      companies: 42,
      hotels: 85,
      hospitals: 20,
    },
  },

  meknes: {
    name: "Meknes",
    region: "Fès-Meknès",
    country: "Morocco",
    population: "630,000+",
    area: "370 km²",
    founded: "11th century",

    description:
      "Meknes is a historic imperial city known for its monumental gates, royal heritage, historic medina and peaceful atmosphere.",

    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=85",

    coordinates: {
      lat: "33.8935",
      lng: "-5.5473",
    },

    map: {
      lat: 33.8935,
      lng: -5.5473,
      bbox: "-5.67,33.82,-5.43,33.96",
    },

    highlights: [
      {
        title: "Bab Mansour",
        description: "One of Morocco's most impressive historic gates.",
        icon: "castle",
      },
      {
        title: "Royal Stables",
        description: "A major historical complex from the imperial era.",
        icon: "palace",
      },
      {
        title: "Mausoleum of Moulay Ismail",
        description: "An important historical and architectural site.",
        icon: "mosque",
      },
      {
        title: "Old Medina",
        description: "A UNESCO-listed historic quarter.",
        icon: "building",
      },
    ],

    stats: {
      universities: 8,
      companies: 30,
      hotels: 45,
      hospitals: 15,
    },
  },
};

const getHighlightIcon = (type) => {
  const props = { size: 20, strokeWidth: 2 };

  switch (type) {
    case "university":
      return <GraduationCap {...props} />;
    case "building":
      return <Building2 {...props} />;
    case "mosque":
    case "palace":
    case "tower":
      return <Building2 {...props} />;
    case "castle":
      return <Navigation {...props} />;
    case "garden":
      return <Star {...props} />;
    default:
      return <MapPin {...props} />;
  }
};

const CityDetail = () => {
  const { city } = useParams();
  const navigate = useNavigate();

  const [favorite, setFavorite] = useState(false);

  const cityData = cities[city?.toLowerCase()];

  if (!cityData) {
    return (
      <div className="city-not-found">
        <MapPin size={50} />

        <h1>City Not Found</h1>

        <p>We couldn't find the city you're looking for.</p>

        <Button variant="contained" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="city-page">
      {/* ================= HERO ================= */}

      <section
        className="city-hero"
        style={{
          backgroundImage: `url(${cityData.image})`,
        }}
      >
        <div className="city-hero-overlay" />

        <div className="city-container city-hero-content">
          <div className="city-breadcrumb">
            <button onClick={() => navigate("/")}>Home</button>

            <ChevronRight size={15} />

            <button onClick={() => navigate("/cities")}>Cities</button>

            <ChevronRight size={15} />

            <span>{cityData.name}</span>
          </div>

          <div className="city-hero-layout">
            <div className="city-hero-main">
              <span className="city-region-badge">{cityData.region}</span>

              <h1>{cityData.name}</h1>

              <p className="city-hero-description">{cityData.description}</p>

              <div className="city-hero-actions">
                <button
                  className={`city-favorite-button ${favorite ? "active" : ""}`}
                  onClick={() => setFavorite(!favorite)}
                >
                  <Heart size={19} fill={favorite ? "currentColor" : "none"} />

                  {favorite ? "Saved" : "Add to Favorites"}
                </button>

                <button
                  className="city-outline-button"
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${cityData.coordinates.lat},${cityData.coordinates.lng}`,
                      "_blank",
                    )
                  }
                >
                  <MapPin size={18} />
                  Open in Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className="city-stats-wrapper">
        <div className="city-container">
          <div className="city-stats">
            <div className="city-stat">
              <div className="city-stat-icon">
                <Users size={21} />
              </div>

              <div>
                <span>Population</span>
                <strong>{cityData.population}</strong>
              </div>
            </div>

            <div className="city-stat">
              <div className="city-stat-icon">
                <MapPin size={21} />
              </div>

              <div>
                <span>Area</span>
                <strong>{cityData.area}</strong>
              </div>
            </div>

            <div className="city-stat">
              <div className="city-stat-icon">
                <Star size={21} />
              </div>

              <div>
                <span>Founded</span>
                <strong>{cityData.founded}</strong>
              </div>
            </div>

            <div className="city-stat">
              <div className="city-stat-icon">
                <Navigation size={21} />
              </div>

              <div>
                <span>Region</span>
                <strong>{cityData.region}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN ================= */}

      <main className="city-main">
        <div className="city-container">
          {/* ================= MAP ================= */}

          <section className="city-map-section">
            <div className="city-section-heading">
              <div>
                <span className="city-section-label">Find your way</span>

                <h2>Location</h2>

                <p>Explore {cityData.name} on the map.</p>
              </div>
            </div>

            <div className="city-map-card">
              <div className="city-map">
                <iframe
                  title={`${cityData.name} map`}
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${cityData.map.bbox}&layer=mapnik&marker=${cityData.map.lat},${cityData.map.lng}`}
                  loading="lazy"
                />
              </div>

              <div className="city-map-info">
                <div className="city-map-location">
                  <div className="city-map-icon">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <h3>{cityData.name}</h3>

                    <p>{cityData.region}, Morocco</p>

                    <span>
                      {cityData.coordinates.lat}° N&nbsp;&nbsp;
                      {Math.abs(Number(cityData.coordinates.lng))}° W
                    </span>
                  </div>
                </div>

                <button
                  className="city-map-button"
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${cityData.coordinates.lat},${cityData.coordinates.lng}`,
                      "_blank",
                    )
                  }
                >
                  <Navigation size={17} />
                  Open in Maps
                </button>
              </div>
            </div>
          </section>

          {/* ================= DIRECTORY ================= */}

          <section className="city-directory-section">
            <div className="city-section-heading">
              <div>
                <span className="city-section-label">
                  Explore {cityData.name}
                </span>

                <h2>Everything you need in the city</h2>

                <p>
                  Discover universities, companies, hotels and healthcare
                  facilities.
                </p>
              </div>
            </div>

            <div className="city-directory">
              {/* Universities */}

              <div className="city-directory-card university">
                <div className="city-directory-top">
                  <div className="city-directory-icon">
                    <GraduationCap size={24} />
                  </div>

                  <span>{cityData.stats.universities}</span>
                </div>

                <h3>Universities</h3>

                <p>
                  Find universities and educational institutions in{" "}
                  {cityData.name}.
                </p>

                <button
                  onClick={() =>
                    navigate(
                      `/universities?city=${encodeURIComponent(cityData.name)}`,
                    )
                  }
                >
                  View Universities
                  <ArrowRight size={17} />
                </button>
              </div>

              {/* Companies */}

              <div className="city-directory-card company">
                <div className="city-directory-top">
                  <div className="city-directory-icon">
                    <Building2 size={24} />
                  </div>

                  <span>{cityData.stats.companies}</span>
                </div>

                <h3>Companies</h3>

                <p>
                  Explore businesses and career opportunities in {cityData.name}
                  .
                </p>

                <button
                  onClick={() =>
                    navigate(
                      `/companies?city=${encodeURIComponent(cityData.name)}`,
                    )
                  }
                >
                  View Companies
                  <ArrowRight size={17} />
                </button>
              </div>

              {/* Hotels */}

              <div className="city-directory-card hotel">
                <div className="city-directory-top">
                  <div className="city-directory-icon">
                    <Hotel size={24} />
                  </div>

                  <span>{cityData.stats.hotels}</span>
                </div>

                <h3>Hotels</h3>

                <p>
                  Find comfortable hotels and places to stay in {cityData.name}.
                </p>

                <button
                  onClick={() =>
                    navigate(
                      `/hotels?city=${encodeURIComponent(cityData.name)}`,
                    )
                  }
                >
                  View Hotels
                  <ArrowRight size={17} />
                </button>
              </div>

              {/* Hospitals */}

              <div className="city-directory-card hospital">
                <div className="city-directory-top">
                  <div className="city-directory-icon">
                    <Hospital size={24} />
                  </div>

                  <span>{cityData.stats.hospitals}</span>
                </div>

                <h3>Hospitals</h3>

                <p>
                  Discover healthcare facilities and medical services nearby.
                </p>

                <button
                  onClick={() =>
                    navigate(
                      `/hospitals?city=${encodeURIComponent(cityData.name)}`,
                    )
                  }
                >
                  View Hospitals
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </section>

          {/* ================= HIGHLIGHTS ================= */}

          <section className="city-highlights-section">
            <div className="city-section-heading">
              <div>
                <span className="city-section-label">Discover</span>

                <h2>City Highlights</h2>

                <p>Places and landmarks worth exploring in {cityData.name}.</p>
              </div>
            </div>

            <div className="city-highlight-grid">
              {cityData.highlights.map((highlight) => (
                <div className="city-highlight" key={highlight.title}>
                  <div className="city-highlight-icon">
                    {getHighlightIcon(highlight.icon)}
                  </div>

                  <div>
                    <h3>{highlight.title}</h3>

                    <p>{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ================= ABOUT ================= */}

          <section className="city-about">
            <div className="city-about-image">
              <img src={cityData.image} alt={cityData.name} />
            </div>

            <div className="city-about-content">
              <span className="city-section-label">About the city</span>

              <h2>About {cityData.name}</h2>

              <p>{cityData.description}</p>

              <p>
                Explore local universities, companies, hotels and healthcare
                facilities to discover everything {cityData.name} has to offer.
              </p>

              <button
                className="city-about-button"
                onClick={() => navigate("/")}
              >
                Explore MoroccoHub
                <ArrowUpRight size={17} />
              </button>
            </div>
          </section>

          {/* ================= CTA ================= */}

          <section className="city-cta">
            <div>
              <span>Discover more</span>

              <h2>Explore everything Morocco has to offer.</h2>

              <p>
                Find universities, companies, hotels, hospitals and more across
                Morocco.
              </p>
            </div>

            <button className="exploreButton" onClick={() => navigate("/")}>
              Explore Morocco
              <ArrowRight size={18} />
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CityDetail;
