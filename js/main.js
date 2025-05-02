
const searchInput = document.getElementById("searchInput");
const airplanesGallery = document.getElementById("airplanesGallery");
const helicoptersGallery = document.getElementById("helicoptersGallery");

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();

  const allCards = [
    ...airplanesGallery.querySelectorAll(".photo-card"),
    ...helicoptersGallery.querySelectorAll(".photo-card")
  ];

  if (query.trim() !== "") {
    // Show both galleries during search
    airplanesGallery.style.display = "grid";
    helicoptersGallery.style.display = "grid";

    allCards.forEach(card => {
      const model = card.dataset.model.toLowerCase();
      const reg = card.dataset.reg.toLowerCase();
      const location = card.dataset.location.toLowerCase();
      const engine = card.dataset.engine.toLowerCase();
      const airline = card.dataset.airline?.toLowerCase() || "";
      const country = card.dataset.country?.toLowerCase() || "";
      const livery = card.dataset.livery?.toLowerCase() || "";

      const match = model.includes(query) ||
                    reg.includes(query) ||
                    location.includes(query) ||
                    engine.includes(query) ||
                    airline.includes(query) ||
                    country.includes(query) ||
                    livery.includes(query);

      card.style.display = match ? "block" : "none";
    });
  } else {
    // If search is cleared, restore to default: show only the active gallery
    showGallery(currentGallery);
  }
});

function showGallery(type) {
  currentGallery = type;
  if (type === "airplanes") {
    airplanesGallery.style.display = "grid";
    helicoptersGallery.style.display = "none";
  } else {
    airplanesGallery.style.display = "none";
    helicoptersGallery.style.display = "grid";
  }

  // Make all cards visible again
  document.querySelectorAll(".photo-card").forEach(card => {
    card.style.display = "block";
  });

  // Clear search
  searchInput.value = "";
}

function openModal(card) {
  const img = card.querySelector("img");
  document.getElementById("modalImage").src = img.src;
  document.getElementById("infoModel").textContent = card.dataset.model;
  document.getElementById("infoReg").textContent = card.dataset.reg;
  document.getElementById("infoDate").textContent = card.dataset.date;
  document.getElementById("infoLocation").textContent = card.dataset.location;
  document.getElementById("infoEngine").textContent = card.dataset.engine;
  document.getElementById("infoAirline").textContent = card.dataset.airline;
  document.getElementById("infoCountry").textContent = card.dataset.country;
  document.getElementById("infoFirstFlight").textContent = card.dataset.firstflight;
  document.getElementById("infoLivery").textContent = card.dataset.livery;
  document.getElementById("infoPhotographer").textContent = card.dataset.photographer;

  document.getElementById("imageModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
