import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BedDouble,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  Heart,
  MapPin,
  Search,
  SlidersHorizontal,
  Star,
  Users,
  Wifi,
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

import "./HotelList.css";

const hotels = [
  {
    id: 1,
    name: "La Tour Hassan Palace",
    city: "Rabat",
    category: "Luxury",
    rating: 4.7,
    reviews: 820,
    price: 1800,
    rooms: 142,
    guests: "2-4",
    description:
      "A luxurious hotel in the heart of Rabat offering elegant rooms, refined dining, and premium hospitality.",
    amenities: ["WiFi", "Pool", "Restaurant", "Spa"],
  },
  {
    id: 2,
    name: "Four Seasons Hotel Casablanca",
    city: "Casablanca",
    category: "Luxury",
    rating: 4.8,
    reviews: 1250,
    price: 2500,
    rooms: 186,
    guests: "2-4",
    description:
      "A modern luxury hotel overlooking the Atlantic Ocean with premium rooms, restaurants, and wellness facilities.",
    amenities: ["WiFi", "Pool", "Spa", "Restaurant"],
  },
  {
    id: 3,
    name: "Royal Mirage Fes",
    city: "Fes",
    category: "Premium",
    rating: 4.4,
    reviews: 540,
    price: 950,
    rooms: 120,
    guests: "2-3",
    description:
      "A comfortable hotel in Fes combining traditional Moroccan hospitality with modern amenities.",
    amenities: ["WiFi", "Pool", "Restaurant"],
  },
  {
    id: 4,
    name: "Marrakech Palm Resort",
    city: "Marrakech",
    category: "Resort",
    rating: 4.6,
    reviews: 970,
    price: 1450,
    rooms: 210,
    guests: "2-5",
    description:
      "A relaxing Marrakech resort surrounded by gardens and offering pools, restaurants, and leisure activities.",
    amenities: ["WiFi", "Pool", "Spa", "Parking"],
  },
  {
    id: 5,
    name: "Hotel Kenzi Menara Palace",
    city: "Marrakech",
    category: "Luxury",
    rating: 4.5,
    reviews: 760,
    price: 1600,
    rooms: 236,
    guests: "2-4",
    description:
      "A spacious luxury hotel offering comfortable accommodation, gardens, pools, and views of the Atlas Mountains.",
    amenities: ["WiFi", "Pool", "Restaurant", "Spa"],
  },
  {
    id: 6,
    name: "Tangier Bay Hotel",
    city: "Tangier",
    category: "Premium",
    rating: 4.3,
    reviews: 430,
    price: 850,
    rooms: 98,
    guests: "2-3",
    description:
      "A contemporary hotel near Tangier's waterfront with comfortable rooms and convenient city access.",
    amenities: ["WiFi", "Restaurant", "Parking"],
  },
  {
    id: 7,
    name: "Agadir Beach Resort",
    city: "Agadir",
    category: "Resort",
    rating: 4.5,
    reviews: 690,
    price: 1100,
    rooms: 175,
    guests: "2-5",
    description:
      "A beachfront resort in Agadir offering comfortable accommodation, swimming pools, and easy beach access.",
    amenities: ["WiFi", "Pool", "Beach", "Restaurant"],
  },
  {
    id: 8,
    name: "Atlas Hotel Meknes",
    city: "Meknes",
    category: "Standard",
    rating: 4.1,
    reviews: 310,
    price: 550,
    rooms: 75,
    guests: "1-3",
    description:
      "A practical and comfortable hotel for travelers looking to explore the historic city of Meknes.",
    amenities: ["WiFi", "Restaurant", "Parking"],
  },
];

const categories = [
  "All Categories",
  "Luxury",
  "Premium",
  "Resort",
  "Standard",
];

const cities = [
  "All Cities",
  "Rabat",
  "Casablanca",
  "Marrakech",
  "Fes",
  "Tangier",
  "Agadir",
  "Meknes",
];

