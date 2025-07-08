console.log("Conner Aviation website loaded.");

function toggleCard(card) {
  document.querySelectorAll('.photo-card.expanded').forEach(openCard => {
    if (openCard !== card) openCard.classList.remove('expanded');
  });

  card.classList.toggle('expanded');
}

function filterCards() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();

  const typeCheckboxes = Array.from(document.querySelectorAll('#filterPanel h4:nth-of-type(1) + label input[type="checkbox"]:checked'));
  const selectedTypes = typeCheckboxes.map(cb => cb.value.toLowerCase());

  const liveryCheckboxes = Array.from(document.querySelectorAll('#filterPanel h4:nth-of-type(2) + label input[type="checkbox"]:checked'));
  const selectedLiveries = liveryCheckboxes.map(cb => cb.value.toLowerCase());

  const cards = document.querySelectorAll('#galleryGrid .photo-card');

  cards.forEach(card => {
    const reg = card.getAttribute('data-reg').toLowerCase();
    const livery = card.getAttribute('data-livery').toLowerCase();
    const type = card.getAttribute('data-type').toLowerCase();

    const matchesSearch =
      reg.includes(searchTerm) ||
      livery.includes(searchTerm) ||
      type.includes(searchTerm);

    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(type);
    const matchesLivery = selectedLiveries.length === 0 || selectedLiveries.includes(livery);

    if (matchesSearch && matchesType && matchesLivery) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
      card.classList.remove('expanded');
    }
  });
}

function toggleFilters() {
  const panel = document.getElementById('filterPanel');
  panel.classList.toggle('active');
}

function toggleMobileNav() {
  const nav = document.getElementById("mobileNav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

async function loadGallery() {
  try {
    const res = await fetch('gallery.json');
    const galleryData = await res.json();

    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = '';

    const isHomePage = window.location.pathname.includes("index.html") || window.location.pathname === "/" || window.location.pathname === "/index";

    const dataToUse = isHomePage ? galleryData.slice(0, 4) : galleryData;

    dataToUse.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'photo-card';
      card.setAttribute('data-reg', item.reg);
      card.setAttribute('data-livery', item.livery);
      card.setAttribute('data-type', item.type);
      card.onclick = () => toggleCard(card);

      const imgDiv = document.createElement('div');
      imgDiv.className = 'card-image';
      const img = document.createElement('img');
      img.src = item.img;
      img.alt = item.title;
      imgDiv.appendChild(img);

      const infoDiv = document.createElement('div');
      infoDiv.className = 'card-info';
      infoDiv.innerHTML = `
        <h3>${item.title}</h3>
        <p><strong>Registration:</strong> ${item.reg}</p>
        <p><strong>Livery:</strong> ${item.livery}</p>
        <p><strong>Type:</strong> ${item.type}</p>
        <p>${item.desc}</p>
      `;

      card.appendChild(imgDiv);
      card.appendChild(infoDiv);
      grid.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading gallery data:', error);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadGallery();
});
