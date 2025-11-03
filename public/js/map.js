document.addEventListener("DOMContentLoaded", () => {
  if (!listingData.geometry || !listingData.geometry.coordinates) {
    console.warn("⚠️ No geometry found for this listing:", listingData);
    return;
  }

  const lat = listingData.geometry.coordinates[1];
  const lng = listingData.geometry.coordinates[0];

  const map = L.map("map").setView([lat, lng], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(`<strong>${listingData.title}</strong><br>${listingData.location}`)
    .openPopup();
});
