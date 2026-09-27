import { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  Star,
  Heart,
  GraduationCap,
  SlidersHorizontal,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
  Typography,
  Rating,
  IconButton,
  Drawer,
  Divider,
  Stack,
} from "@mui/material";

import "./UniversityList.css";

const universities = [
  {
    id: 1,
    name: "Mohammed V University in Rabat",
    abbreviation: "UM5R",
    city: "Rabat",
    region: "Rabat-Salé-Kénitra",
    type: "Public",
    rating: 4.8,
    reviews: 324,
    students: "35,000+",
    founded: 1957,
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=900&q=80",
    description:
      "One of Morocco's leading public universities with a wide range of academic programs and research opportunities.",
  },
  {
    id: 2,
    name: "Hassan II University of Casablanca",
    abbreviation: "UH2C",
    city: "Casablanca",
    region: "Casablanca-Settat",
    type: "Public",
    rating: 4.7,
    reviews: 287,
    students: "40,000+",
    founded: 1975,
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=900&q=80",
    description:
      "A major university in Casablanca offering programs in science, technology, medicine, business and humanities.",
  },
  {
    id: 3,
    name: "Cadi Ayyad University",
    abbreviation: "UCA",
    city: "Marrakech",
    region: "Marrakech-Safi",
    type: "Public",
    rating: 4.6,
    reviews: 219,
    students: "30,000+",
    founded: 1978,
    image:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=900&q=80",
    description:
      "A leading university in Marrakech known for its research, science and academic programs.",
  },
  {
    id: 4,
    name: "Al Akhawayn University",
    abbreviation: "AUI",
    city: "Ifrane",
    region: "Fès-Meknès",
    type: "Private",
    rating: 4.9,
    reviews: 412,
    students: "3,500+",
    founded: 1993,
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=900&q=80",
    description:
      "An English-language university in Ifrane offering undergraduate and graduate programs.",
  },
  {
    id: 5,
    name: "Sidi Mohamed Ben Abdellah University",
    abbreviation: "USMBA",
    city: "Fes",
    region: "Fès-Meknès",
    type: "Public",
    rating: 4.5,
    reviews: 198,
    students: "28,000+",
    founded: 1975,
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=900&q=80",
    description:
      "A public university based in Fes with a broad range of academic and research programs.",
  },
  {
    id: 6,
    name: "Ibn Zohr University",
    abbreviation: "UIZ",
    city: "Agadir",
    region: "Souss-Massa",
    type: "Public",
    rating: 4.6,
    reviews: 176,
    students: "25,000+",
    founded: 1989,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
    description:
      "A major public university serving students across the Souss-Massa region.",
  },
];

const cities = [
  "All Cities",
  "Rabat",
  "Casablanca",
  "Marrakech",
  "Fes",
  "Agadir",
  "Tangier",
  "Ifrane",
];

