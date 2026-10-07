import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BedDouble,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  ExternalLink,
  Heart,
  MapPin,
  Phone,
  Star,
  Users,
  Wifi,
  Car,
  Coffee,
  Dumbbell,
  Utensils,
  Waves,
  X,
} from "lucide-react";
import { Button } from "@mui/material";
import "./HotelDetail.css";

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
    phone: "+212 537 70 70 70",
    address: "26 Avenue Chellah, Rabat, Morocco",
    website: "https://example.com",
    checkIn: "15:00",
    checkOut: "12:00",
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Spa",
      "Parking",
      "Fitness Center",
    ],
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
    phone: "+212 529 80 80 80",
    address: "Boulevard Sidi Abderrahmane, Casablanca, Morocco",
    website: "https://example.com",
    checkIn: "15:00",
    checkOut: "12:00",
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Parking",
      "Fitness Center",
    ],
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
    phone: "+212 535 94 94 94",
    address: "Avenue des F.A.R., Fes, Morocco",
    website: "https://example.com",
    checkIn: "14:00",
    checkOut: "12:00",
    amenities: ["Free WiFi", "Swimming Pool", "Restaurant", "Parking"],
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
    phone: "+212 524 33 33 33",
    address: "Palmeraie, Marrakech, Morocco",
    website: "https://example.com",
    checkIn: "15:00",
    checkOut: "12:00",
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Parking",
      "Fitness Center",
    ],
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
    phone: "+212 524 33 99 99",
    address: "Avenue Mohamed VI, Marrakech, Morocco",
    website: "https://example.com",
    checkIn: "15:00",
    checkOut: "12:00",
    amenities: ["Free WiFi", "Swimming Pool", "Restaurant", "Spa", "Parking"],
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
    phone: "+212 539 30 30 30",
    address: "Corniche, Tangier, Morocco",
    website: "https://example.com",
    checkIn: "14:00",
    checkOut: "12:00",
    amenities: ["Free WiFi", "Restaurant", "Parking", "Coffee Shop"],
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
    phone: "+212 528 80 80 80",
    address: "Boulevard Mohammed V, Agadir, Morocco",
    website: "https://example.com",
    checkIn: "15:00",
    checkOut: "12:00",
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Beach Access",
      "Restaurant",
      "Parking",
    ],
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
    phone: "+212 535 50 50 50",
    address: "Avenue Hassan II, Meknes, Morocco",
    website: "https://example.com",
    checkIn: "14:00",
    checkOut: "12:00",
    amenities: ["Free WiFi", "Restaurant", "Parking", "Coffee Shop"],
  },
];

function HotelDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [favorite, setFavorite] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  const hotel = hotels.find((item) => item.id === Number(id));

  if (!hotel) {
    return (
      <div className="hotel-detail-not-found">
        <BedDouble size={56} />

        <h1>Hotel Not Found</h1>

        <p>
          The hotel you are looking for does not exist or may have been removed.
        </p>

        <Button variant="contained" onClick={() => navigate("/hotels")}>
          Back to Hotels
        </Button>
      </div>
    );
  }

  const getAmenityIcon = (amenity) => {
    const value = amenity.toLowerCase();

    if (value.includes("wifi")) return <Wifi size={20} />;
    if (value.includes("pool")) return <Waves size={20} />;
    if (value.includes("restaurant")) return <Utensils size={20} />;
    if (value.includes("parking")) return <Car size={20} />;
    if (value.includes("fitness")) return <Dumbbell size={20} />;
    if (value.includes("coffee")) return <Coffee size={20} />;

    return <CheckCircle2 size={20} />;
  };

  return (
    <div className="hotel-detail-page">
      {/* ================= HERO ================= */}

      <section className="hotel-detail-hero">
        <div className="hotel-detail-container">
          {/* Breadcrumb */}
          <div className="hotel-detail-breadcrumb">
            <button onClick={() => navigate("/")}>Home</button>

            <ChevronRight size={15} />

            <button onClick={() => navigate("/hotels")}>Hotels</button>

            <ChevronRight size={15} />

            <span>{hotel.name}</span>
          </div>

          {/* Back */}
          <button
            className="hotel-back-button"
            onClick={() => navigate("/hotels")}
          >
            <ArrowLeft size={18} />
            Back to Hotels
          </button>

          {/* Hero */}
          <div className="hotel-detail-hero-content">
            <div className="hotel-detail-image">
              <div className="hotel-detail-image-placeholder">
                <BedDouble size={58} />
              </div>
            </div>

            <div className="hotel-detail-heading">
              <div className="hotel-detail-title-row">
                <div>
                  <span className="hotel-detail-category">
                    {hotel.category}
                  </span>

                  <h1>{hotel.name}</h1>

                  <div className="hotel-detail-location">
                    <MapPin size={18} />
                    {hotel.city}, Morocco
                  </div>
                </div>

                <button
                  className={`hotel-detail-favorite ${
                    favorite ? "active" : ""
                  }`}
                  onClick={() => setFavorite(!favorite)}
                  aria-label="Toggle favorite"
                >
                  <Heart size={23} fill={favorite ? "currentColor" : "none"} />
                </button>
              </div>

              {/* Rating */}
              <div className="hotel-detail-rating">
                <div className="hotel-rating-stars">
                  <Star size={18} fill="currentColor" />

                  <strong>{hotel.rating}</strong>
                </div>

                <span>{hotel.reviews} reviews</span>
              </div>

              <p className="hotel-detail-description">{hotel.description}</p>

              <div className="hotel-detail-actions">
                <Button
                  variant="contained"
                  startIcon={<CalendarDays size={18} />}
                  onClick={() => setShowBooking(true)}
                >
                  Check Availability
                </Button>

                <a
                  href={hotel.website}
                  target="_blank"
                  rel="noreferrer"
                  className="hotel-website-button"
                >
                  <ExternalLink size={18} />
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUICK STATS ================= */}

      <section className="hotel-detail-stats">
        <div className="hotel-detail-container">
          <div className="hotel-stats-grid">
            <div className="hotel-stat">
              <div className="hotel-stat-icon">
                <Star size={20} />
              </div>

              <div>
                <strong>{hotel.rating}</strong>
                <span>Rating</span>
              </div>
            </div>

            <div className="hotel-stat">
              <div className="hotel-stat-icon">
                <BedDouble size={20} />
              </div>

              <div>
                <strong>{hotel.rooms}</strong>
                <span>Rooms</span>
              </div>
            </div>

            <div className="hotel-stat">
              <div className="hotel-stat-icon">
                <Users size={20} />
              </div>

              <div>
                <strong>{hotel.guests}</strong>
                <span>Guests</span>
              </div>
            </div>

            <div className="hotel-stat">
              <div className="hotel-stat-icon">
                <Clock3 size={20} />
              </div>

              <div>
                <strong>{hotel.checkIn}</strong>
                <span>Check-in</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN ================= */}

      <main className="hotel-detail-main">
        <div className="hotel-detail-container">
          <div className="hotel-detail-layout">
            {/* LEFT CONTENT */}

            <div className="hotel-detail-content">
              {/* About */}
              <section className="hotel-detail-section">
                <div className="hotel-section-heading">
                  <span>ABOUT</span>

                  <h2>About {hotel.name}</h2>
                </div>

                <p>{hotel.description}</p>

                <p>
                  Enjoy a comfortable stay with convenient facilities and
                  services designed for both leisure and business travelers.
                </p>
              </section>

              {/* Amenities */}
              <section className="hotel-detail-section">
                <div className="hotel-section-heading">
                  <span>AMENITIES</span>

                  <h2>Hotel Facilities</h2>
                </div>

                <div className="hotel-amenities-grid">
                  {hotel.amenities.map((amenity) => (
                    <div className="hotel-amenity-item" key={amenity}>
                      <div className="hotel-amenity-icon">
                        {getAmenityIcon(amenity)}
                      </div>

                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Check in / out */}
              <section className="hotel-detail-section">
                <div className="hotel-section-heading">
                  <span>STAY INFORMATION</span>

                  <h2>Check-in & Check-out</h2>
                </div>

                <div className="hotel-check-grid">
                  <div className="hotel-check-card">
                    <CalendarDays size={22} />

                    <div>
                      <span>Check-in</span>

                      <strong>{hotel.checkIn}</strong>
                    </div>
                  </div>

                  <div className="hotel-check-card">
                    <CalendarDays size={22} />

                    <div>
                      <span>Check-out</span>

                      <strong>{hotel.checkOut}</strong>
                    </div>
                  </div>
                </div>
              </section>

              {/* Reviews */}
              <section className="hotel-detail-section">
                <div className="hotel-section-heading">
                  <span>REVIEWS</span>

                  <h2>Guest Reviews</h2>
                </div>

                <div className="hotel-review-summary">
                  <div className="hotel-review-number">{hotel.rating}</div>

                  <div>
                    <div className="hotel-review-stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={18}
                          fill={
                            star <= Math.round(hotel.rating)
                              ? "currentColor"
                              : "none"
                          }
                        />
                      ))}
                    </div>

                    <p>Based on {hotel.reviews} guest reviews</p>
                  </div>
                </div>
              </section>
            </div>

            {/* RIGHT SIDEBAR */}

            <aside className="hotel-detail-sidebar">
              {/* Booking Card */}
              <div className="hotel-booking-card">
                <div className="hotel-price-header">
                  <span>Starting from</span>

                  <div className="hotel-detail-price">
                    <strong>{hotel.price.toLocaleString()}</strong>

                    <span>MAD / night</span>
                  </div>
                </div>

                <div className="hotel-booking-divider" />

                <div className="hotel-booking-row">
                  <CalendarDays size={18} />

                  <div>
                    <span>Check-in</span>
                    <strong>{hotel.checkIn}</strong>
                  </div>
                </div>

                <div className="hotel-booking-row">
                  <CalendarDays size={18} />

                  <div>
                    <span>Check-out</span>
                    <strong>{hotel.checkOut}</strong>
                  </div>
                </div>

                <div className="hotel-booking-row">
                  <Users size={18} />

                  <div>
                    <span>Guests</span>
                    <strong>{hotel.guests} guests</strong>
                  </div>
                </div>

                <Button
                  fullWidth
                  variant="contained"
                  startIcon={<CalendarDays size={18} />}
                  onClick={() => setShowBooking(true)}
                >
                  Check Availability
                </Button>
              </div>

              {/* Contact */}
              <div className="hotel-contact-card">
                <h3>Contact Hotel</h3>

                <div className="hotel-contact-item">
                  <div className="hotel-contact-icon">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <span>Address</span>

                    <p>{hotel.address}</p>
                  </div>
                </div>

                <div className="hotel-contact-item">
                  <div className="hotel-contact-icon">
                    <Phone size={18} />
                  </div>

                  <div>
                    <span>Phone</span>

                    <a href={`tel:${hotel.phone}`}>{hotel.phone}</a>
                  </div>
                </div>

                <a
                  href={hotel.website}
                  target="_blank"
                  rel="noreferrer"
                  className="hotel-sidebar-website"
                >
                  <ExternalLink size={17} />
                  Official Website
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* ================= BOOKING MODAL ================= */}

      {showBooking && (
        <div
          className="hotel-booking-overlay"
          onClick={() => setShowBooking(false)}
        >
          <div
            className="hotel-booking-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="hotel-modal-header">
              <div>
                <span>CHECK AVAILABILITY</span>

                <h2>{hotel.name}</h2>
              </div>

              <button onClick={() => setShowBooking(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="hotel-modal-content">
              <div className="hotel-modal-field">
                <label>Check-in</label>

                <div>
                  <CalendarDays size={18} />
                  Select your date
                </div>
              </div>

              <div className="hotel-modal-field">
                <label>Check-out</label>

                <div>
                  <CalendarDays size={18} />
                  Select your date
                </div>
              </div>

              <div className="hotel-modal-field">
                <label>Guests</label>

                <div>
                  <Users size={18} />
                  {hotel.guests} guests
                </div>
              </div>

              <Button
                fullWidth
                variant="contained"
                onClick={() => setShowBooking(false)}
              >
                Continue
              </Button>

              <p className="hotel-modal-note">
                This demo does not process real reservations yet.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HotelDetail;