function HotelList() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [city, setCity] = useState("All Cities");
  const [sort, setSort] = useState("Rating");
  const [favorites, setFavorites] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const filteredHotels = useMemo(() => {
    let result = hotels.filter((hotel) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        hotel.name.toLowerCase().includes(searchValue) ||
        hotel.city.toLowerCase().includes(searchValue) ||
        hotel.category.toLowerCase().includes(searchValue);

      const matchesCategory =
        category === "All Categories" || hotel.category === category;

      const matchesCity = city === "All Cities" || hotel.city === city;

      return matchesSearch && matchesCategory && matchesCity;
    });

    if (sort === "Rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sort === "Reviews") {
      result.sort((a, b) => b.reviews - a.reviews);
    }

    if (sort === "Price Low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "Price High") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [search, category, city, sort]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All Categories");
    setCity("All Cities");
    setSort("Rating");
  };

  const Filters = () => (
    <div className="hotel-filter-content">
      <div className="hotel-filter-heading">
        <div>
          <span>FILTERS</span>
          <h3>Find your hotel</h3>
        </div>

        <button className="hotel-clear-button" onClick={clearFilters}>
          Clear
        </button>
      </div>

      {/* Category */}
      <div className="hotel-filter-group">
        <label>Hotel Category</label>

        <div className="hotel-filter-options">
          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item
                  ? "hotel-filter-option active"
                  : "hotel-filter-option"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* City */}
      <div className="hotel-filter-group">
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

      {/* Quick info */}
      <div className="hotel-filter-info">
        <BedDouble size={20} />

        <div>
          <strong>Morocco Hotels</strong>
          <span>Discover hotels across Morocco</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="hotel-list-page">
      {/* ================= HERO ================= */}

      <section className="hotel-hero">
        <div className="hotel-container">
          <div className="hotel-breadcrumb">
            <button onClick={() => navigate("/")}>Home</button>

            <ChevronRight size={15} />

            <span>Hotels</span>
          </div>

          <div className="hotel-hero-content">
            <div className="hotel-hero-icon">
              <BedDouble size={32} />
            </div>

            <div>
              <span className="hotel-eyebrow">MOROCCOHUB HOTELS</span>

              <h1>Find your perfect stay</h1>

              <p>
                Discover hotels, resorts, and comfortable stays across Morocco.
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="hotel-search-wrapper">
            <TextField
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search hotels, cities, or categories..."
              className="hotel-search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search size={21} />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              className="hotel-search-button"
              variant="contained"
              onClick={() => {}}
            >
              Search
            </Button>
          </div>

          {/* Mobile filters */}
          <button
            className="hotel-mobile-filter"
            onClick={() => setFilterOpen(true)}
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </div>
      </section>

      {/* ================= MAIN ================= */}

      <main className="hotel-main">
        <div className="hotel-container">
          <div className="hotel-layout">
            {/* Desktop Sidebar */}
            <aside className="hotel-sidebar">
              <Filters />
            </aside>

            {/* Results */}
            <section className="hotel-results">
              <div className="hotel-results-header">
                <div>
                  <span className="hotel-results-label">HOTELS</span>

                  <h2>
                    {filteredHotels.length}{" "}
                    {filteredHotels.length === 1 ? "hotel" : "hotels"} found
                  </h2>
                </div>

                <div className="hotel-sort">
                  <span>Sort by</span>

                  <Select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    size="small"
                    IconComponent={ChevronDown}
                  >
                    <MenuItem value="Rating">Rating</MenuItem>

                    <MenuItem value="Reviews">Reviews</MenuItem>

                    <MenuItem value="Price Low">Price: Low to High</MenuItem>

                    <MenuItem value="Price High">Price: High to Low</MenuItem>
                  </Select>
                </div>
              </div>

              {/* Hotel Grid */}
              {filteredHotels.length > 0 ? (
                <div className="hotel-grid">
                  {filteredHotels.map((hotel) => {
                    const isFavorite = favorites.includes(hotel.id);

                    return (
                      <article className="hotel-card" key={hotel.id}>
                        {/* Image Placeholder */}
                        <div className="hotel-card-image">
                          <div className="hotel-image-placeholder">
                            <BedDouble size={42} />
                          </div>

                          <span className="hotel-category-badge">
                            {hotel.category}
                          </span>

                          <button
                            className={`hotel-favorite ${
                              isFavorite ? "active" : ""
                            }`}
                            onClick={() => toggleFavorite(hotel.id)}
                            aria-label="Toggle favorite"
                          >
                            <Heart
                              size={19}
                              fill={isFavorite ? "currentColor" : "none"}
                            />
                          </button>
                        </div>

                        {/* Card Content */}
                        <div className="hotel-card-content">
                          <div className="hotel-card-title-row">
                            <div>
                              <h3>{hotel.name}</h3>

                              <div className="hotel-location">
                                <MapPin size={15} />
                                {hotel.city}, Morocco
                              </div>
                            </div>
                          </div>

                          {/* Rating */}
                          <div className="hotel-rating">
                            <span className="hotel-rating-value">
                              <Star size={15} fill="currentColor" />
                              {hotel.rating}
                            </span>

                            <span className="hotel-review-count">
                              ({hotel.reviews} reviews)
                            </span>
                          </div>

                          <p className="hotel-description">
                            {hotel.description}
                          </p>

                          {/* Amenities */}
                          <div className="hotel-amenities">
                            {hotel.amenities.slice(0, 3).map((amenity) => (
                              <span key={amenity}>{amenity}</span>
                            ))}
                          </div>

                          {/* Bottom */}
                          <div className="hotel-card-bottom">
                            <div className="hotel-price">
                              <strong>{hotel.price.toLocaleString()}</strong>

                              <span>MAD / night</span>
                            </div>

                            <Button
                              variant="contained"
                              onClick={() => navigate(`/hotels/${hotel.id}`)}
                            >
                              View Details
                            </Button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                /* Empty State */
                <div className="hotel-empty">
                  <div className="hotel-empty-icon">
                    <Search size={30} />
                  </div>

                  <h3>No hotels found</h3>

                  <p>Try changing your search or filters.</p>

                  <Button variant="contained" onClick={clearFilters}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
      >
        <div className="hotel-drawer">
          <div className="hotel-drawer-header">
            <h3>Filters</h3>

            <button onClick={() => setFilterOpen(false)}>
              <X size={21} />
            </button>
          </div>

          <Filters />
        </div>
      </Drawer>
    </div>
  );
}

export default HotelList;