function UniversityList() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All Cities");
  const [type, setType] = useState("All Types");
  const [sort, setSort] = useState("Recommended");
  const [favorites, setFavorites] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredUniversities = useMemo(() => {
    let result = universities.filter((university) => {
      const query = search.toLowerCase().trim();

      const matchesSearch =
        !query ||
        university.name.toLowerCase().includes(query) ||
        university.abbreviation.toLowerCase().includes(query) ||
        university.city.toLowerCase().includes(query);

      const matchesCity = city === "All Cities" || university.city === city;

      const matchesType = type === "All Types" || university.type === type;

      return matchesSearch && matchesCity && matchesType;
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

    return result;
  }, [search, city, type, sort]);

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const clearFilters = () => {
    setSearch("");
    setCity("All Cities");
    setType("All Types");
    setSort("Recommended");
  };

  return (
    <div className="university-page min-h-screen bg-slate-50">
      {/* HERO */}
      {/* HERO */}
      <section className="uh-hero">
        <div className="uh-container">
          {/* Breadcrumb */}
          <div className="uh-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={16} />
            <span>Universities</span>
          </div>

          {/* Main content */}
          <div className="uh-content">
            <div className="uh-title-row">
              <div className="uh-icon">
                <GraduationCap size={30} />
              </div>

              <div>
                <h1>Universities in Morocco</h1>

                <p>
                  Discover universities, faculties and higher education
                  institutions across Morocco.
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="uh-search-wrapper">
              <Box className="uh-search">
                <TextField
                  fullWidth
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search universities by name, city or abbreviation..."
                  variant="outlined"
                  size="medium"
                  sx={{
                    flex: 1,

                    "& .MuiOutlinedInput-root": {
                      height: "54px",
                      borderRadius: "10px",
                      backgroundColor: "#fff",
                    },

                    "& fieldset": {
                      border: "none",
                    },

                    "& input": {
                      fontSize: "15px",
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
                    minWidth: "95px",
                    borderRadius: "10px",
                    backgroundColor: "#172033",
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "#0f172a",
                    },
                  }}
                  startIcon={<SlidersHorizontal size={17} />}
                >
                  Filter
                </Button>
              </Box>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}

      <main className="mx-auto grid max-w-[1180px] grid-cols-1 gap-7 px-5 py-9 lg:grid-cols-[250px_1fr]">
        {/* SIDEBAR */}

        <aside className="hidden h-fit rounded-xl border border-slate-200 bg-white p-5 lg:block">
          <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={18} />
              <h3 className="m-0 text-sm font-bold">Filters</h3>
            </div>

            <button
              onClick={clearFilters}
              className="border-0 bg-transparent text-xs font-bold text-red-600"
            >
              Clear
            </button>
          </div>

          <FilterPanel
            city={city}
            setCity={setCity}
            type={type}
            setType={setType}
          />

          <div className="mt-5 rounded-xl bg-red-50 p-4">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 text-red-600">
              <GraduationCap size={19} />
            </div>

            <h3 className="text-sm font-bold text-slate-900">
              Can't find your university?
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-500">
              Help students discover your institution by adding it to
              MoroccoHub.
            </p>

            <Button
              fullWidth
              variant="contained"
              size="small"
              sx={{
                mt: 2,
                background: "#d62828",
                textTransform: "none",
                borderRadius: "7px",
              }}
            >
              Add University
            </Button>
          </div>
        </aside>

        {/* RESULTS */}

        <section>
          <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="m-0 text-xl font-extrabold text-slate-900">
                Universities
                <span className="ml-2 rounded-md bg-red-50 px-2 py-1 text-xs text-red-600">
                  {filteredUniversities.length}
                </span>
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Discover universities matching your search.
              </p>
            </div>

            <FormControl size="small" sx={{ minWidth: 155 }}>
              <InputLabel>Sort by</InputLabel>

              <Select
                value={sort}
                label="Sort by"
                onChange={(e) => setSort(e.target.value)}
              >
                <MenuItem value="Recommended">Recommended</MenuItem>

                <MenuItem value="Rating">Highest Rating</MenuItem>

                <MenuItem value="Reviews">Most Reviews</MenuItem>

                <MenuItem value="Newest">Newest</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* ACTIVE FILTERS */}

          {(search || city !== "All Cities" || type !== "All Types") && (
            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              useFlexGap
              sx={{ mb: 2 }}
            >
              <Typography
                variant="caption"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#667085",
                }}
              >
                Active:
              </Typography>

              {search && (
                <Chip
                  size="small"
                  label={`Search: ${search}`}
                  onDelete={() => setSearch("")}
                />
              )}

              {city !== "All Cities" && (
                <Chip
                  size="small"
                  label={city}
                  onDelete={() => setCity("All Cities")}
                />
              )}

              {type !== "All Types" && (
                <Chip
                  size="small"
                  label={type}
                  onDelete={() => setType("All Types")}
                />
              )}
            </Stack>
          )}

          {/* CARDS */}

          {filteredUniversities.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
              {filteredUniversities.map((university) => (
                <UniversityCard
                  key={university.id}
                  university={university}
                  favorite={favorites.includes(university.id)}
                  toggleFavorite={() => toggleFavorite(university.id)}
                />
              ))}
            </div>
          ) : (
            <Card sx={{ borderRadius: 3, boxShadow: "none" }}>
              <CardContent className="py-20 text-center">
                <Search size={40} className="mx-auto mb-4 text-slate-300" />

                <Typography variant="h6" fontWeight={700}>
                  No universities found
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="mt-2"
                >
                  Try changing your search or filters.
                </Typography>

                <Button
                  onClick={clearFilters}
                  variant="contained"
                  sx={{
                    mt: 3,
                    background: "#d62828",
                    textTransform: "none",
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}

          {/* PAGINATION */}

          {filteredUniversities.length > 0 && (
            <div className="mt-9 flex justify-center">
              <Pagination
                count={8}
                page={1}
                color="error"
                shape="rounded"
                showFirstButton
                showLastButton
              />
            </div>
          )}
        </section>
      </main>

      {/* MOBILE FILTER DRAWER */}

      <Drawer
        anchor="left"
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
      >
        <div className="w-[300px] p-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="m-0 text-lg font-bold">Filters</h2>

            <Button onClick={() => setFilterOpen(false)} color="inherit">
              Close
            </Button>
          </div>

          <Divider />

          <div className="py-5">
            <FilterPanel
              city={city}
              setCity={setCity}
              type={type}
              setType={setType}
            />
          </div>

          <Button
            fullWidth
            variant="contained"
            onClick={() => setFilterOpen(false)}
            sx={{
              background: "#d62828",
              textTransform: "none",
            }}
          >
            Apply Filters
          </Button>
        </div>
      </Drawer>
    </div>
  );
}

