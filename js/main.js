function showGallery(category) {
  // Hide both galleries initially
  document.getElementById("airplanesGallery").style.display = "none";
  document.getElementById("helicoptersGallery").style.display = "none";

  // Show the selected gallery
  if (category === 'airplanes') {
    document.getElementById("airplanesGallery").style.display = "grid";
  } else if (category === 'helicopters') {
    document.getElementById("helicoptersGallery").style.display = "grid";
  }
}

function openModal(card) {
  const img = card.querySelector("img");
  document.getElementById("modalImage").src = img.src;
  document.getElementById("infoModel").textContent = card.dataset.model;
  document.getElementById("infoReg").textContent = card.dataset.reg;
  document.getElementById("infoDate").textContent = card.dataset.date;
  document.getElementById("infoLocation").textContent = card.dataset.location;

  document.getElementById("imageModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
