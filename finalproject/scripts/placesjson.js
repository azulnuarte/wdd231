async function loadPlaces() {
  const response = await fetch('scripts/datap.json');
  const places = await response.json();

  const container = document.querySelector('#places-container');

  places.forEach(place => {
    const card = document.createElement('article');
    card.classList.add('place-card');

    card.innerHTML = `
      <img src="images/${place.image}" alt="${place.name}">
      <h2>${place.name}</h2>
      <p>${place.description}</p>
    `;

    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', loadPlaces);
