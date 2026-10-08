import React, { useMemo, useState, useEffect } from "react";
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

// /* =========================================
//    COMPANY DATA
// ========================================= */
// const companies = [
//   {
//     id: 1,
//     name: "Maroc Telecom",
//     city: "Rabat",
//     industry: "Telecommunications",
//     type: "Public Company",
//     rating: 4.4,
//     reviews: 520,
//     founded: 1998,
//     employees: "10,000+",
//     description:
//       "A leading telecommunications company providing mobile, internet and digital services across Morocco.",
//     website: "https://www.iam.ma",
//   },
//   {
//     id: 2,
//     name: "OCP Group",
//     city: "Casablanca",
//     industry: "Mining & Chemicals",
//     type: "Public Company",
//     rating: 4.6,
//     reviews: 680,
//     founded: 1920,
//     employees: "20,000+",
//     description:
//       "A global leader in phosphate-based products and one of Morocco's largest industrial companies.",
//     website: "https://www.ocpgroup.ma",
//   },
//   {
//     id: 3,
//     name: "Attijariwafa Bank",
//     city: "Casablanca",
//     industry: "Banking & Finance",
//     type: "Private Company",
//     rating: 4.3,
//     reviews: 410,
//     founded: 2004,
//     employees: "20,000+",
//     description:
//       "A major Moroccan banking and financial group serving individuals, businesses and institutions.",
//     website: "https://www.attijariwafabank.com",
//   },
//   {
//     id: 4,
//     name: "Capgemini Morocco",
//     city: "Casablanca",
//     industry: "Technology & Consulting",
//     type: "Private Company",
//     rating: 4.5,
//     reviews: 290,
//     founded: 1967,
//     employees: "5,000+",
//     description:
//       "A technology and consulting company delivering digital transformation and technology services.",
//     website: "https://www.capgemini.com",
//   },
//   {
//     id: 5,
//     name: "Royal Air Maroc",
//     city: "Casablanca",
//     industry: "Transportation & Aviation",
//     type: "Public Company",
//     rating: 4.2,
//     reviews: 760,
//     founded: 1957,
//     employees: "10,000+",
//     description:
//       "Morocco's national airline connecting the country with destinations across Africa and the world.",
//     website: "https://www.royalairmaroc.com",
//   },
//   {
//     id: 6,
//     name: "Saham Group",
//     city: "Casablanca",
//     industry: "Investment",
//     type: "Private Company",
//     rating: 4.1,
//     reviews: 180,
//     founded: 1995,
//     employees: "1,000+",
//     description:
//       "An investment group active across multiple sectors including finance, healthcare and industry.",
//     website: "https://www.saham.com",
//   },
//   {
//     id: 7,
//     name: "Bank of Africa",
//     city: "Casablanca",
//     industry: "Banking & Finance",
//     type: "Public Company",
//     rating: 4.3,
//     reviews: 390,
//     founded: 1959,
//     employees: "15,000+",
//     description:
//       "A major Moroccan banking group offering commercial banking, investment banking and financial services.",
//     website: "https://www.bankofafrica.ma",
//   },
//   {
//     id: 8,
//     name: "CIH Bank",
//     city: "Casablanca",
//     industry: "Banking & Finance",
//     type: "Public Company",
//     rating: 4.2,
//     reviews: 340,
//     founded: 1920,
//     employees: "3,000+",
//     description:
//       "A Moroccan banking institution providing retail, corporate and digital banking services.",
//     website: "https://www.cihbank.ma",
//   },
//   {
//     id: 9,
//     name: "BMCI",
//     city: "Casablanca",
//     industry: "Banking & Finance",
//     type: "Public Company",
//     rating: 4.1,
//     reviews: 270,
//     founded: 1943,
//     employees: "3,000+",
//     description:
//       "A Moroccan bank providing retail, professional and corporate financial services.",
//     website: "https://www.bmci.ma",
//   },
//   {
//     id: 10,
//     name: "Wafa Assurance",
//     city: "Casablanca",
//     industry: "Insurance",
//     type: "Public Company",
//     rating: 4.2,
//     reviews: 240,
//     founded: 1972,
//     employees: "3,000+",
//     description:
//       "A major Moroccan insurance company offering protection, savings and financial solutions.",
//     website: "https://www.wafaassurance.ma",
//   },
//   {
//     id: 11,
//     name: "Managem Group",
//     city: "Casablanca",
//     industry: "Mining",
//     type: "Public Company",
//     rating: 4.4,
//     reviews: 310,
//     founded: 1930,
//     employees: "5,000+",
//     description:
//       "A Moroccan mining group active in the exploration, extraction and processing of mineral resources.",
//     website: "https://www.managemgroup.com",
//   },
//   {
//     id: 12,
//     name: "Akwa Group",
//     city: "Casablanca",
//     industry: "Energy & Distribution",
//     type: "Private Company",
//     rating: 4.2,
//     reviews: 220,
//     founded: 1932,
//     employees: "5,000+",
//     description:
//       "A diversified Moroccan group active in energy, petroleum distribution and related industries.",
//     website: "https://www.akwagroup.com",
//   },
//   {
//     id: 13,
//     name: "Afriquia",
//     city: "Casablanca",
//     industry: "Energy",
//     type: "Private Company",
//     rating: 4.3,
//     reviews: 350,
//     founded: 1959,
//     employees: "3,000+",
//     description:
//       "A leading Moroccan energy company operating fuel stations and petroleum distribution networks.",
//     website: "https://www.afriquia.ma",
//   },
//   {
//     id: 14,
//     name: "Marjane Group",
//     city: "Rabat",
//     industry: "Retail",
//     type: "Private Company",
//     rating: 4.3,
//     reviews: 580,
//     founded: 1990,
//     employees: "10,000+",
//     description:
//       "A major Moroccan retail group operating hypermarkets, supermarkets and specialized retail brands.",
//     website: "https://www.marjane.ma",
//   },
//   {
//     id: 15,
//     name: "LabelVie Group",
//     city: "Skhirat",
//     industry: "Retail & Distribution",
//     type: "Public Company",
//     rating: 4.2,
//     reviews: 430,
//     founded: 1985,
//     employees: "9,000+",
//     description:
//       "A Moroccan retail group operating multiple supermarket and hypermarket formats across the country.",
//     website: "https://labelvie.ma",
//   },
//   {
//     id: 16,
//     name: "Disway",
//     city: "Casablanca",
//     industry: "Technology Distribution",
//     type: "Public Company",
//     rating: 4.1,
//     reviews: 190,
//     founded: 1982,
//     employees: "500+",
//     description:
//       "A Moroccan technology distributor specializing in IT products, infrastructure and digital solutions.",
//     website: "https://www.disway.com",
//   },
//   {
//     id: 17,
//     name: "Intelcia",
//     city: "Casablanca",
//     industry: "Business Services",
//     type: "Private Company",
//     rating: 4.2,
//     reviews: 360,
//     founded: 2000,
//     employees: "40,000+",
//     description:
//       "A customer experience and outsourcing company providing multilingual business services internationally.",
//     website: "https://www.intelcia.com",
//   },
//   {
//     id: 18,
//     name: "Majorel Morocco",
//     city: "Casablanca",
//     industry: "Business Services",
//     type: "Private Company",
//     rating: 4.1,
//     reviews: 280,
//     founded: 1997,
//     employees: "5,000+",
//     description:
//       "A customer experience company providing customer support and business process services.",
//     website: "https://www.majorel.com",
//   },
//   {
//     id: 19,
//     name: "TGCC",
//     city: "Casablanca",
//     industry: "Construction",
//     type: "Public Company",
//     rating: 4.4,
//     reviews: 310,
//     founded: 1991,
//     employees: "5,000+",
//     description:
//       "A major construction and public works company involved in large-scale building and infrastructure projects.",
//     website: "https://tgcc.ma",
//   },
//   {
//     id: 20,
//     name: "Jet Contractors",
//     city: "Skhirat",
//     industry: "Construction & Engineering",
//     type: "Public Company",
//     rating: 4.3,
//     reviews: 230,
//     founded: 1992,
//     employees: "1,500+",
//     description:
//       "A Moroccan general contractor specializing in construction, engineering, building envelopes and solar EPC.",
//     website: "https://www.jet-contractors.com",
//   },
//   {
//     id: 21,
//     name: "Alliances Group",
//     city: "Casablanca",
//     industry: "Real Estate & Construction",
//     type: "Public Company",
//     rating: 4.0,
//     reviews: 210,
//     founded: 1994,
//     employees: "1,000+",
//     description:
//       "A Moroccan real estate and construction group involved in residential and property development.",
//     website: "https://www.alliances.co.ma",
//   },
//   {
//     id: 22,
//     name: "Addoha Group",
//     city: "Rabat",
//     industry: "Real Estate",
//     type: "Public Company",
//     rating: 4.0,
//     reviews: 340,
//     founded: 1988,
//     employees: "1,000+",
//     description:
//       "A Moroccan real estate developer involved in residential and housing projects.",
//     website: "https://www.groupeaddoha.com",
//   },
//   {
//     id: 23,
//     name: "Auto Hall",
//     city: "Casablanca",
//     industry: "Automotive",
//     type: "Public Company",
//     rating: 4.2,
//     reviews: 260,
//     founded: 1920,
//     employees: "2,000+",
//     description:
//       "A Moroccan automotive group involved in vehicle distribution, dealerships and related services.",
//     website: "https://www.autohall.ma",
//   },
//   {
//     id: 24,
//     name: "Renault Maroc",
//     city: "Casablanca",
//     industry: "Automotive",
//     type: "Private Company",
//     rating: 4.4,
//     reviews: 420,
//     founded: 1928,
//     employees: "10,000+",
//     description:
//       "The Moroccan automotive operation of Renault, supporting vehicle manufacturing, sales and distribution.",
//     website: "https://www.renault.ma",
//   },
//   {
//     id: 25,
//     name: "Stellantis Morocco",
//     city: "Kenitra",
//     industry: "Automotive Manufacturing",
//     type: "Private Company",
//     rating: 4.5,
//     reviews: 310,
//     founded: 2021,
//     employees: "3,000+",
//     description:
//       "An automotive manufacturing operation in Morocco producing vehicles and components for international markets.",
//     website: "https://www.stellantis.com",
//   },
//   {
//     id: 26,
//     name: "Lear Corporation Morocco",
//     city: "Kenitra",
//     industry: "Automotive Manufacturing",
//     type: "Private Company",
//     rating: 4.2,
//     reviews: 170,
//     founded: 1917,
//     employees: "5,000+",
//     description:
//       "An automotive technology company supplying seating and electrical systems to vehicle manufacturers.",
//     website: "https://www.lear.com",
//   },
//   {
//     id: 27,
//     name: "Leoni Morocco",
//     city: "Bouskoura",
//     industry: "Automotive Technology",
//     type: "Private Company",
//     rating: 4.2,
//     reviews: 190,
//     founded: 1917,
//     employees: "10,000+",
//     description:
//       "A global supplier of automotive wiring systems and electrical components with manufacturing operations in Morocco.",
//     website: "https://www.leoni.com",
//   },
//   {
//     id: 28,
//     name: "Safran Morocco",
//     city: "Casablanca",
//     industry: "Aerospace",
//     type: "Private Company",
//     rating: 4.5,
//     reviews: 250,
//     founded: 2001,
//     employees: "3,000+",
//     description:
//       "An aerospace company with Moroccan operations supporting aircraft equipment, engines and aerospace manufacturing.",
//     website: "https://www.safran-group.com",
//   },
//   {
//     id: 29,
//     name: "STMicroelectronics Morocco",
//     city: "Casablanca",
//     industry: "Electronics & Technology",
//     type: "Private Company",
//     rating: 4.4,
//     reviews: 160,
//     founded: 1987,
//     employees: "1,000+",
//     description:
//       "A global semiconductor company with engineering and technology activities in Morocco.",
//     website: "https://www.st.com",
//   },
//   {
//     id: 30,
//     name: "IBM Morocco",
//     city: "Casablanca",
//     industry: "Technology & Consulting",
//     type: "Private Company",
//     rating: 4.4,
//     reviews: 300,
//     founded: 1911,
//     employees: "1,000+",
//     description:
//       "A global technology company providing cloud, artificial intelligence, consulting and enterprise technology solutions.",
//     website: "https://www.ibm.com",
//   },
//   {
//     id: 31,
//     name: "Oracle Morocco",
//     city: "Casablanca",
//     industry: "Technology",
//     type: "Private Company",
//     rating: 4.3,
//     reviews: 210,
//     founded: 1977,
//     employees: "500+",
//     description:
//       "A global technology company providing cloud infrastructure, databases and enterprise software solutions.",
//     website: "https://www.oracle.com",
//   },
//   {
//     id: 32,
//     name: "Inetum Morocco",
//     city: "Casablanca",
//     industry: "IT Services",
//     type: "Private Company",
//     rating: 4.2,
//     reviews: 220,
//     founded: 1999,
//     employees: "1,000+",
//     description:
//       "An IT services company delivering digital transformation, software and technology consulting services.",
//     website: "https://www.inetum.com",
//   },
//   {
//     id: 33,
//     name: "Atos Morocco",
//     city: "Casablanca",
//     industry: "Technology & Consulting",
//     type: "Private Company",
//     rating: 4.1,
//     reviews: 240,
//     founded: 1997,
//     employees: "1,000+",
//     description:
//       "A technology company providing digital transformation, cybersecurity, cloud and IT services.",
//     website: "https://atos.net",
//   },
//   {
//     id: 34,
//     name: "CGI Morocco",
//     city: "Casablanca",
//     industry: "IT Services & Consulting",
//     type: "Private Company",
//     rating: 4.3,
//     reviews: 230,
//     founded: 1976,
//     employees: "2,000+",
//     description:
//       "An IT and business consulting company providing technology services to organizations worldwide.",
//     website: "https://www.cgi.com",
//   },
//   {
//     id: 35,
//     name: "PwC Morocco",
//     city: "Casablanca",
//     industry: "Professional Services",
//     type: "Private Company",
//     rating: 4.3,
//     reviews: 180,
//     founded: 1998,
//     employees: "500+",
//     description:
//       "A professional services firm providing audit, tax, consulting and advisory services.",
//     website: "https://www.pwc.com/ma",
//   },
//   {
//     id: 36,
//     name: "Deloitte Morocco",
//     city: "Casablanca",
//     industry: "Professional Services",
//     type: "Private Company",
//     rating: 4.4,
//     reviews: 190,
//     founded: 1845,
//     employees: "500+",
//     description:
//       "A professional services organization providing audit, consulting, tax and financial advisory services.",
//     website: "https://www.deloitte.com",
//   },
//   {
//     id: 37,
//     name: "EY Morocco",
//     city: "Casablanca",
//     industry: "Professional Services",
//     type: "Private Company",
//     rating: 4.3,
//     reviews: 175,
//     founded: 1989,
//     employees: "500+",
//     description:
//       "A professional services organization providing assurance, consulting, strategy and tax services.",
//     website: "https://www.ey.com",
//   },
//   {
//     id: 38,
//     name: "LafargeHolcim Maroc",
//     city: "Casablanca",
//     industry: "Building Materials",
//     type: "Public Company",
//     rating: 4.2,
//     reviews: 240,
//     founded: 1976,
//     employees: "3,000+",
//     description:
//       "A major building materials company producing cement and construction solutions for the Moroccan market.",
//     website: "https://www.lafargeholcim.ma",
//   },
//   {
//     id: 39,
//     name: "Lesieur Cristal",
//     city: "Casablanca",
//     industry: "Food & Consumer Goods",
//     type: "Public Company",
//     rating: 4.2,
//     reviews: 290,
//     founded: 1941,
//     employees: "2,000+",
//     description:
//       "A Moroccan food company producing edible oils, soaps and other consumer products.",
//     website: "https://www.lesieur-cristal.ma",
//   },
//   {
//     id: 40,
//     name: "Centrale Danone Maroc",
//     city: "Casablanca",
//     industry: "Food & Dairy",
//     type: "Public Company",
//     rating: 4.1,
//     reviews: 320,
//     founded: 1940,
//     employees: "3,000+",
//     description:
//       "A Moroccan dairy and food company producing and distributing milk, yogurt and other food products.",
//     website: "https://www.danone.ma",
//   },
//   {
//     id: 41,
//     name: "Ciments du Maroc",
//     city: "Casablanca",
//     industry: "Building Materials",
//     type: "Public Company",
//     rating: 4.2,
//     reviews: 180,
//     founded: 1951,
//     employees: "1,000+",
//     description:
//       "A major Moroccan cement producer supplying construction and infrastructure projects.",
//     website: "https://www.cimentsdumaroc.com",
//   },
//   {
//     id: 42,
//     name: "Nareva",
//     city: "Casablanca",
//     industry: "Energy",
//     type: "Private Company",
//     rating: 4.3,
//     reviews: 210,
//     founded: 2009,
//     employees: "1,000+",
//     description:
//       "A Moroccan energy company active in renewable energy, electricity generation and water infrastructure.",
//     website: "https://www.nareva.ma",
//   },
//   {
//     id: 43,
//     name: "Masen",
//     city: "Rabat",
//     industry: "Renewable Energy",
//     type: "Public Company",
//     rating: 4.5,
//     reviews: 260,
//     founded: 2010,
//     employees: "500+",
//     description:
//       "Morocco's renewable energy agency developing and managing major solar, wind and hydroelectric projects.",
//     website: "https://www.masen.ma",
//   },
//   {
//     id: 44,
//     name: "ONCF",
//     city: "Rabat",
//     industry: "Rail Transportation",
//     type: "Public Company",
//     rating: 4.3,
//     reviews: 620,
//     founded: 1963,
//     employees: "10,000+",
//     description:
//       "Morocco's national railway operator managing passenger and freight rail transportation.",
//     website: "https://www.oncf.ma",
//   },
//   {
//     id: 45,
//     name: "CTM",
//     city: "Casablanca",
//     industry: "Transportation",
//     type: "Public Company",
//     rating: 4.1,
//     reviews: 410,
//     founded: 1919,
//     employees: "2,000+",
//     description:
//       "A Moroccan transportation company providing intercity bus and logistics services.",
//     website: "https://www.ctm.ma",
//   },
// ];

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
  const [companies, setCompanies] = useState([]);

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
  }, [companies, search, industry, city, sort]);

  /* =========================================
     CLEAR FILTERS
  ========================================= */

  const clearFilters = () => {
    setSearch("");
    setIndustry("All Industries");
    setCity("All Cities");
    setSort("Rating");
  };

  // fetch companies list using api
  const fetchCompanies = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/companies`);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const result = await response.json();

      setCompanies(result.data);
    } catch (error) {
      console.error("Failed to fetch universities:", error);
      setCompanies([]);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

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
                      <Globe size={30} />
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
