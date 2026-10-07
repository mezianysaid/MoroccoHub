import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  Building2,
  Calendar,
  ChevronDown,
  ChevronRight,
  Clock3,
  Cross,
  Heart,
  Hospital,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Star,
  Stethoscope,
  Users,
  X,
} from "lucide-react";

import {
  Box,
  Button,
  Drawer,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import "./HospitalList.css";

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
    description:
      "A modern multi-specialty hospital offering advanced medical care, surgery, diagnostics, and emergency services.",
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
    description:
      "A major healthcare institution providing specialized medical services, surgery, diagnostics, and patient care.",
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
    description:
      "A major public university hospital providing a wide range of medical specialties and teaching services.",
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
    description:
      "A modern private hospital focused on specialized treatments, diagnostics, surgery, and personalized patient care.",
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
    description:
      "A leading healthcare facility offering advanced medical specialties, modern infrastructure, and comprehensive care.",
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
    description:
      "A large university hospital serving patients across Marrakech and the surrounding region with multiple specialties.",
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
    description:
      "A modern healthcare center providing specialist consultations, diagnostics, surgery, and patient services.",
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
    description:
      "A large modern hospital providing specialized healthcare, emergency services, surgery, and medical training.",
  },
];

const hospitalTypes = ["All Types", "Public", "Private"];

const specialties = [
  "All Specialties",
  "Multi-Specialty",
  "University Hospital",
  "Cardiology",
  "Neurology",
  "Orthopedics",
];

const cities = [
  "All Cities",
  "Rabat",
  "Casablanca",
  "Marrakech",
  "Agadir",
  "Tangier",
];

const sortOptions = ["Recommended", "Rating", "Reviews", "Newest", "Oldest"];

