import React, { useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  Building2,
  ChevronDown,
  ChevronRight,
  Globe,
  Heart,
  MapPin,
  Search,
  SlidersHorizontal,
  Star,
  Users,
  Calendar,
  BriefcaseBusiness,
  X,
} from "lucide-react";

import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  InputAdornment,
  Drawer,
} from "@mui/material";

import "./CompanyList.css";

/* =========================================
   COMPANY DATA
========================================= */

const companies = [
  {
    id: 1,
    name: "Maroc Telecom",
    city: "Rabat",
    industry: "Telecommunications",
    type: "Public Company",
    rating: 4.4,
    reviews: 520,
    founded: 1998,
    employees: "10,000+",
    description:
      "A leading telecommunications company providing mobile, internet and digital services across Morocco.",
    website: "https://www.iam.ma",
  },

  {
    id: 2,
    name: "OCP Group",
    city: "Casablanca",
    industry: "Mining & Chemicals",
    type: "Public Company",
    rating: 4.6,
    reviews: 680,
    founded: 1920,
    employees: "20,000+",
    description:
      "A global leader in phosphate-based products and one of Morocco's largest industrial companies.",
    website: "https://www.ocpgroup.ma",
  },

  {
    id: 3,
    name: "Attijariwafa Bank",
    city: "Casablanca",
    industry: "Banking & Finance",
    type: "Private Company",
    rating: 4.3,
    reviews: 410,
    founded: 1911,
    employees: "20,000+",
    description:
      "One of Morocco's major banking groups providing financial services to individuals and businesses.",
    website: "https://www.attijariwafabank.com",
  },

  {
    id: 4,
    name: "Capgemini Morocco",
    city: "Casablanca",
    industry: "Technology",
    type: "Private Company",
    rating: 4.5,
    reviews: 290,
    founded: 1967,
    employees: "5,000+",
    description:
      "A technology and consulting company delivering digital transformation and technology services.",
    website: "https://www.capgemini.com",
  },

  {
    id: 5,
    name: "Royal Air Maroc",
    city: "Casablanca",
    industry: "Transportation",
    type: "Public Company",
    rating: 4.2,
    reviews: 760,
    founded: 1957,
    employees: "10,000+",
    description:
      "Morocco's national airline connecting the country with destinations across Africa and the world.",
    website: "https://www.royalairmaroc.com",
  },

  {
    id: 6,
    name: "Saham Group",
    city: "Casablanca",
    industry: "Investment",
    type: "Private Company",
    rating: 4.1,
    reviews: 180,
    founded: 1995,
    employees: "1,000+",
    description:
      "An investment group active across multiple sectors including finance, healthcare and industry.",
    website: "https://www.saham.com",
  },
];

/* =========================================
   FILTER DATA
========================================= */

const industries = [
  "All Industries",
  "Technology",
  "Banking & Finance",
  "Telecommunications",
  "Mining & Chemicals",
  "Transportation",
  "Investment",
];

const cities = [
  "All Cities",
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Tangier",
  "Kenitra",
  "Agadir",
];

