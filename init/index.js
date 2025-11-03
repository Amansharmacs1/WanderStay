// init/index.js
const mongoose = require("mongoose");
const Listing = require("../models/listing");
const sampleListings = require("./data.js");

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.error("DB Connection Error:", err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/WonderLust");
}

const initDB = async () => {
  await Listing.deleteMany({});
  console.log("🗑️ Old listings deleted");

  if (!sampleListings || !Array.isArray(sampleListings)) {
    throw new Error(" sampleListings not loaded correctly!");
  }

  const OWNER_ID = "690204ecc8d3db44a72e791e";
  const listingsWithOwner = sampleListings.map((listing) => ({
    ...listing,
    owner: OWNER_ID,
  }));

  await Listing.insertMany(listingsWithOwner);
  console.log("Database seeded successfully with owner attached");
};

initDB();