const HospitalList = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [hospitalType, setHospitalType] = useState("All Types");
  const [specialty, setSpecialty] = useState("All Specialties");
  const [city, setCity] = useState("All Cities");
  const [sort, setSort] = useState("Recommended");
  const [favorites, setFavorites] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const clearFilters = () => {
    setSearch("");
    setHospitalType("All Types");
    setSpecialty("All Specialties");
    setCity("All Cities");
    setSort("Recommended");
  };

  const filteredHospitals = useMemo(() => {
    const result = hospitals.filter((hospital) => {
      const searchMatch =
        hospital.name.toLowerCase().includes(search.toLowerCase()) ||
        hospital.city.toLowerCase().includes(search.toLowerCase()) ||
        hospital.specialty.toLowerCase().includes(search.toLowerCase());

      const typeMatch =
        hospitalType === "All Types" || hospital.type === hospitalType;

      const specialtyMatch =
        specialty === "All Specialties" || hospital.specialty === specialty;

      const cityMatch = city === "All Cities" || hospital.city === city;

      return searchMatch && typeMatch && specialtyMatch && cityMatch;
    });

    if (sort === "Rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sort === "Reviews") {
      result.sort((a, b) => b.reviews - a.reviews);
    }

    if (sort === "Newest") {
      result.sort((a, b) => b.founded - a.founded);
    }

    if (sort === "Oldest") {
      result.sort((a, b) => a.founded - b.founded);
    }

    return result;
  }, [search, hospitalType, specialty, city, sort]);

  return (
    <div className="hospital-page">
      {/* HERO */}
      <section className="hospital-hero">
        <div className="hospital-hero-overlay" />

        <div className="hospital-container hospital-hero-content">
          <div className="hospital-breadcrumb">
            <span onClick={() => navigate("/")}>Home</span>
            <ChevronRight size={15} />
            <span>Hospitals</span>
          </div>

          <div className="hospital-hero-main">
            <div className="hospital-hero-icon">
              <Hospital size={32} />
            </div>

            <div>
              <div className="hospital-eyebrow">
                <ShieldCheck size={16} />
                Trusted Healthcare Directory
              </div>

              <h1>Find Hospitals in Morocco</h1>

              <p>
                Discover hospitals, medical centers, and healthcare facilities
                across Morocco.
              </p>
            </div>
          </div>

          <div className="hospital-search-box">
            <Search size={21} />

            <input
              type="text"
              placeholder="Search hospitals, specialties, or cities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                className="hospital-search-clear"
                onClick={() => setSearch("")}
              >
                <X size={18} />
              </button>
            )}

            <button className="hospital-search-button">Search</button>
          </div>

          <div className="hospital-quick-stats">
            <div>
              <Hospital size={18} />
              <span>
                <strong>{hospitals.length}+</strong>
                Hospitals
              </span>
            </div>

            <div>
              <MapPin size={18} />
              <span>
                <strong>12+</strong>
                Cities
              </span>
            </div>

            <div>
              <Stethoscope size={18} />
              <span>
                <strong>100+</strong>
                Specialties
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <main className="hospital-container hospital-main">
        {/* MOBILE FILTER BUTTON */}
        <div className="hospital-mobile-filter">
          <Button
            variant="outlined"
            startIcon={<SlidersHorizontal size={18} />}
            onClick={() => setFilterOpen(true)}
          >
            Filters
          </Button>
        </div>

        <div className="hospital-layout">
          {/* SIDEBAR */}
          <aside className="hospital-sidebar">
            <div className="hospital-filter-header">
              <div>
                <h3>Filters</h3>
                <span>Refine your search</span>
              </div>

              <button onClick={clearFilters}>Clear</button>
            </div>

            {/* TYPE */}
            <div className="hospital-filter-group">
              <label>Hospital Type</label>

              <Select
                fullWidth
                size="small"
                value={hospitalType}
                onChange={(e) => setHospitalType(e.target.value)}
              >
                {hospitalTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </div>

            {/* SPECIALTY */}
            <div className="hospital-filter-group">
              <label>Specialty</label>

              <Select
                fullWidth
                size="small"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
              >
                {specialties.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </div>

            {/* CITY */}
            <div className="hospital-filter-group">
              <label>City</label>

              <Select
                fullWidth
                size="small"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                {cities.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </div>

            {/* SERVICES */}
            <div className="hospital-services-filter">
              <label>Services</label>

              <label className="hospital-checkbox">
                <input type="checkbox" />
                <span>Emergency</span>
              </label>

              <label className="hospital-checkbox">
                <input type="checkbox" />
                <span>24/7 Open</span>
              </label>

              <label className="hospital-checkbox">
                <input type="checkbox" />
                <span>Specialized Care</span>
              </label>
            </div>

            {/* INFO BOX */}
            <div className="hospital-help-box">
              <Activity size={22} />

              <div>
                <strong>Need urgent care?</strong>
                <p>
                  For medical emergencies, contact local emergency services
                  immediately.
                </p>
              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <section className="hospital-results">
            <div className="hospital-results-header">
              <div>
                <span className="hospital-results-label">
                  Healthcare Directory
                </span>

                <h2>{filteredHospitals.length} Hospitals Found</h2>

                <p>
                  Browse hospitals and healthcare facilities across Morocco.
                </p>
              </div>

              <div className="hospital-sort">
                <span>Sort by</span>

                <Select
                  size="small"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                >
                  {sortOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>

            {/* ACTIVE FILTERS */}
            {(hospitalType !== "All Types" ||
              specialty !== "All Specialties" ||
              city !== "All Cities" ||
              search) && (
              <div className="hospital-active-filters">
                {search && (
                  <span>
                    Search: "{search}"
                    <X size={14} onClick={() => setSearch("")} />
                  </span>
                )}

                {hospitalType !== "All Types" && (
                  <span>
                    {hospitalType}
                    <X size={14} onClick={() => setHospitalType("All Types")} />
                  </span>
                )}

                {specialty !== "All Specialties" && (
                  <span>
                    {specialty}
                    <X
                      size={14}
                      onClick={() => setSpecialty("All Specialties")}
                    />
                  </span>
                )}

                {city !== "All Cities" && (
                  <span>
                    {city}
                    <X size={14} onClick={() => setCity("All Cities")} />
                  </span>
                )}
              </div>
            )}

            {/* CARDS */}
            {filteredHospitals.length > 0 ? (
              <div className="hospital-grid">
                {filteredHospitals.map((hospital) => (
                  <article className="hospital-card" key={hospital.id}>
                    {/* IMAGE / COVER */}
                    <div className="hospital-card-cover">
                      <div className="hospital-cover-pattern">
                        <Cross size={100} />
                      </div>

                      <div className="hospital-card-type">{hospital.type}</div>

                      <button
                        className={`hospital-favorite ${
                          favorites.includes(hospital.id) ? "active" : ""
                        }`}
                        onClick={() => toggleFavorite(hospital.id)}
                        aria-label="Add to favorites"
                      >
                        <Heart
                          size={19}
                          fill={
                            favorites.includes(hospital.id)
                              ? "currentColor"
                              : "none"
                          }
                        />
                      </button>

                      {hospital.emergency && (
                        <span className="hospital-emergency-badge">
                          <Activity size={13} />
                          Emergency
                        </span>
                      )}
                    </div>

                    {/* BODY */}
                    <div className="hospital-card-body">
                      <div className="hospital-card-title-row">
                        <div className="hospital-mini-icon">
                          <Hospital size={20} />
                        </div>

                        <div>
                          <h3>{hospital.name}</h3>

                          <div className="hospital-location">
                            <MapPin size={14} />
                            {hospital.city}, Morocco
                          </div>
                        </div>
                      </div>

                      <div className="hospital-rating">
                        <div className="hospital-stars">
                          <Star size={15} fill="currentColor" />
                          <strong>{hospital.rating}</strong>
                        </div>

                        <span>{hospital.reviews.toLocaleString()} reviews</span>
                      </div>

                      <p className="hospital-description">
                        {hospital.description}
                      </p>

                      {/* FEATURES */}
                      <div className="hospital-features">
                        <div>
                          <Building2 size={15} />
                          <span>{hospital.beds} Beds</span>
                        </div>

                        <div>
                          <Users size={15} />
                          <span>{hospital.doctors} Doctors</span>
                        </div>

                        <div>
                          <Stethoscope size={15} />
                          <span>{hospital.specialty}</span>
                        </div>
                      </div>

                      <div className="hospital-card-footer">
                        <div className="hospital-status">
                          <span
                            className={
                              hospital.open24 ? "status-dot open" : "status-dot"
                            }
                          />

                          {hospital.open24 ? "Open 24/7" : "Hours vary"}
                        </div>

                        <span className="hospital-founded">
                          <Calendar size={14} />
                          Since {hospital.founded}
                        </span>
                      </div>

                      <div className="hospital-card-actions">
                        <Button
                          variant="contained"
                          onClick={() => navigate(`/hospitals/${hospital.id}`)}
                          endIcon={<ChevronRight size={17} />}
                        >
                          View Details
                        </Button>

                        <a
                          href={`tel:${hospital.phone}`}
                          className="hospital-call-button"
                        >
                          <Phone size={17} />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="hospital-empty">
                <div className="hospital-empty-icon">
                  <Hospital size={38} />
                </div>

                <h3>No hospitals found</h3>

                <p>
                  Try changing your search or filters to find more hospitals.
                </p>

                <Button variant="contained" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="left"
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
      >
        <div className="hospital-mobile-drawer">
          <div className="hospital-drawer-header">
            <div>
              <h3>Filters</h3>
              <span>Refine your search</span>
            </div>

            <button onClick={() => setFilterOpen(false)}>
              <X size={21} />
            </button>
          </div>

          <div className="hospital-filter-group">
            <label>Hospital Type</label>

            <Select
              fullWidth
              size="small"
              value={hospitalType}
              onChange={(e) => setHospitalType(e.target.value)}
            >
              {hospitalTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className="hospital-filter-group">
            <label>Specialty</label>

            <Select
              fullWidth
              size="small"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            >
              {specialties.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className="hospital-filter-group">
            <label>City</label>

            <Select
              fullWidth
              size="small"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              {cities.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>

          <Button
            fullWidth
            variant="contained"
            onClick={() => setFilterOpen(false)}
          >
            Apply Filters
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

export default HospitalList;