/* =========================================
   FILTER PANEL
   ========================================= */

function FilterPanel({ city, setCity, type, setType }) {
  return (
    <div className="space-y-6">
      <FormControl fullWidth size="small">
        <InputLabel>City</InputLabel>

        <Select
          value={city}
          label="City"
          onChange={(e) => setCity(e.target.value)}
        >
          {cities.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth size="small">
        <InputLabel>University Type</InputLabel>

        <Select
          value={type}
          label="University Type"
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="All Types">All Types</MenuItem>

          <MenuItem value="Public">Public</MenuItem>

          <MenuItem value="Private">Private</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

/* =========================================
   UNIVERSITY CARD
   ========================================= */

function UniversityCard({ university, favorite, toggleFavorite }) {
  return (
    <Card
      className="university-card"
      sx={{
        borderRadius: "14px",
        border: "1px solid #E5E7EB",
        boxShadow: "none",
        overflow: "hidden",
      }}
    >
      {/* IMAGE */}

      <div className="relative h-[190px] overflow-hidden">
        <img
          src={university.image}
          alt={university.name}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />

        <Chip
          label={university.type}
          size="small"
          className="absolute left-3 top-3"
          sx={{
            background: "white",
            color: university.type === "Public" ? "#16834D" : "#2875D7",
            fontWeight: 700,
            fontSize: "10px",
          }}
        />

        <IconButton
          onClick={toggleFavorite}
          className="absolute right-3 top-3"
          sx={{
            width: 35,
            height: 35,
            background: "white",
            "&:hover": {
              background: "#fff",
            },
          }}
        >
          <Heart
            size={18}
            color={favorite ? "#D62828" : "#667085"}
            fill={favorite ? "#D62828" : "none"}
          />
        </IconButton>
      </div>

      {/* BODY */}

      <CardContent className="p-5">
        <div className="mb-2">
          <Typography
            variant="caption"
            sx={{
              color: "#D62828",
              fontWeight: 800,
              letterSpacing: "1px",
            }}
          >
            {university.abbreviation}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mt: 0.5,
              fontSize: "17px",
              fontWeight: 800,
              lineHeight: 1.3,
            }}
          >
            {university.name}
          </Typography>
        </div>

        <div className="mb-3 flex items-center gap-1 text-xs text-slate-500">
          <MapPin size={14} />
          {university.city}, Morocco
        </div>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: "12px",
            lineHeight: 1.6,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {university.description}
        </Typography>

        {/* RATING */}

        <div className="my-4 flex items-center justify-between border-y border-slate-100 py-3">
          <div className="flex items-center gap-2">
            <Rating
              value={university.rating}
              precision={0.1}
              size="small"
              readOnly
            />

            <span className="text-xs font-bold text-slate-700">
              {university.rating}
            </span>

            <span className="text-[11px] text-slate-400">
              ({university.reviews})
            </span>
          </div>

          <span className="text-[10px] text-slate-400">
            {university.students} students
          </span>
        </div>

        {/* FOOTER */}

        <div className="flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Est. {university.founded}
          </span>

          <Button
            size="small"
            variant="text"
            href={`/universities/${university.id}`}
            endIcon={<ExternalLink size={14} />}
            sx={{
              color: "#D62828",
              textTransform: "none",
              fontSize: "11px",
              fontWeight: 700,
            }}
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default UniversityList;