function CompanyList() {
  const navigate = useNavigate();

  /* =========================================
     STATE
  ========================================= */

  const [search, setSearch] = useState("");

  const [industry, setIndustry] = useState("All Industries");

  const [city, setCity] = useState("All Cities");

  const [sort, setSort] = useState("Rating");

  const [favorites, setFavorites] = useState([]);

  const [filterOpen, setFilterOpen] = useState(false);

  /* =========================================
     FAVORITES
  ========================================= */

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  /* =========================================
     FILTER + SEARCH + SORT
  ========================================= */

  const filteredCompanies = useMemo(() => {
    let result = companies.filter((company) => {
      const matchesSearch =
        company.name.toLowerCase().includes(search.toLowerCase()) ||
        company.city.toLowerCase().includes(search.toLowerCase()) ||
        company.industry.toLowerCase().includes(search.toLowerCase());

      const matchesIndustry =
        industry === "All Industries" || company.industry === industry;

      const matchesCity = city === "All Cities" || company.city === city;

      return matchesSearch && matchesIndustry && matchesCity;
    });

    /* SORT */

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
  }, [search, industry, city, sort]);

  /* =========================================
     CLEAR FILTERS
  ========================================= */

  const clearFilters = () => {
    setSearch("");
    setIndustry("All Industries");
    setCity("All Cities");
    setSort("Rating");
  };

  /* =========================================
     RENDER
  ========================================= */

  return (
    <div className="company-page">
      {/* =====================================
          HERO
      ===================================== */}

      <section className="company-hero">
        <div className="company-hero-inner">
          {/* Breadcrumb */}

          <div className="company-breadcrumb">
            <Link to="/">Home</Link>

            <ChevronRight size={16} />

            <span>Companies</span>
          </div>

          {/* Heading */}

          <div className="company-heading">
            <div className="company-heading-icon">
              <Building2 size={30} />
            </div>

            <div>
              <h1>Companies in Morocco</h1>

              <p>
                Discover companies, startups and organizations across Morocco.
              </p>
            </div>
          </div>

          {/* Search */}

          <div className="company-search">
            <TextField
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search companies by name, city or industry..."
              variant="outlined"
              size="medium"
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "54px",
                  borderRadius: "10px",
                  background: "#fff",
                },

                "& fieldset": {
                  border: "none",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search size={20} color="#64748b" />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              onClick={() => setFilterOpen(true)}
              variant="contained"
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },

                height: "54px",

                minWidth: "100px",

                borderRadius: "10px",

                background: "#172033",

                textTransform: "none",

                fontWeight: 600,

                "&:hover": {
                  background: "#0f172a",
                },
              }}
              startIcon={<SlidersHorizontal size={17} />}
            >
              Filter
            </Button>
          </div>
        </div>
      </section>

      {/* =====================================
          MAIN
      ===================================== */}

      <main className="company-main">
        <div className="company-layout">
          {/* =================================
              SIDEBAR
          ================================= */}

          <aside className="company-sidebar">
            <div className="filter-header">
              <div>
                <h3>Filters</h3>

                <span>Refine your search</span>
              </div>

              <button onClick={clearFilters} className="clear-button">
                Clear
              </button>
            </div>

            {/* Industry */}

            <div className="filter-group">
              <label>Industry</label>

              <Select
                fullWidth
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                size="small"
              >
                {industries.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </div>

            {/* City */}

            <div className="filter-group">
              <label>City</label>

              <Select
                fullWidth
                value={city}
                onChange={(e) => setCity(e.target.value)}
                size="small"
              >
                {cities.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </div>

            {/* Company Type */}

            <div className="filter-group">
              <label>Company Type</label>

              <div className="filter-options">
                <button>
                  <span>Public Company</span>

                  <span>24</span>
                </button>

                <button>
                  <span>Private Company</span>

                  <span>68</span>
                </button>

                <button>
                  <span>Startup</span>

                  <span>42</span>
                </button>
              </div>
            </div>
          </aside>

          {/* =================================
              RESULTS
          ================================= */}

          <section className="company-results">
            {/* Results Header */}

            <div className="results-header">
              <div>
                <h2>Companies</h2>

                <p>
                  Showing <strong>{filteredCompanies.length}</strong> companies
                </p>
              </div>

              <div className="sort-box">
                <span>Sort by</span>

                <Select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  size="small"
                  IconComponent={ChevronDown}
                >
                  <MenuItem value="Rating">Rating</MenuItem>

                  <MenuItem value="Reviews">Most Reviewed</MenuItem>

                  <MenuItem value="Newest">Newest</MenuItem>

                  <MenuItem value="Oldest">Oldest</MenuItem>
                </Select>
              </div>
            </div>

            {/* Company Cards */}

            <div className="company-grid">
              {filteredCompanies.map((company) => (
                <article className="company-card" key={company.id}>
                  {/* Card Header */}

                  <div className="company-card-header">
                    <div className="company-logo">
                      <Building2 size={25} />
                    </div>

                    <button
                      className={`favorite-button ${
                        favorites.includes(company.id) ? "active" : ""
                      }`}
                      onClick={() => toggleFavorite(company.id)}
                    >
                      <Heart
                        size={19}
                        fill={
                          favorites.includes(company.id)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </button>
                  </div>

                  {/* Company Name */}

                  <div className="company-card-title">
                    <h3>{company.name}</h3>

                    <span>{company.industry}</span>
                  </div>

                  {/* Location + Rating */}

                  <div className="company-meta">
                    <div>
                      <MapPin size={15} />
                      {company.city}
                    </div>

                    <div className="company-rating">
                      <Star size={15} fill="currentColor" />

                      <strong>{company.rating}</strong>

                      <span>({company.reviews})</span>
                    </div>
                  </div>

                  {/* Description */}

                  <p className="company-description">{company.description}</p>

                  {/* Stats */}

                  <div className="company-stats">
                    <div>
                      <Users size={16} />

                      <span>{company.employees}</span>
                    </div>

                    <div>
                      <Calendar size={16} />

                      <span>Est. {company.founded}</span>
                    </div>
                  </div>

                  {/* Actions */}

                  <div className="company-actions">
                    <Button
                      variant="contained"
                      onClick={() => navigate(`/companies/${company.id}`)}
                      sx={{
                        flex: 1,
                        borderRadius: "9px",
                        textTransform: "none",
                        background: "#172033",
                        boxShadow: "none",
                        "&:hover": {
                          background: "#0f172a",
                          boxShadow: "none",
                        },
                      }}
                    >
                      View Details
                    </Button>

                    <a
                      href={company.website}
                      target="_blank"
                      rel="noreferrer"
                      className="website-button"
                    >
                      <Globe size={17} />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty State */}

            {filteredCompanies.length === 0 && (
              <div className="empty-state">
                <BriefcaseBusiness size={45} />

                <h3>No companies found</h3>

                <p>Try changing your search or filters.</p>

                <Button onClick={clearFilters} variant="contained">
                  Clear Filters
                </Button>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* =====================================
          MOBILE FILTER DRAWER
      ===================================== */}

      <Drawer
        anchor="right"
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
      >
        <div className="mobile-filter">
          <div className="mobile-filter-header">
            <div>
              <h3>Filters</h3>

              <span>Refine companies</span>
            </div>

            <button onClick={() => setFilterOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="filter-group">
            <label>Industry</label>

            <Select
              fullWidth
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              {industries.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className="filter-group">
            <label>City</label>

            <Select
              fullWidth
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

          <Button fullWidth onClick={clearFilters}>
            Clear Filters
          </Button>
        </div>
      </Drawer>
    </div>
  );
}

export default CompanyList;
