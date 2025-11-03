// init/data.js
const { Types } = require("mongoose");

const OWNER_ID = new Types.ObjectId("690204ecc8d3db44a72e791e");

module.exports = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "A charming seaside cottage with direct beach access and stunning sunset views. Perfect for a relaxing coastal escape.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "beach_cottage",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Beach",
    owner: OWNER_ID,
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259], // Malibu, USA
    },
  },
  {
    title: "Mountain Retreat Cabin",
    description:
      "Escape to a peaceful mountain retreat with panoramic views, cozy fireplaces, and star-filled skies.",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      filename: "mountain_cabin",
    },
    price: 1200,
    location: "Aspen",
    country: "United States",
    category: "Mountain",
    owner: OWNER_ID,
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911], // Aspen, USA
    },
  },
  {
    title: "Luxury City Apartment",
    description:
      "Modern apartment located in the heart of the city with skyline views and premium amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      filename: "city_apartment",
    },
    price: 2000,
    location: "New York",
    country: "United States",
    category: "City",
    owner: OWNER_ID,
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128], // New York City, USA
    },
  },
  {
    title: "Forest Treehouse Stay",
    description:
      "Experience nature up close in a cozy treehouse nestled in a quiet forest. A perfect romantic getaway.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename: "forest_treehouse",
    },
    price: 900,
    location: "Portland",
    country: "United States",
    category: "Forest",
    owner: OWNER_ID,
    geometry: {
      type: "Point",
      coordinates: [-122.6765, 45.5231], // Portland, USA
    },
  },
  {
    title: "Desert Glamping Dome",
    description:
      "Stay in a luxury dome under the desert stars. Ideal for stargazing, photography, and serenity.",
    image: {
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      filename: "desert_dome",
    },
    price: 1100,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Desert",
    owner: OWNER_ID,
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048], // Dubai, UAE
    },
  },
  {
    title: "Countryside Farmhouse",
    description:
      "Charming countryside farmhouse surrounded by rolling hills and fresh air — perfect for families.",
    image: {
      url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      filename: "farmhouse",
    },
    price: 800,
    location: "Tuscany",
    country: "Italy",
    category: "Countryside",
    owner: OWNER_ID,
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696], // Tuscany, Italy
    },
  },
  {
    title: "Private Luxury Villa",
    description:
      "An exclusive luxury villa with private pool, garden, and 5-star services for the ultimate indulgence.",
    image: {
      url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7",
      filename: "luxury_villa",
    },
    price: 3500,
    location: "Bali",
    country: "Indonesia",
    category: "Luxury",
    owner: OWNER_ID,
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095], // Bali, Indonesia
    },
  },
  {
    title: "Adventure Cliff Camp",
    description:
      "A thrilling cliffside camping experience for adventurers who love hiking, climbing, and the outdoors.",
    image: {
      url: "https://unsplash.com/photos/white-building-near-the-beach-m5y8LjR_l58",
      filename: "cliff_camp",
    },
    price: 700,
    location: "Leh",
    country: "India",
    category: "Adventure",
    owner: OWNER_ID,
    geometry: {
      type: "Point",
      coordinates: [77.5771, 34.1526], // Leh, India
    },
  },
  {
    title: "Urban Rooftop Loft",
    description:
      "Stylish loft with an open layout and rooftop access. Ideal for creatives and city explorers.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      filename: "urban_loft",
    },
    price: 1800,
    location: "Tokyo",
    country: "Japan",
    category: "City",
    owner: OWNER_ID,
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895], // Tokyo, Japan
    },
  },
  {
    title: "Peaceful Lakeside Cabin",
    description:
      "Relax by the water in a tranquil lakeside cabin with private dock and canoe access.",
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      filename: "lakeside_cabin",
    },
    price: 950,
    location: "Vancouver",
    country: "Canada",
    category: "Countryside",
    owner: OWNER_ID,
    geometry: {
      type: "Point",
      coordinates: [-123.1216, 49.2827], // Vancouver, Canada
    },
  },
];
