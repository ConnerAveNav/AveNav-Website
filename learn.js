let allLearnCards = [];

async function loadAllLearnCards() {
  try {
    const res = await fetch('learn.json');
    allLearnCards = await res.json();

    const learnGrid = document.getElementById('learnGrid');
    learnGrid.innerHTML = '';

    allLearnCards.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.content}</p>
      `;
      learnGrid.appendChild(card);
    });
  } catch (err) {
    console.error('Error loading learn cards:', err);
  }
}

function filterLearnCards() {
  const searchTerm = document.getElementById('learnSearchInput').value.toLowerCase();
  const learnGrid = document.getElementById('learnGrid');

  learnGrid.innerHTML = '';

  allLearnCards
    .filter(item => 
      item.title.toLowerCase().includes(searchTerm) ||
      item.content.toLowerCase().includes(searchTerm)
    )
    .forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.content}</p>
      `;
      learnGrid.appendChild(card);
    });
}

window.addEventListener('DOMContentLoaded', () => {
  loadAllLearnCards();
});

function toggleMobileNav() {
  const nav = document.getElementById("mobileNav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}
